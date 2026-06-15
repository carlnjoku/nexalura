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
  useTheme,
  alpha,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@mui/material';
import {
  RocketLaunch,
  Speed,
  AttachMoney,
  Timeline,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  Security,
  Devices,
  Analytics,
  Build,
} from '@mui/icons-material';

// Soft shadows
const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

const StartupMVP = () => {
  const theme = useTheme();

  const benefits = [
    {
      icon: <Speed fontSize="large" />,
      title: 'Faster Time to Market',
      desc: 'Launch your core product in weeks, not months, and start gathering user feedback immediately.',
    },
    {
      icon: <AttachMoney fontSize="large" />,
      title: 'Cost Efficient',
      desc: 'Focus budget only on essential features – validate your idea without overspending.',
    },
    {
      icon: <Timeline fontSize="large" />,
      title: 'Iterate Quickly',
      desc: 'Build, measure, learn – adapt your product based on real user data.',
    },
    {
      icon: <TrendingUp fontSize="large" />,
      title: 'Investor Ready',
      desc: 'A working MVP proves traction and makes fundraising easier.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Idea Validation',
      desc: 'We analyze your concept, target audience, and key differentiators.',
    },
    {
      step: '02',
      title: 'Feature Prioritization',
      desc: 'Identify must‑have vs. nice‑to‑have features for the first release.',
    },
    {
      step: '03',
      title: 'Sprint Development',
      desc: 'Agile development with weekly demos – you see progress constantly.',
    },
    {
      step: '04',
      title: 'Launch & Learn',
      desc: 'Deploy to real users, collect metrics, and plan next iterations.',
    },
  ];

  const pricingPlans = [
    {
      name: 'MVP Lite',
      price: '$15K – $25K',
      duration: '4–6 weeks',
      features: [
        'Landing page or simple web app',
        'Up to 3 core features',
        'Basic admin panel',
        'Responsive design',
        '1 round of revisions',
      ],
      recommended: false,
    },
    {
      name: 'MVP Standard',
      price: '$30K – $50K',
      duration: '8–12 weeks',
      features: [
        'Full web or mobile app (iOS/Android)',
        'Up to 8 core features',
        'User authentication & profiles',
        'Database & API integration',
        'Analytics dashboard',
        '2 rounds of revisions',
        'Deployment to app stores',
      ],
      recommended: true,
    },
    {
      name: 'MVP Advanced',
      price: '$55K – $80K',
      duration: '12–16 weeks',
      features: [
        'Cross‑platform (web + mobile)',
        'Up to 15 features',
        'AI or automation components',
        'Third‑party integrations (payments, maps, etc.)',
        'Full testing & security audit',
        'Ongoing support for 1 month',
        'Marketing landing page included',
      ],
      recommended: false,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Chip
                label="For Startups & Founders"
                icon={<RocketLaunch />}
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
                Launch Your MVP Fast & Smart
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Turn your idea into a market‑ready product with our proven MVP
                development process – without breaking the bank.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/request-quote"
                  variant="contained"
                  size="large"
                  sx={{ bgcolor: 'white', color: 'primary.main', px: 4 }}
                >
                  Get MVP Quote
                </Button>
                <Button
                  component={Link}
                  to="/process"
                  variant="outlined"
                  size="large"
                  sx={{ color: 'white', borderColor: 'white' }}
                >
                  How It Works
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                component="img"
                src="https://placehold.co/500x400/4F46E5/white?text=Startup+MVP"
                alt="MVP illustration"
                sx={{
                  width: '100%',
                  maxWidth: 450,
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

      {/* Why MVP */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Why Build an MVP?
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}
        >
          Validate your idea, attract investors, and save resources – all with a
          minimal viable product.
        </Typography>
        <Grid container spacing={4}>
          {benefits.map((benefit, idx) => (
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
                  {benefit.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {benefit.title}
                </Typography>
                <Typography color="text.secondary">{benefit.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Our MVP Process */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Our MVP Process
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            A lean, iterative approach built for startups
          </Typography>
          <Grid container spacing={4}>
            {process.map((step, idx) => (
              <Grid item xs={12} md={3} key={idx}>
                <Card sx={{ p: 3, height: '100%', boxShadow: softShadow }}>
                  <Typography
                    variant="h2"
                    sx={{ color: 'primary.main', fontWeight: 800, mb: 2 }}
                  >
                    {step.step}
                  </Typography>
                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    {step.title}
                  </Typography>
                  <Typography color="text.secondary">{step.desc}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing Plans */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Transparent Pricing
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Flexible packages tailored to your startup stage
        </Typography>
        <Grid container spacing={4}>
          {pricingPlans.map((plan, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card
                sx={{
                  height: '100%',
                  position: 'relative',
                  boxShadow: softShadow,
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: softShadowHover },
                  border: plan.recommended ? `2px solid ${theme.palette.primary.main}` : 'none',
                }}
              >
                {plan.recommended && (
                  <Chip
                    label="Most Popular"
                    color="primary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  />
                )}
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom fontWeight={700}>
                    {plan.name}
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 800, my: 2 }}>
                    {plan.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    ⏱️ {plan.duration}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <List dense>
                    {plan.features.map((feature, i) => (
                      <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} primaryTypographyProps={{ variant: 'body2' }} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    component={Link}
                    to="/request-quote"
                    variant={plan.recommended ? 'contained' : 'outlined'}
                    fullWidth
                    sx={{ mt: 3 }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FAQ for Startups */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Common Questions
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Everything you need to know about MVP development
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                q: 'What is included in the MVP price?',
                a: 'Our MVP packages include design, development, testing, and deployment. Ongoing support and additional features can be added as separate milestones.',
              },
              {
                q: 'How do you ensure the MVP is investor‑ready?',
                a: 'We build with scalability in mind, include analytics dashboards, and provide a polished UI that impresses stakeholders.',
              },
              {
                q: 'Can I add more features later?',
                a: 'Absolutely. We work in sprints – after launch, we prioritize features based on user feedback and budget.',
              },
              {
                q: 'Do you offer post‑launch maintenance?',
                a: 'Yes, we have monthly support plans starting at $500/month for bug fixes, updates, and scaling.',
              },
            ].map((faq, idx) => (
              <Grid item xs={12} key={idx}>
                <Card sx={{ p: 3, boxShadow: softShadow }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {faq.q}
                  </Typography>
                  <Typography color="text.secondary">{faq.a}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA */}
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
            Ready to turn your idea into reality?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Let’s build your MVP in weeks, not months.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ bgcolor: 'white', color: 'secondary.main', px: 5, py: 1.5 }}
          >
            Schedule a Free Consultation
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default StartupMVP;