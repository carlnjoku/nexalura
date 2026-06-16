import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stepper,
  Step,
  StepLabel,
  Paper,
} from '@mui/material';
import {
  Apple,
  Android,
  CloudUpload,
  Verified,
  Security,
  Speed,
  CheckCircle,
  Description,
  Payment,
  Devices,
  Storefront,
} from '@mui/icons-material';

const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

const AppStorePublishing = () => {
  const theme = useTheme();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#process') {
      const element = document.getElementById('process');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const services = [
    {
      icon: <Apple fontSize="large" />,
      title: 'Apple App Store Submission',
      desc: 'Complete management of iOS app submission – from provisioning profiles to App Store review.',
    },
    {
      icon: <Android fontSize="large" />,
      title: 'Google Play Store Submission',
      desc: 'Handling of APK/AAB, store listing, content rating, and release tracks.',
    },
    {
      icon: <Verified fontSize="large" />,
      title: 'Compliance & Guidelines',
      desc: 'Ensure your app meets App Store Review Guidelines and Google Play policies.',
    },
    {
      icon: <Description fontSize="large" />,
      title: 'Store Assets Creation',
      desc: 'App icons, screenshots, promotional graphics, and localized descriptions.',
    },
  ];

  const steps = [
    'Pre‑submission audit',
    'Certificate & profile setup',
    'Store listing optimization',
    'Build upload & testing',
    'Submit for review',
    'Post‑launch monitoring',
  ];

  const requirements = [
    'Developer account ($99/year Apple, $25 one‑time Google)',
    'App binary (IPA / AAB)',
    'App icon (1024x1024)',
    'Screenshots (iPhone & iPad sizes)',
    'Privacy policy URL',
    'App description & keywords',
    'Category & content rating',
  ];

  const benefits = [
    { title: 'Faster approval', desc: 'We know the common pitfalls and avoid them.' },
    { title: 'No rejection stress', desc: 'We handle guideline compliance so you don’t have to.' },
    { title: 'ASO basics', desc: 'Optimize title, description, and keywords for discoverability.' },
    { title: 'End‑to‑end support', desc: 'From account creation to first download.' },
  ];

  const pricing = [
    { name: 'Single Store', price: '$1,500', features: 'Submission to Apple OR Google Play' },
    { name: 'Both Stores', price: '$2,500', features: 'Submission to both Apple App Store and Google Play' },
    { name: 'Premium', price: '$4,000+', features: 'Includes store assets creation, ASO, and post‑launch support' },
  ];

  return (
    <Box>
      {/* Hero Section – Circular Image */}
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
            <Grid item xs={12} md={6}>
              <Chip
                label="App Store Publishing"
                icon={<Storefront />}
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
                Get Your App on the Stores
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                We handle the entire submission process for Apple App Store and Google Play – so you can focus on building your app.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/request-quote"
                  variant="contained"
                  size="large"
                  sx={{ bgcolor: 'white', color: 'primary.main', px: 4 }}
                >
                  Start Publishing
                </Button>
                <Button
                  component={Link}
                  to="#process"
                  variant="outlined"
                  size="large"
                  sx={{ color: 'white', borderColor: 'white' }}
                >
                  How It Works
                </Button>
              </Box>
            </Grid>

            {/* Right side – circular image */}
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
                  src="https://placehold.co/600x500/4F46E5/white?text=App+Store+Publishing"
                  alt="App store publishing illustration"
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

      {/* Services */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          What We Handle
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Full‑service submission management from start to finish
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card
                sx={{
                  p: 3,
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
                    width: 56,
                    height: 56,
                    mb: 2,
                  }}
                >
                  {service.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {service.title}
                </Typography>
                <Typography color="text.secondary">{service.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Process Stepper */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }} id="process">
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Our Publishing Process
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            A clear, step‑by‑step approach to store submission
          </Typography>
          <Paper sx={{ p: 4, boxShadow: softShadow, borderRadius: 4 }}>
            <Stepper activeStep={-1} orientation="vertical">
              {steps.map((label, idx) => (
                <Step key={idx}>
                  <StepLabel StepIconProps={{ sx: { color: 'primary.main' } }}>
                    <Typography variant="body1" fontWeight={500}>
                      {label}
                    </Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Paper>
        </Container>
      </Box>

      {/* Requirements & Benefits */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              What You Need
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We’ll guide you through every requirement. Here’s a checklist to get started.
            </Typography>
            <List>
              {requirements.map((req, idx) => (
                <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircle color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={req} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Why Use Our Service?
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Save time, avoid rejections, and get your app in front of users faster.
            </Typography>
            <Grid container spacing={2}>
              {benefits.map((benefit, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <Card sx={{ p: 2, boxShadow: softShadow }}>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {benefit.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Pricing */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Simple, Transparent Pricing
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            No hidden fees – pay only for the stores you need.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {pricing.map((plan, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    boxShadow: softShadow,
                    transition: '0.3s',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: softShadowHover },
                  }}
                >
                  <Typography variant="h5" gutterBottom fontWeight={700}>
                    {plan.name}
                  </Typography>
                  <Typography variant="h3" color="primary.main" sx={{ fontWeight: 800, my: 2 }}>
                    {plan.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {plan.features}
                  </Typography>
                  <Button
                    component={Link}
                    to="/request-quote"
                    variant="outlined"
                    color="primary"
                    fullWidth
                  >
                    Choose Plan
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ */}
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          Common Questions
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 4 }}>
          <Card sx={{ p: 3, boxShadow: softShadow }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Do I need my own developer accounts?
            </Typography>
            <Typography color="text.secondary">
              Yes, you need an Apple Developer account ($99/year) and/or a Google Play Console account ($25 one‑time). We can help you set them up.
            </Typography>
          </Card>
          <Card sx={{ p: 3, boxShadow: softShadow }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              How long does the review process take?
            </Typography>
            <Typography color="text.secondary">
              Apple typically takes 24–48 hours, Google Play 2–3 hours. However, rejections can add delays – our pre‑submission audit minimizes that risk.
            </Typography>
          </Card>
          <Card sx={{ p: 3, boxShadow: softShadow }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              What if my app gets rejected?
            </Typography>
            <Typography color="text.secondary">
              We handle the communication with the store, fix any issues, and resubmit – included in our service.
            </Typography>
          </Card>
        </Box>
      </Container>

      {/* Call to Action */}
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
            Ready to Publish Your App?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Let’s get your app live on the App Store and Google Play.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ bgcolor: 'white', color: 'secondary.main', px: 5, py: 1.5 }}
          >
            Contact Our Publishing Team
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default AppStorePublishing;