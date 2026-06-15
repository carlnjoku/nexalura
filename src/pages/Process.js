import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  alpha,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
} from '@mui/material';
import {
  Search,
  Architecture,
  DesignServices,
  Code,
  BugReport,
  RocketLaunch,
  SupportAgent,
} from '@mui/icons-material';

// Soft shadow definitions
const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

const Process = () => {
  const theme = useTheme();

  const steps = [
    {
      label: 'Discovery',
      icon: <Search sx={{ fontSize: 32 }} />,
      description:
        'We dive deep into your business goals, target audience, and project requirements. This phase includes stakeholder interviews, competitor analysis, and technical feasibility study.',
      details: [
        'Requirements gathering workshops',
        'Business analysis & goal definition',
        'Project scope & success metrics',
        'Technology stack recommendations',
      ],
    },
    {
      label: 'Planning',
      icon: <Architecture sx={{ fontSize: 32 }} />,
      description:
        'We create a detailed roadmap, technical architecture, and project timeline. Agile sprints are planned to ensure transparent and predictable delivery.',
      details: [
        'Technical architecture design',
        'Milestone & sprint planning',
        'Resource allocation',
        'Risk assessment & mitigation',
      ],
    },
    {
      label: 'Design',
      icon: <DesignServices sx={{ fontSize: 32 }} />,
      description:
        'Our designers craft intuitive user interfaces and seamless user experiences. You’ll get wireframes, interactive prototypes, and high-fidelity mockups.',
      details: [
        'User research & personas',
        'Wireframing & information architecture',
        'Interactive prototyping (Figma)',
        'UI design & design system',
      ],
    },
    {
      label: 'Development',
      icon: <Code sx={{ fontSize: 32 }} />,
      description:
        'Agile development with continuous integration. We build scalable frontend, backend, and database solutions using modern frameworks.',
      details: [
        'Frontend development (React, Next.js)',
        'Backend APIs (Node.js, Python)',
        'Database design & optimization',
        'Regular code reviews & testing',
      ],
    },
    {
      label: 'Testing',
      icon: <BugReport sx={{ fontSize: 32 }} />,
      description:
        'Comprehensive quality assurance including unit tests, integration tests, performance benchmarking, and security audits.',
      details: [
        'Unit & integration testing',
        'End-to-end testing (Cypress)',
        'Performance & load testing',
        'Security & vulnerability scanning',
      ],
    },
    {
      label: 'Deployment',
      icon: <RocketLaunch sx={{ fontSize: 32 }} />,
      description:
        'Smooth launch to production with zero downtime. We handle server setup, CI/CD pipelines, and app store submissions.',
      details: [
        'Production environment setup',
        'CI/CD pipeline configuration',
        'App store submission (iOS/Android)',
        'Launch monitoring & rollback plan',
      ],
    },
    {
      label: 'Maintenance',
      icon: <SupportAgent sx={{ fontSize: 32 }} />,
      description:
        'Ongoing support, bug fixes, feature enhancements, and performance optimization to keep your product ahead.',
      details: [
        '24/7 monitoring & alerts',
        'Bug fixes & security patches',
        'Feature updates & enhancements',
        'Performance tuning & scaling',
      ],
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
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 800 }}
          >
            Our Development Process
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 700,
              mx: 'auto',
              opacity: 0.9,
              mb: 4,
            }}
          >
            A transparent, agile, and results‑driven approach to building
            exceptional digital products.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Typography variant="body2" sx={{ px: 2, py: 1, bgcolor: alpha(theme.palette.common.white, 0.15), borderRadius: 4 }}>
              📋 Discovery
            </Typography>
            <Typography variant="body2" sx={{ px: 2, py: 1, bgcolor: alpha(theme.palette.common.white, 0.15), borderRadius: 4 }}>
              🗓️ Planning
            </Typography>
            <Typography variant="body2" sx={{ px: 2, py: 1, bgcolor: alpha(theme.palette.common.white, 0.15), borderRadius: 4 }}>
              🎨 Design
            </Typography>
            <Typography variant="body2" sx={{ px: 2, py: 1, bgcolor: alpha(theme.palette.common.white, 0.15), borderRadius: 4 }}>
              💻 Development
            </Typography>
            <Typography variant="body2" sx={{ px: 2, py: 1, bgcolor: alpha(theme.palette.common.white, 0.15), borderRadius: 4 }}>
              ✅ Testing
            </Typography>
            <Typography variant="body2" sx={{ px: 2, py: 1, bgcolor: alpha(theme.palette.common.white, 0.15), borderRadius: 4 }}>
              🚀 Deployment
            </Typography>
            <Typography variant="body2" sx={{ px: 2, py: 1, bgcolor: alpha(theme.palette.common.white, 0.15), borderRadius: 4 }}>
              🔧 Maintenance
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Process Steps - Grid Layout with soft shadows */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 2 }}
        >
          How We Work
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 8, maxWidth: 700, mx: 'auto' }}
        >
          Every project follows our proven 7‑phase methodology, ensuring
          quality, transparency, and success.
        </Typography>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  transition: 'all 0.3s',
                  boxShadow: softShadow,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: softShadowHover,
                  },
                  overflow: 'visible',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        borderRadius: '50%',
                        p: 1.5,
                        mr: 2,
                        color: 'primary.main',
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography variant="h5" fontWeight={700}>
                      {index + 1}. {step.label}
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph color="text.secondary">
                    {step.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {step.details.map((detail, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            mr: 1.5,
                          }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {detail}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stepper Timeline with soft paper shadow */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Project Timeline
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Typical duration for a medium‑sized web or mobile application
          </Typography>
          <Paper
            elevation={0}
            sx={{
              bgcolor: 'transparent',
              boxShadow: softShadow,
              borderRadius: 4,
            }}
          >
            <Stepper orientation="vertical" nonLinear>
              {steps.map((step, idx) => (
                <Step key={idx} active>
                  <StepLabel StepIconProps={{ sx: { color: 'primary.main' } }}>
                    <Typography variant="h6" fontWeight={600}>
                      {step.label}
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography color="text.secondary" paragraph>
                      {step.description}
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 500 }}>
                      Key activities: {step.details.slice(0, 2).join(', ')}
                    </Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Paper>
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
            Ready to start your project?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Let’s discuss how our process can bring your vision to life.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <button
              onClick={() => (window.location.href = '/contact')}
              style={{
                backgroundColor: 'white',
                color: theme.palette.secondary.main,
                border: 'none',
                padding: '12px 32px',
                borderRadius: '40px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Contact Us
            </button>
            <button
              onClick={() => (window.location.href = '/request-quote')}
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '12px 32px',
                borderRadius: '40px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Request a Quote
            </button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Process;