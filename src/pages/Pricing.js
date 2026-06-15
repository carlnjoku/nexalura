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
  Divider,
} from '@mui/material';
import {
  CheckCircle,
  Close,
  Build,
  Speed,
  Security,
  SupportAgent,
} from '@mui/icons-material';

const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

const Pricing = () => {
  const theme = useTheme();

  const plans = [
    {
      name: 'Starter',
      price: '$5,000',
      period: 'one-time',
      description: 'Perfect for small businesses and startups.',
      features: [
        { name: 'Up to 5 pages', included: true },
        { name: 'Responsive design', included: true },
        { name: 'Contact form', included: true },
        { name: 'Basic SEO setup', included: true },
        { name: 'Social media integration', included: true },
        { name: '1 round of revisions', included: true },
        { name: 'CMS (Content Management)', included: false },
        { name: 'E-commerce functionality', included: false },
        { name: 'Ongoing support', included: false },
      ],
      recommended: false,
      buttonText: 'Get Started',
    },
    {
      name: 'Professional',
      price: '$15,000',
      period: 'one-time',
      description: 'Ideal for growing businesses with advanced needs.',
      features: [
        { name: 'Up to 15 pages', included: true },
        { name: 'Responsive design', included: true },
        { name: 'Advanced contact forms', included: true },
        { name: 'Advanced SEO setup', included: true },
        { name: 'Social media & analytics', included: true },
        { name: '3 rounds of revisions', included: true },
        { name: 'CMS (Content Management)', included: true },
        { name: 'E-commerce functionality', included: false },
        { name: '3 months support', included: true },
      ],
      recommended: true,
      buttonText: 'Choose Plan',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'Tailored solutions for large organizations.',
      features: [
        { name: 'Unlimited pages', included: true },
        { name: 'Custom design & development', included: true },
        { name: 'Advanced integrations (CRM, ERP)', included: true },
        { name: 'Full SEO & performance audit', included: true },
        { name: 'Custom analytics dashboard', included: true },
        { name: 'Unlimited revisions', included: true },
        { name: 'Full CMS & e-commerce', included: true },
        { name: 'SLA with 99.9% uptime', included: true },
        { name: '12 months support & maintenance', included: true },
      ],
      recommended: false,
      buttonText: 'Contact Sales',
    },
  ];

  const servicePricing = [
    { name: 'Landing Page', price: '$3,000 - $5,000' },
    { name: 'Business Website', price: '$5,000 - $10,000' },
    { name: 'E‑commerce Website', price: '$10,000 - $25,000' },
    { name: 'Web Application (SaaS)', price: '$25,000 - $75,000+' },
    { name: 'Mobile App (iOS/Android)', price: '$30,000 - $100,000+' },
    { name: 'AI Integration / Automation', price: '$15,000 - $50,000+' },
    { name: 'API Development', price: '$10,000 - $40,000' },
    { name: 'Monthly Maintenance', price: '$500 - $2,500 / month' },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 10 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 800 }}
          >
            Simple, Transparent Pricing
          </Typography>
          <Typography
            variant="h6"
            sx={{ maxWidth: 700, mx: 'auto', opacity: 0.9 }}
          >
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </Typography>
        </Container>
      </Box>

      {/* Pricing Cards */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card
                sx={{
                  height: '100%',
                  position: 'relative',
                  boxShadow: softShadow,
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: softShadowHover },
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
                  <Box sx={{ my: 2 }}>
                    <Typography variant="h3" component="span" fontWeight={800}>
                      {plan.price}
                    </Typography>
                    <Typography variant="body2" component="span" color="text.secondary">
                      {plan.period === 'one-time' ? ' / one-time' : ''}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {plan.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <List dense>
                    {plan.features.map((feature, i) => (
                      <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          {feature.included ? (
                            <CheckCircle fontSize="small" color="primary" />
                          ) : (
                            <Close fontSize="small" color="disabled" />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={feature.name}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: feature.included ? 'text.primary' : 'text.disabled',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    component={Link}
                    to={plan.name === 'Enterprise' ? '/contact' : '/request-quote'}
                    variant={plan.recommended ? 'contained' : 'outlined'}
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Service Pricing Table */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Service Ranges
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Typical investment for different project types
          </Typography>
          <Card sx={{ boxShadow: softShadow, borderRadius: 4 }}>
            {servicePricing.map((service, idx) => (
              <Box key={idx}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                    bgcolor: idx % 2 === 0 ? 'background.paper' : alpha(theme.palette.primary.light, 0.02),
                  }}
                >
                  <Typography variant="body1" fontWeight={500}>
                    {service.name}
                  </Typography>
                  <Typography variant="body1" color="primary.main" fontWeight={600}>
                    {service.price}
                  </Typography>
                </Box>
                {idx < servicePricing.length - 1 && <Divider />}
              </Box>
            ))}
          </Card>
        </Container>
      </Box>

      {/* FAQ */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          Pricing FAQs
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 4 }}>
          {[
            {
              q: 'Do you offer custom quotes?',
              a: 'Yes, every project is unique. Contact us with your requirements for a tailored quote.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept bank transfers, credit cards (Stripe), and PayPal. Payment terms are 50% upfront, 50% upon completion.',
            },
            {
              q: 'Is there a warranty?',
              a: 'Yes, all projects include 30 days of bug fixes and support after launch. Extended maintenance plans are available.',
            },
            {
              q: 'Can I upgrade my plan later?',
              a: 'Absolutely. We can scale your project as your business grows – just reach out.',
            },
          ].map((faq, idx) => (
            <Card key={idx} sx={{ p: 3, boxShadow: softShadow }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {faq.q}
              </Typography>
              <Typography color="text.secondary">{faq.a}</Typography>
            </Card>
          ))}
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
            Not sure which plan fits?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Schedule a free consultation to discuss your project needs.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ bgcolor: 'white', color: 'secondary.main', px: 5, py: 1.5 }}
          >
            Talk to an Expert
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Pricing;