import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
  alpha,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@mui/material';
import {
  Apple,
  Android,
  MobileFriendly,
  IntegrationInstructions,
  Storage,
  Security,
  Speed,
  CheckCircle,
} from '@mui/icons-material';

const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

const MobileDevelopment = () => {
  const theme = useTheme();

  const offerings = [
    {
      icon: <Apple fontSize="large" />,
      title: 'iOS Apps',
      desc: 'Native iOS applications using Swift and SwiftUI for Apple devices.',
    },
    {
      icon: <Android fontSize="large" />,
      title: 'Android Apps',
      desc: 'Kotlin and Jetpack Compose for modern Android experiences.',
    },
    {
      icon: <MobileFriendly fontSize="large" />,
      title: 'Cross-Platform',
      desc: 'React Native, Expo, and Flutter – one codebase, both stores.',
    },
    {
      icon: <IntegrationInstructions fontSize="large" />,
      title: 'API Integration',
      desc: 'Seamless backend connectivity, payment gateways, and third‑party services.',
    },
  ];

  const technologies = [
    { name: 'React Native', level: 'Advanced' },
    { name: 'Expo', level: 'Advanced' },
    { name: 'Flutter', level: 'Intermediate' },
    { name: 'Swift', level: 'Advanced' },
    { name: 'Kotlin', level: 'Advanced' },
    { name: 'Firebase', level: 'Advanced' },
    { name: 'GraphQL', level: 'Intermediate' },
    { name: 'Push Notifications', level: 'Advanced' },
  ];

  const features = [
    'User authentication & profiles',
    'Real‑time sync & offline support',
    'In‑app purchases & subscriptions',
    'Push notifications & reminders',
    'GPS & location services',
    'Camera & file uploads',
    'Analytics & crash reporting',
    'App store optimization (ASO)',
  ];

  return (
    <Box>
      {/* Hero Section with Circular Image */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 10 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left side - text */}
            <Grid item xs={12} md={6}>
              <Chip
                label="Mobile App Development"
                icon={<MobileFriendly />}
                sx={{
                  mb: 2,
                  bgcolor: alpha(theme.palette.common.white, 0.15),
                  color: 'white',
                  '& .MuiChip-icon': { color: 'white' },
                }}
              />
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' } }}
              >
                Native & Cross‑Platform Apps
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                We build high‑performance iOS, Android, and cross‑platform apps
                that users love. From startup MVPs to enterprise mobile solutions.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/request-quote"
                  variant="contained"
                  size="large"
                  sx={{ bgcolor: 'white', color: 'primary.main', px: 4 }}
                >
                  Start Your App
                </Button>
                <Button
                  component={Link}
                  to="/portfolio"
                  variant="outlined"
                  size="large"
                  sx={{ color: 'white', borderColor: 'white' }}
                >
                  View App Portfolio
                </Button>
              </Box>
            </Grid>

            {/* Right side - circular hero image */}
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 450,
                  aspectRatio: '1/1',
                  margin: 'auto',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 20px 35px -10px rgba(0,0,0,0.3)',
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                    '100%': { transform: 'translateY(0px)' },
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://placehold.co/600x500/4F46E5/white?text=Mobile+App+Development"
                  alt="Mobile development illustration"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* What We Build (unchanged) */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          What We Build
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Tailored mobile solutions for every platform
        </Typography>
        <Grid container spacing={4}>
          {offerings.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  boxShadow: softShadow,
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: softShadowHover },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: 'primary.main',
                    width: 64,
                    height: 64,
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Technologies (unchanged) */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Technologies We Use
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Modern stack for performant, scalable mobile apps
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
            {technologies.map((tech) => (
              <Chip
                key={tech.name}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <span>{tech.name}</span>
                    <Box
                      component="span"
                      sx={{
                        ml: 1,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: tech.level === 'Advanced' ? theme.palette.success.main : theme.palette.warning.main,
                        bgcolor: alpha(tech.level === 'Advanced' ? theme.palette.success.main : theme.palette.warning.main, 0.1),
                        px: 1,
                        py: 0.3,
                        borderRadius: 2,
                      }}
                    >
                      {tech.level}
                    </Box>
                  </Box>
                }
                variant="outlined"
                sx={{
                  borderColor: alpha(theme.palette.primary.main, 0.3),
                  py: 2.5,
                  px: 1.5,
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  bgcolor: 'white',
                  boxShadow: softShadow,
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Key Features (unchanged) */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://placehold.co/500x400/8B5CF6/white?text=App+Features"
              alt="App features"
              sx={{
                width: '100%',
                borderRadius: 4,
                boxShadow: softShadow,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Everything You Need
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Our mobile apps come with enterprise‑grade features out of the box.
            </Typography>
            <Grid container spacing={2}>
              {features.map((feature, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle color="primary" fontSize="small" />
                    <Typography variant="body2">{feature}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Button
              component={Link}
              to="/request-quote"
              variant="contained"
              size="large"
              sx={{ mt: 4 }}
            >
              Discuss Your App Idea
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action (unchanged) */}
      <Box
        sx={{
          bgcolor: 'secondary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom fontWeight={700}>
            Ready to launch your mobile app?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Let’s turn your app idea into a top‑rated product on the App Store & Google Play.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ bgcolor: 'white', color: 'secondary.main', px: 5, py: 1.5 }}
          >
            Get a Free Consultation
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default MobileDevelopment;
