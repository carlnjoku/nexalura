// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   Container,
//   Menu,
//   MenuItem,
//   useMediaQuery,
//   useTheme,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Portfolio', path: '/portfolio' },
//     { name: 'Process', path: '/process' },
//     { name: 'Technologies', path: '/technologies' },
//     { name: 'Pricing', path: '/pricing' },
//     { name: 'FAQ', path: '/faq' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   const serviceLinks = [
//     { name: 'Web Development', path: '/services/web-development' },
//     { name: 'Mobile Development', path: '/services/mobile-development' },
//     { name: 'UI/UX Design', path: '/services/ui-ux-design' },
//     { name: 'AI & Automation', path: '/services/ai-automation' },
//   ];

//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
//   const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
//   const handleMenuClose = () => setAnchorEl(null);

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>Nexalura</Typography>
//       <List>
//         {navLinks.map((link) => (
//           <ListItem key={link.path} component={Link} to={link.path}>
//             <ListItemText primary={link.name} />
//           </ListItem>
//         ))}
//         <ListItem>
//           <ListItemText primary="Services" />
//         </ListItem>
//         {serviceLinks.map((s) => (
//           <ListItem key={s.path} component={Link} to={s.path} sx={{ pl: 4 }}>
//             <ListItemText primary={s.name} />
//           </ListItem>
//         ))}
//       </List>
//       <Button component={Link} to="/request-quote" variant="contained" sx={{ m: 2 }}>
//         Get Quote
//       </Button>
//     </Box>
//   );

//   return (
//     <>
//       <AppBar position="sticky" color="default" elevation={1}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
//             {/* Logo - left */}
//             <Typography
//               variant="h6"
//               component={Link}
//               to="/"
//               sx={{
//                 fontFamily: 'monospace',
//                 fontWeight: 700,
//                 letterSpacing: '.1rem',
//                 color: 'primary.main',
//                 textDecoration: 'none',
//               }}
//             >
//               Nexalura
//             </Typography>

//             {/* Desktop Navigation - right */}
//             {!isMobile ? (
//               <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
//                 {navLinks.map((link) => (
//                   <Button
//                     key={link.path}
//                     component={Link}
//                     to={link.path}
//                     color="inherit"
//                   >
//                     {link.name}
//                   </Button>
//                 ))}
//                 <Button onClick={handleMenuOpen} color="inherit">
//                   Services
//                 </Button>
//                 <Menu
//                   anchorEl={anchorEl}
//                   open={Boolean(anchorEl)}
//                   onClose={handleMenuClose}
//                 >
//                   {serviceLinks.map((s) => (
//                     <MenuItem
//                       key={s.path}
//                       component={Link}
//                       to={s.path}
//                       onClick={handleMenuClose}
//                     >
//                       {s.name}
//                     </MenuItem>
//                   ))}
//                 </Menu>
//                 <Button
//                   component={Link}
//                   to="/request-quote"
//                   variant="contained"
//                 >
//                   Get Quote
//                 </Button>
//               </Box>
//             ) : (
//               <IconButton onClick={handleDrawerToggle}>
//                 <MenuIcon />
//               </IconButton>
//             )}
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
//         {drawer}
//       </Drawer>
//     </>
//   );
// };

// export default Header;




import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/process' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'App Publishing', path: '/app-store-publishing' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile Development', path: '/services/mobile-development' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'AI & Automation', path: '/services/ai-automation' },
    { name: 'API Integrations', path: '/services/api-integrations' },
    { name: 'Cloud & DevOps', path: '/services/cloud-devops' },
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2 }}>
        <img src="/nexalura.png" alt="Nexalura" style={{ height: 40 }} />
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.path} component={Link} to={link.path}>
            <ListItemText primary={link.name} />
          </ListItem>
        ))}
        <ListItem>
          <ListItemText primary="Services" />
        </ListItem>
        {serviceLinks.map((s) => (
          <ListItem key={s.path} component={Link} to={s.path} sx={{ pl: 4 }}>
            <ListItemText primary={s.name} />
          </ListItem>
        ))}
      </List>
      <Button component={Link} to="/request-quote" variant="contained" sx={{ m: 2 }}>
        Get Quote
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo - left */}
            <Link to="/">
              <img
                src="/nexalura.png"
                alt="Nexalura"
                style={{ height: 40, display: 'block' }}
              />
            </Link>

            {/* Desktop Navigation - right */}
            {!isMobile ? (
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.path}
                    component={Link}
                    to={link.path}
                    color="inherit"
                  >
                    {link.name}
                  </Button>
                ))}
                <Button onClick={handleMenuOpen} color="inherit">
                  Services
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {serviceLinks.map((s) => (
                    <MenuItem
                      key={s.path}
                      component={Link}
                      to={s.path}
                      onClick={handleMenuClose}
                    >
                      {s.name}
                    </MenuItem>
                  ))}
                </Menu>
                <Button
                  component={Link}
                  to="/request-quote"
                  variant="contained"
                >
                  Get Quote
                </Button>
              </Box>
            ) : (
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;