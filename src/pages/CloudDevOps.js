import React, {useEffect} from 'react';
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
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Cloud,
  Security,
  Speed,
  Storage,
  AutoAwesome,
  CheckCircle,
  Build,
  Timeline,
  Backup,
  GitHub,
} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

const CloudDevOps = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <Cloud fontSize="large" />,
      title: 'Cloud Hosting & Migration',
      desc: 'AWS, DigitalOcean, Google Cloud – we help you migrate, scale, and optimize.',
    },
    {
      icon: <Build fontSize="large" />,
      title: 'Containerization (Docker)',
      desc: 'Package your apps into portable containers for consistency across environments.',
    },
    {
      icon: <Timeline fontSize="large" />,
      title: 'CI/CD Pipelines',
      desc: 'Automated testing and deployment with GitHub Actions, GitLab CI, or Jenkins.',
    },
    {
      icon: <Security fontSize="large" />,
      title: 'Monitoring & Alerting',
      desc: 'Real‑time metrics, logs, and alerts to keep your systems healthy.',
    },
  ];

  const technologies = [
    { name: 'AWS (EC2, S3, RDS, Lambda)', level: 'Advanced' },
    { name: 'DigitalOcean', level: 'Advanced' },
    { name: 'Google Cloud Platform', level: 'Intermediate' },
    { name: 'Docker', level: 'Advanced' },
    { name: 'Kubernetes', level: 'Intermediate' },
    { name: 'GitHub Actions', level: 'Advanced' },
    { name: 'Nginx', level: 'Advanced' },
    { name: 'Prometheus + Grafana', level: 'Advanced' },
  ];

  const benefits = [
    { title: 'Scalability', desc: 'Auto‑scale resources to handle traffic spikes.' },
    { title: 'High Availability', desc: 'Multi‑zone deployments with zero downtime.' },
    { title: 'Cost Optimization', desc: 'Right‑sized resources and spot instances.' },
    { title: 'Security & Compliance', desc: 'VPC, IAM, encryption, and backups.' },
  ];

  const whyChoose = [
    '99.9% uptime SLA',
    '24/7 infrastructure monitoring',
    'Automated backups & disaster recovery',
    'Infrastructure as Code (Terraform, CloudFormation)',
    'Performance tuning & load testing',
    'Security hardening & vulnerability scanning',
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#tech') {
      const element = document.getElementById('tech');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

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
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                label="Cloud & DevOps"
                icon={<Cloud />}
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
                Scalable, Secure Cloud Infrastructure
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                We design, deploy, and manage cloud environments with CI/CD pipelines,
                container orchestration, and 24/7 monitoring – so you can focus on your code.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/request-quote"
                  variant="contained"
                  size="large"
                  sx={{ bgcolor: 'white', color: 'primary.main', px: 4 }}
                >
                  Optimize Your Cloud
                </Button>
                <Button
                  component={Link}
                  to="#tech"
                  variant="outlined"
                  size="large"
                  sx={{ color: 'white', borderColor: 'white' }}
                >
                  Our Tech Stack
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
                  src="https://placehold.co/600x500/4F46E5/white?text=Cloud+%26+DevOps"
                  alt="Cloud DevOps illustration"
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

      {/* Services (unchanged) */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          What We Deliver
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          End‑to‑end cloud and DevOps solutions
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

      {/* Technologies (unchanged) */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }} id="tech">
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Our Cloud & DevOps Stack
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Modern, battle‑tested tools for reliable infrastructure
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
                  py: 2.5,
                  px: 1.5,
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  borderColor: alpha(theme.palette.primary.main, 0.3),
                  bgcolor: 'white',
                  boxShadow: softShadow,
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Benefits & Why Choose (unchanged) */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Key Benefits
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Modern infrastructure that grows with your business.
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
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Why Choose Us?
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We don’t just set up servers – we build resilient, automated systems.
            </Typography>
            <List>
              {whyChoose.map((item, idx) => (
                <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircle color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>

      {/* CI/CD Pipeline Visual (unchanged) */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="lg" textAlign="center">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Automated CI/CD Pipeline
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            From commit to production – fully automated
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 3,
              maxWidth: 900,
              mx: 'auto',
            }}
          >
            {['Code Commit', 'Build', 'Test', 'Deploy to Staging', 'Auto Approval', 'Deploy to Production'].map((step, idx) => (
              <Chip
                key={step}
                label={step}
                icon={idx < 5 ? <AutoAwesome /> : <Cloud />}
                sx={{
                  py: 2.5,
                  px: 2,
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
            Ready to modernize your infrastructure?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Let’s build a scalable, secure cloud environment for your apps.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ bgcolor: 'white', color: 'secondary.main', px: 5, py: 1.5 }}
          >
            Start a DevOps Consultation
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default CloudDevOps;