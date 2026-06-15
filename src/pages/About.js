import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Verified,
  Lightbulb,
  People,
  WorkspacePremium,
  Security,
  Schedule,
} from '@mui/icons-material';

const About = () => {
  const team = [
    { name: 'John Smith', role: 'CEO & Founder' },
    { name: 'Jane Doe', role: 'CTO' },
    { name: 'Mike Johnson', role: 'Lead Developer' },
    { name: 'Sarah Williams', role: 'UX Director' },
  ];

  const values = [
    {
      icon: <Verified fontSize="large" color="primary" />,
      title: 'Mission',
      desc: 'To empower businesses with innovative digital solutions that drive growth and efficiency.',
    },
    {
      icon: <Lightbulb fontSize="large" color="primary" />,
      title: 'Vision',
      desc: 'To be the leading digital agency known for excellence, innovation, and client success.',
    },
    {
      icon: <People fontSize="large" color="primary" />,
      title: 'Client-Centric',
      desc: 'We put our clients at the heart of everything we do, ensuring their success is our success.',
    },
    {
      icon: <WorkspacePremium fontSize="large" color="primary" />,
      title: 'Excellence',
      desc: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.',
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Team Members' },
    { number: '5+', label: 'Years Experience' },
  ];

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h2">About Nexalura</Typography>
          <Typography variant="h6">
            We're a team of passionate technologists dedicated to building exceptional digital experiences.
          </Typography>
        </Container>
      </Box>

      {/* Story */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>Our Story</Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Founded in 2019, Nexalura began with a simple mission: to help businesses leverage technology for growth.
          What started as a two-person team has grown into a full-service digital agency serving clients worldwide.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Today, we're proud to have delivered over 150 successful projects across various industries, from startups
          to enterprise organizations. Our commitment to quality, innovation, and client success remains stronger than ever.
        </Typography>
      </Container>

      {/* Mission & Vision */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>Our Mission & Vision</Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {values.map((v, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Card sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ mb: 2 }}>{v.icon}</Box>
                  <Typography variant="h5">{v.title}</Typography>
                  <Typography color="text.secondary">{v.desc}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((s, i) => (
            <Grid item xs={6} md={3} key={i} sx={{ textAlign: 'center' }}>
              <Typography variant="h2" color="primary.main">{s.number}</Typography>
              <Typography color="text.secondary">{s.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>Why Choose Us</Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4} textAlign="center">
              <Security sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5">Quality Assurance</Typography>
              <Typography color="text.secondary">
                Rigorous testing and quality control processes ensure bug‑free delivery.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <Schedule sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5">On‑Time Delivery</Typography>
              <Typography color="text.secondary">
                We respect deadlines and communicate transparently throughout the project.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <People sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5">Dedicated Support</Typography>
              <Typography color="text.secondary">
                Ongoing maintenance and support to keep your applications running smoothly.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>Meet Our Team</Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {team.map((m, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card sx={{ textAlign: 'center', p: 3 }}>
                <Avatar sx={{ width: 120, height: 120, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
                  {m.name.charAt(0)}
                </Avatar>
                <Typography variant="h6">{m.name}</Typography>
                <Typography variant="body2" color="primary.main">{m.role}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Passionate about creating impactful digital solutions.
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Certifications */}
      <Box sx={{ bgcolor: 'background.paper', py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" gutterBottom>Certifications & Partnerships</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, mt: 4 }}>
            <Chip label="AWS Certified Partner" variant="outlined" sx={{ p: 2, fontSize: '1rem' }} />
            <Chip label="Google Cloud Partner" variant="outlined" sx={{ p: 2, fontSize: '1rem' }} />
            <Chip label="Microsoft Gold Partner" variant="outlined" sx={{ p: 2, fontSize: '1rem' }} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;