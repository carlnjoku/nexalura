import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Link,
  useTheme,
  alpha,
  Avatar,
  Divider,
} from '@mui/material';
import {
  Code,
  Storage,
  Cloud,
  Security,
  DesignServices,
  MobileFriendly,
  Api,
  Speed,
} from '@mui/icons-material';

// Soft shadows (matching other pages)
const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

const Technologies = () => {
  const theme = useTheme();

  const categories = [
    {
      title: 'Frontend Development',
      icon: <Code sx={{ fontSize: 40 }} />,
      technologies: [
        { name: 'React', level: 'Advanced' },
        { name: 'Next.js', level: 'Advanced' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'Material UI', level: 'Advanced' },
        { name: 'Redux Toolkit', level: 'Intermediate' },
      ],
      color: '#4F46E5',
    },
    {
      title: 'Backend & APIs',
      icon: <Api sx={{ fontSize: 40 }} />,
      technologies: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'FastAPI', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
        { name: 'GraphQL', level: 'Intermediate' },
        { name: 'REST API', level: 'Advanced' },
      ],
      color: '#8B5CF6',
    },
    {
      title: 'Mobile Development',
      icon: <MobileFriendly sx={{ fontSize: 40 }} />,
      technologies: [
        { name: 'React Native', level: 'Advanced' },
        { name: 'Expo', level: 'Advanced' },
        { name: 'Flutter', level: 'Intermediate' },
        { name: 'iOS (Swift)', level: 'Intermediate' },
        { name: 'Android (Kotlin)', level: 'Intermediate' },
      ],
      color: '#4F46E5',
    },
    {
      title: 'Databases',
      icon: <Storage sx={{ fontSize: 40 }} />,
      technologies: [
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'MySQL', level: 'Advanced' },
        { name: 'Firebase', level: 'Advanced' },
        { name: 'Redis', level: 'Intermediate' },
      ],
      color: '#8B5CF6',
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud sx={{ fontSize: 40 }} />,
      technologies: [
        { name: 'AWS', level: 'Advanced' },
        { name: 'DigitalOcean', level: 'Advanced' },
        { name: 'Google Cloud', level: 'Intermediate' },
        { name: 'Docker', level: 'Advanced' },
        { name: 'Kubernetes', level: 'Intermediate' },
        { name: 'GitHub Actions', level: 'Advanced' },
        { name: 'Nginx', level: 'Advanced' },
      ],
      color: '#4F46E5',
    },
    {
      title: 'AI & Automation',
      icon: <Speed sx={{ fontSize: 40 }} />,
      technologies: [
        { name: 'TensorFlow', level: 'Advanced' },
        { name: 'OpenAI API', level: 'Advanced' },
        { name: 'LangChain', level: 'Intermediate' },
        { name: 'Computer Vision (OpenCV)', level: 'Advanced' },
        { name: 'Pandas / NumPy', level: 'Advanced' },
      ],
      color: '#8B5CF6',
    },
    {
      title: 'UI/UX Design',
      icon: <DesignServices sx={{ fontSize: 40 }} />,
      technologies: [
        { name: 'Figma', level: 'Advanced' },
        { name: 'Adobe XD', level: 'Intermediate' },
        { name: 'Sketch', level: 'Intermediate' },
        { name: 'Canva', level: 'Advanced' },
      ],
      color: '#4F46E5',
    },
    {
      title: 'Security & Testing',
      icon: <Security sx={{ fontSize: 40 }} />,
      technologies: [
        { name: 'Jest', level: 'Advanced' },
        { name: 'Cypress', level: 'Advanced' },
        { name: 'OWASP', level: 'Advanced' },
        { name: 'SonarQube', level: 'Intermediate' },
        { name: 'Penetration Testing', level: 'Advanced' },
      ],
      color: '#8B5CF6',
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return theme.palette.success.main;
      case 'Intermediate':
        return theme.palette.warning.main;
      default:
        return theme.palette.grey[500];
    }
  };

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
            Technologies We Use
          </Typography>
          <Typography
            variant="h6"
            sx={{ maxWidth: 700, mx: 'auto', opacity: 0.9 }}
          >
            We leverage the most modern, scalable, and secure technologies to
            build future‑proof digital products.
          </Typography>
        </Container>
      </Box>

      {/* Categories Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          {categories.map((category, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  transition: 'all 0.3s',
                  boxShadow: softShadow,
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: softShadowHover,
                  },
                  overflow: 'visible',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Header with icon */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: alpha(category.color, 0.1),
                        color: category.color,
                        width: 56,
                        height: 56,
                        mr: 2,
                      }}
                    >
                      {category.icon}
                    </Avatar>
                    <Typography variant="h5" fontWeight={700}>
                      {category.title}
                    </Typography>
                  </Box>

                  <Divider sx={{ mb: 3 }} />

                  {/* Technology chips */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {category.technologies.map((tech) => (
                      <Chip
                        key={tech.name}
                        label={
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                            }}
                          >
                            <span>{tech.name}</span>
                            <Box
                              component="span"
                              sx={{
                                ml: 1,
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                color: getLevelColor(tech.level),
                                bgcolor: alpha(getLevelColor(tech.level), 0.1),
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
                          borderColor: alpha(category.color, 0.3),
                          fontWeight: 500,
                          '&:hover': {
                            bgcolor: alpha(category.color, 0.05),
                            borderColor: category.color,
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Trust Badges / Partners */}
      <Box
        sx={{
          bgcolor: alpha(theme.palette.primary.main, 0.04),
          py: 6,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h5" gutterBottom fontWeight={600}>
            Trusted by industry leaders
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 4,
              mt: 3,
            }}
          >
            <Chip
              label="AWS Partner"
              icon={<Cloud />}
              sx={{ p: 2, fontSize: '1rem', bgcolor: 'white', boxShadow: softShadow }}
            />
            <Chip
              label="Google Cloud Partner"
              icon={<Cloud />}
              sx={{ p: 2, fontSize: '1rem', bgcolor: 'white', boxShadow: softShadow }}
            />
            <Chip
              label="Meta Developer"
              icon={<Code />}
              sx={{ p: 2, fontSize: '1rem', bgcolor: 'white', boxShadow: softShadow }}
            />
            <Chip
              label="Microsoft Gold Partner"
              icon={<Security />}
              sx={{ p: 2, fontSize: '1rem', bgcolor: 'white', boxShadow: softShadow }}
            />
          </Box>
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
            Ready to build with modern tech?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Let’s discuss how our expertise can accelerate your project.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ bgcolor: 'white', color: 'secondary.main', px: 5, py: 1.5 }}
          >
            Contact Our Experts
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Technologies;