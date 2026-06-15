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
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Api,
  Storage,
  Security,
  Speed,
  IntegrationInstructions,
  Payment,
  CloudSync,
  CheckCircle,
  AccountBalance,
  ShoppingCart,
  MeetingRoom,
} from '@mui/icons-material';

const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

const ApiIntegrations = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <Api fontSize="large" />,
      title: 'REST & GraphQL APIs',
      desc: 'Well‑documented, scalable APIs for your web or mobile apps.',
    },
    {
      icon: <IntegrationInstructions fontSize="large" />,
      title: 'Third‑Party Integrations',
      desc: 'Connect to Stripe, Twilio, SendGrid, Salesforce, and hundreds more.',
    },
    {
      icon: <Payment fontSize="large" />,
      title: 'Payment Gateways',
      desc: 'Stripe, PayPal, Square, and custom checkout solutions.',
    },
    {
      icon: <AccountBalance fontSize="large" />,
      title: 'Banking & Finance APIs',
      desc: 'Plaid, Yodlee, and other financial data aggregators.',
    },
    {
      icon: <ShoppingCart fontSize="large" />,
      title: 'E‑commerce Integrations',
      desc: 'Shopify, WooCommerce, Magento API connections.',
    },
    {
      icon: <MeetingRoom fontSize="large" />,
      title: 'CRM & Marketing',
      desc: 'HubSpot, Salesforce, Mailchimp, and Zapier workflows.',
    },
  ];

  const benefits = [
    { title: 'Seamless Data Flow', desc: 'Real‑time sync between your systems and third‑party tools.' },
    { title: 'Enterprise Security', desc: 'OAuth, JWT, API keys, and encryption at rest and in transit.' },
    { title: 'Scalable Architecture', desc: 'Handle thousands of requests per second with auto‑scaling.' },
    { title: 'Detailed Documentation', desc: 'Swagger/OpenAPI specs, Postman collections, and developer guides.' },
  ];

  const technologies = [
    'Node.js / Express',
    'FastAPI (Python)',
    'GraphQL (Apollo)',
    'RESTful APIs',
    'PostgreSQL / MongoDB',
    'Redis Cache',
    'Docker / Kubernetes',
    'AWS API Gateway',
  ];

  const integrations = [
    'Stripe / PayPal',
    'Twilio (SMS, Voice)',
    'SendGrid / AWS SES',
    'Salesforce / HubSpot',
    'Google Maps / Places',
    'Slack / Microsoft Teams',
    'Zapier / Make',
    'Plaid (Banking)',
  ];

  return (
    <Box>
      {/* Hero Section */}
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
                label="API Development & Integrations"
                icon={<Api />}
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
                Connect Everything with Powerful APIs
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Custom APIs, third‑party integrations, and data pipelines that
                unify your software ecosystem – securely and at scale.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/request-quote"
                  variant="contained"
                  size="large"
                  sx={{ bgcolor: 'white', color: 'primary.main', px: 4 }}
                >
                  Discuss Your Integration
                </Button>
                <Button
                  component={Link}
                  to="/technologies"
                  variant="outlined"
                  size="large"
                  sx={{ color: 'white', borderColor: 'white' }}
                >
                  Our Tech Stack
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://placehold.co/600x500/4F46E5/white?text=API+Integrations"
                alt="API integrations illustration"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  mx: 'auto',
                  display: 'block',
                  borderRadius: 4,
                  boxShadow: '0 20px 35px -10px rgba(0,0,0,0.3)',
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                    '100%': { transform: 'translateY(0px)' },
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services / What We Build */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          What We Build
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Tailored API solutions for every business need
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

      {/* Benefits */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Why Integrate with Us?
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Reliable, secure, and future‑proof API solutions
          </Typography>
          <Grid container spacing={4}>
            {benefits.map((benefit, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card sx={{ p: 3, textAlign: 'center', height: '100%', boxShadow: softShadow }}>
                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    {benefit.title}
                  </Typography>
                  <Typography color="text.secondary">{benefit.desc}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Technologies */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          Technologies We Use
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Modern backend stack for high‑performance APIs
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
          {technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
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

      {/* Pre‑built Integrations */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Ready‑to‑Use Integrations
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                We have pre‑built connectors for dozens of popular services.
                Saves time, reduces risk, and gets you to market faster.
              </Typography>
              <List>
                {integrations.map((integration, idx) => (
                  <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircle color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={integration} />
                  </ListItem>
                ))}
              </List>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                sx={{ mt: 2 }}
              >
                Ask About a Specific Integration
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://placehold.co/500x400/8B5CF6/white?text=Integration+Ecosystem"
                alt="Integration ecosystem"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  boxShadow: softShadow,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

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
            Ready to connect your systems?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Let’s build robust APIs and seamless integrations for your business.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ bgcolor: 'white', color: 'secondary.main', px: 5, py: 1.5 }}
          >
            Get a Free API Consultation
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default ApiIntegrations;