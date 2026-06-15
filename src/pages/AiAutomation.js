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
  AutoAwesome,
  Chat,
  Analytics,
  Build,
  CheckCircle,
  Speed,
  Security,
  Storage,
} from '@mui/icons-material';

const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

const AiAutomation = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <Chat fontSize="large" />,
      title: 'Chatbots & Virtual Assistants',
      desc: 'AI‑powered customer support, lead generation, and internal assistants using OpenAI, Dialogflow, or custom LLMs.',
    },
    {
      icon: <Build fontSize="large" />,
      title: 'Process Automation',
      desc: 'Automate repetitive tasks: data entry, document processing, email workflows, and report generation.',
    },
    {
      icon: <Analytics fontSize="large" />,
      title: 'Data Extraction & Analysis',
      desc: 'Scrape websites, parse documents (PDF, invoices), and extract insights using NLP and computer vision.',
    },
    {
      icon: <AutoAwesome fontSize="large" />,
      title: 'Computer Vision',
      desc: 'Object detection, facial recognition, quality inspection, and image classification for retail, manufacturing, and security.',
    },
  ];

  const benefits = [
    { title: 'Reduce operational costs', desc: 'Automate manual tasks and save hours of human effort.' },
    { title: 'Scale effortlessly', desc: 'AI systems handle thousands of requests simultaneously.' },
    { title: 'Improve accuracy', desc: 'Eliminate human error in data processing and decision making.' },
    { title: 'Faster time‑to‑insight', desc: 'Real‑time analysis of large datasets for actionable intelligence.' },
  ];

  const technologies = [
    { name: 'OpenAI (GPT‑4, Assistants API)', level: 'Advanced' },
    { name: 'LangChain / LlamaIndex', level: 'Advanced' },
    { name: 'TensorFlow / PyTorch', level: 'Advanced' },
    { name: 'Hugging Face Transformers', level: 'Intermediate' },
    { name: 'Computer Vision (OpenCV)', level: 'Advanced' },
    { name: 'RAG (Retrieval Augmented Generation)', level: 'Advanced' },
    { name: 'AWS SageMaker / Bedrock', level: 'Intermediate' },
    { name: 'Pandas / NumPy', level: 'Advanced' },
  ];

  const useCases = [
    'Customer support chatbots (24/7)',
    'Automated lead qualification & outreach',
    'Invoice & receipt data extraction',
    'Social media sentiment analysis',
    'Predictive maintenance for equipment',
    'Document summarization & Q&A',
    'E‑commerce product recommendation',
    'Fraud detection & risk scoring',
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
                label="AI & Automation"
                icon={<AutoAwesome />}
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
                Supercharge Your Business with AI
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                From intelligent chatbots to process automation and computer vision – we build custom AI solutions that save time, reduce costs, and unlock new opportunities.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/request-quote"
                  variant="contained"
                  size="large"
                  sx={{ bgcolor: 'white', color: 'primary.main', px: 4 }}
                >
                  Explore AI for Your Business
                </Button>
                <Button
                  component={Link}
                  to="/technologies"
                  variant="outlined"
                  size="large"
                  sx={{ color: 'white', borderColor: 'white' }}
                >
                  Our AI Stack
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://placehold.co/600x500/4F46E5/white?text=AI+Automation"
                alt="AI illustration"
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

      {/* Services */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          What We Build
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Tailored AI solutions for real‑world problems
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

      {/* Benefits */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Why Automate with AI?
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Unlock efficiency, accuracy, and scale
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
          Our AI Technology Stack
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Cutting‑edge tools for intelligent solutions
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

      {/* Use Cases */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Real‑World Use Cases
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                AI isn't science fiction – we apply it to solve concrete business problems every day.
              </Typography>
              <List>
                {useCases.map((useCase, idx) => (
                  <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircle color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={useCase} />
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
                Discuss Your AI Project
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://placehold.co/500x400/8B5CF6/white?text=AI+Use+Cases"
                alt="AI use cases"
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
            Ready to leverage AI for your business?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Let’s identify automation opportunities and build a custom AI solution.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ bgcolor: 'white', color: 'secondary.main', px: 5, py: 1.5 }}
          >
            Get a Free AI Consultation
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default AiAutomation;