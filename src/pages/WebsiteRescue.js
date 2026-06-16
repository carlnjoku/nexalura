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
  useTheme,
  alpha,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
} from '@mui/material';
import {
  Build,
  Speed,
  Security,
  Refresh,
  CheckCircle,
  Warning,
  Timeline,
  Devices,
  CloudDone,
  SupportAgent,
} from '@mui/icons-material';
import RescueProcess from '../components/RescueProcess';

const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

const WebsiteRescue = () => {
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

  const painPoints = [
    {
      icon: <Warning color="error" />,
      title: 'Broken or buggy website',
      desc: 'Features that don’t work, broken links, or constant errors.',
    },
    {
      icon: <Speed color="warning" />,
      title: 'Slow performance',
      desc: 'Poor load times hurting user experience and SEO.',
    },
    {
      icon: <Security color="error" />,
      title: 'Security vulnerabilities',
      desc: 'Outdated plugins, no SSL, or potential hacks.',
    },
    {
      icon: <Refresh color="warning" />,
      title: 'Abandoned project',
      desc: 'Your previous developer vanished – project left incomplete.',
    },
  ];

  const services = [
    {
      icon: <Build fontSize="large" />,
      title: 'Code Audit & Fix',
      desc: 'We analyze your codebase, fix bugs, and improve structure.',
    },
    {
      icon: <Speed fontSize="large" />,
      title: 'Performance Optimization',
      desc: 'Speed up load times, optimize images, and implement caching.',
    },
    {
      icon: <Security fontSize="large" />,
      title: 'Security Hardening',
      desc: 'Patch vulnerabilities, add SSL, firewall, and malware scans.',
    },
    {
      icon: <Devices fontSize="large" />,
      title: 'Mobile & Cross‑browser Fixes',
      desc: 'Ensure perfect display on all devices and browsers.',
    },
    {
      icon: <CloudDone fontSize="large" />,
      title: 'Migration & Hosting',
      desc: 'Move to faster, more reliable hosting with zero downtime.',
    },
    {
      icon: <SupportAgent fontSize="large" />,
      title: 'Ongoing Maintenance',
      desc: 'Monthly support plans for backups, updates, and monitoring.',
    },
  ];

  const process = [
    { step: '01', title: 'Discovery', desc: 'We review your current site, identify issues, and define goals.' },
    { step: '02', title: 'Quote & Plan', desc: 'Transparent pricing and timeline for the rescue work.' },
    { step: '03', title: 'Execution', desc: 'We fix, optimize, and improve – with regular updates.' },
    { step: '04', title: 'Testing & Launch', desc: 'Rigorous QA before deploying the rescued site.' },
    { step: '05', title: 'Handover & Support', desc: 'Full documentation and optional maintenance plan.' },
  ];

  return (
    <Box>
      {/* Hero Section – now with circular image */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 10 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Chip
                label="Site Rescue & Takeover"
                icon={<Build />}
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
                sx={{ fontWeight: 800 }}
              >
                Stuck with a Broken or Unfinished Project?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                We rescue abandoned websites, fix bugs, optimize performance,
                and take over existing projects – so you can finally move forward.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/request-quote"
                  variant="contained"
                  size="large"
                  sx={{ bgcolor: 'white', color: 'primary.main', px: 4 }}
                >
                  Get Rescue Quote
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

            {/* Right side – circular hero image */}
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
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
                  src="https://placehold.co/500x400/4F46E5/white?text=Website+Rescue"
                  alt="Rescue illustration"
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

      {/* Pain Points / Signs You Need Rescue – unchanged */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          Does This Sound Familiar?
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          If any of these apply, your website needs a rescue.
        </Typography>
        <Grid container spacing={4}>
          {painPoints.map((point, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
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
                <Avatar
                  sx={{
                    bgcolor: alpha(theme.palette.error.main, 0.1),
                    color: point.icon.props.color,
                    width: 56,
                    height: 56,
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  {point.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {point.title}
                </Typography>
                <Typography color="text.secondary">{point.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* What We Do – unchanged */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Our Rescue Services
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Comprehensive fixes to bring your website back to life
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    boxShadow: softShadow,
                    transition: '0.3s',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: softShadowHover },
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
      </Box>

      {/* Process Section – unchanged */}
      <Container maxWidth="lg" id="process" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          How We Rescue Your Project
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          A transparent, step‑by‑step approach
        </Typography>
        <Grid container spacing={4}>
          {process.map((step, idx) => (
            <Grid item xs={12} sm={6} md={2.4} key={idx}>
              <Card sx={{ p: 3, textAlign: 'center', height: '100%', boxShadow: softShadow }}>
                <Typography variant="h2" sx={{ color: 'primary.main', fontWeight: 800, mb: 2 }}>
                  {step.step}
                </Typography>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us for Rescue – unchanged */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Why Trust Us With Your Rescue?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <List>
                {[
                  'Experience with legacy codebases (PHP, WordPress, React, etc.)',
                  'No project is too messy – we’ve seen it all',
                  'Transparent communication & regular updates',
                  'We work with any tech stack, old or new',
                ].map((text, i) => (
                  <ListItem key={i}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <List>
                {[
                  'Fast turnaround – most rescues take 2–4 weeks',
                  'We document everything so you’re not stuck again',
                  'Optional post‑rescue maintenance plans',
                  'Satisfaction guaranteed or money back',
                ].map((text, i) => (
                  <ListItem key={i}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action – unchanged */}
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
            Stop struggling with your broken website.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Let’s diagnose the issues and get you a free, no‑obligation rescue plan.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ bgcolor: 'white', color: 'secondary.main', px: 5, py: 1.5 }}
          >
            Schedule a Free Website Audit
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default WebsiteRescue;