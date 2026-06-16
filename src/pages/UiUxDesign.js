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
  Divider,
} from '@mui/material';
import {
  DesignServices,
  Brush,
  Timeline,
  Devices,
  Psychology,
  CheckCircle,
  Palette,
  BubbleChart,
  Instagram,
} from '@mui/icons-material';

const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

const UiUxDesign = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <Psychology fontSize="large" />,
      title: 'User Research',
      desc: 'Interviews, surveys, and data analysis to understand your users.',
    },
    {
      icon: <Brush fontSize="large" />,
      title: 'Wireframing',
      desc: 'Low‑fidelity sketches and clickable wireframes to map the flow.',
    },
    {
      icon: <Palette fontSize="large" />,
      title: 'UI Design',
      desc: 'High‑fidelity mockups, design systems, and brand integration.',
    },
    {
      icon: <Devices fontSize="large" />,
      title: 'Prototyping',
      desc: 'Interactive prototypes for user testing and stakeholder sign‑off.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discover',
      desc: 'Workshops, user interviews, and competitive analysis.',
    },
    {
      step: '02',
      title: 'Define',
      desc: 'Personas, user journeys, and information architecture.',
    },
    {
      step: '03',
      title: 'Design',
      desc: 'Wireframes, mockups, and interactive prototypes (Figma).',
    },
    {
      step: '04',
      title: 'Test',
      desc: 'Usability testing, A/B tests, and iteration based on feedback.',
    },
  ];

  const tools = [
    'Figma',
    'Adobe XD',
    'Sketch',
    'InVision',
    'Miro',
    'Zeplin',
    'Axure RP',
    'Balsamiq',
  ];

  const portfolioItems = [
    { name: 'Health App', category: 'Mobile', image: 'https://placehold.co/400x300/4F46E5/white?text=Health+App' },
    { name: 'E‑commerce Dashboard', category: 'Web', image: 'https://placehold.co/400x300/8B5CF6/white?text=E‑commerce+Dashboard' },
    { name: 'Fintech Platform', category: 'Web', image: 'https://placehold.co/400x300/4F46E5/white?text=Fintech' },
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
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left text – unchanged */}
            <Grid item xs={12} md={6}>
              <Chip
                label="UI/UX Design"
                icon={<DesignServices />}
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
                Beautiful, User‑First Digital Experiences
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                We design products that people love to use – intuitive, accessible,
                and visually stunning. From research to pixel‑perfect UI.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/request-quote"
                  variant="contained"
                  size="large"
                  sx={{ bgcolor: 'white', color: 'primary.main', px: 4 }}
                >
                  Start a Design Project
                </Button>
                <Button
                  component={Link}
                  to="/portfolio"
                  variant="outlined"
                  size="large"
                  sx={{ color: 'white', borderColor: 'white' }}
                >
                  View Design Portfolio
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
                  src="https://placehold.co/600x500/4F46E5/white?text=UI%2FUX+Design"
                  alt="UI/UX design illustration"
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
          End‑to‑end design solutions that drive engagement
        </Typography>
        <Grid container spacing={4}>
          {services.map((s, idx) => (
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
                  {s.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {s.title}
                </Typography>
                <Typography color="text.secondary">{s.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Process (unchanged) */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Our Design Process
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            A user‑centric, iterative methodology
          </Typography>
          <Grid container spacing={4}>
            {process.map((step, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card sx={{ p: 3, textAlign: 'center', height: '100%', boxShadow: softShadow }}>
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

      {/* Tools & Technologies (unchanged) */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          Tools We Love
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Industry‑standard software for world‑class design
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
          {tools.map((tool) => (
            <Chip
              key={tool}
              label={tool}
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

      {/* Recent Work / Portfolio (unchanged) */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Recent Design Projects
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Real interfaces we’ve crafted
          </Typography>
          <Grid container spacing={4}>
            {portfolioItems.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    boxShadow: softShadow,
                    transition: '0.3s',
                    '&:hover': { transform: 'scale(1.02)', boxShadow: softShadowHover },
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight={600}>
                      {item.name}
                    </Typography>
                    <Chip label={item.category} size="small" sx={{ mt: 1 }} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button component={Link} to="/portfolio" variant="outlined">
              View Full Portfolio
            </Button>
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
            Ready to delight your users?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Let's create a design that stands out and drives results.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ bgcolor: 'white', color: 'secondary.main', px: 5, py: 1.5 }}
          >
            Discuss Your Design Needs
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default UiUxDesign;