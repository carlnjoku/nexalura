import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4F46E5',     // Indigo 600
      light: '#818CF8',    // Indigo 400
      dark: '#4338CA',     // Indigo 700
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8B5CF6',     // Purple 500
      light: '#A78BFA',    // Purple 400
      dark: '#7C3AED',     // Purple 600
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#F5F3FF',    // Very light indigo tint
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, padding: '8px 24px' },
        containedPrimary: { 
          boxShadow: 'none', 
          '&:hover': { 
            boxShadow: '0px 4px 8px rgba(79, 70, 229, 0.25)'  // indigo-tinted shadow
          } 
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { 
          borderRadius: 16, 
          boxShadow: '0px 4px 20px rgba(0,0,0,0.05)' 
        },
      },
    },
  },
});