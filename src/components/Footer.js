import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, IconButton, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const serviceLinks = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile Development', path: '/services/mobile-development' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'AI & Automation', path: '/services/ai-automation' },
    { name: 'API Integrations', path: '/services/api-integrations' },
    { name: 'Cloud & DevOps', path: '/services/cloud-devops' },
  ];
  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/process' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Partners', path: '/partners' },
  ];
  const resourceLinks = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Startup MVP', path: '/startup-mvp' },
    { name: 'Website Rescue', path: '/website-rescue' },
  ];
  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
  ];

  return (
    <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.light' }}>Nexalura</Typography>
            <Typography variant="body2" sx={{ color: 'grey.400', mb: 2 }}>Building innovative digital solutions for businesses worldwide.</Typography>
            <Box>
              <IconButton color="inherit" href="#" sx={{ color: 'grey.400' }}><FacebookIcon /></IconButton>
              <IconButton color="inherit" href="#" sx={{ color: 'grey.400' }}><TwitterIcon /></IconButton>
              <IconButton color="inherit" href="#" sx={{ color: 'grey.400' }}><LinkedInIcon /></IconButton>
              <IconButton color="inherit" href="#" sx={{ color: 'grey.400' }}><GitHubIcon /></IconButton>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h6" gutterBottom>Services</Typography>
            {serviceLinks.map((link) => (
              <Typography key={link.path} variant="body2" sx={{ mb: 1 }}>
                <MuiLink component={Link} to={link.path} color="inherit" underline="hover">{link.name}</MuiLink>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom>Company</Typography>
            {companyLinks.map((link) => (
              <Typography key={link.path} variant="body2" sx={{ mb: 1 }}>
                <MuiLink component={Link} to={link.path} color="inherit" underline="hover">{link.name}</MuiLink>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom>Resources</Typography>
            {resourceLinks.map((link) => (
              <Typography key={link.path} variant="body2" sx={{ mb: 1 }}>
                <MuiLink component={Link} to={link.path} color="inherit" underline="hover">{link.name}</MuiLink>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>Contact</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon fontSize="small" sx={{ mr: 1, color: 'grey.400' }} />
              <Typography variant="body2">info@nexalura.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon fontSize="small" sx={{ mr: 1, color: 'grey.400' }} />
              <Typography variant="body2">+1 (973) 381-4567</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon fontSize="small" sx={{ mr: 1, color: 'grey.400' }} />
              <Typography variant="body2">277 Tucker Corner Road, NY</Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, bgcolor: 'grey.800' }} />
        <Typography variant="body2" align="center" sx={{ color: 'grey.500' }}>&copy; 2024 Nexalura. All rights reserved.</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
          {legalLinks.map((link) => (
            <MuiLink key={link.path} component={Link} to={link.path} color="inherit" underline="hover" variant="body2">{link.name}</MuiLink>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
