import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Chip,
  Button,
  Divider,
  useTheme,
  alpha,
  Avatar,
} from '@mui/material';
import {
  ArrowBack,
  CheckCircle,
  CalendarToday,
  People,
  TrendingUp,
} from '@mui/icons-material';
import { caseStudies } from '../data/caseStudies';

const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

const PortfolioDetail = () => {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === parseInt(id));
  const theme = useTheme();

  if (!study) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h4" gutterBottom>Case Study Not Found</Typography>
          <Button component={Link} to="/portfolio" variant="contained">
            Back to Portfolio
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 8 },
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Button
              component={Link}
              to="/portfolio"
              startIcon={<ArrowBack />}
              sx={{ color: 'white', '&:hover': { color: alpha(theme.palette.common.white, 0.7) } }}
            >
              Back to Portfolio
            </Button>
          </Box>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Chip
                label={study.category}
                sx={{
                  mb: 2,
                  bgcolor: alpha(theme.palette.common.white, 0.15),
                  color: 'white',
                }}
              />
              <Typography variant="h2" component="h1" gutterBottom fontWeight={800}>
                {study.title}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                {study.industry} • {study.client}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 4 }}>
              <Box textAlign="center">
                <Typography variant="h4" fontWeight={700}>{study.timeline}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>Timeline</Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h4" fontWeight={700}>✓</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>Completed</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Hero Image */}
      <Container maxWidth="lg" sx={{ mt: -4 }}>
        <Box
          component="img"
          src={study.heroImage || '/images/placeholder-hero.jpg'}
          alt={study.title}
          sx={{
            width: '100%',
            maxHeight: 400,
            objectFit: 'cover',
            borderRadius: 4,
            boxShadow: softShadow,
          }}
        />
      </Container>

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={6}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              The Challenge
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              {study.challenge}
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Our Solution
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              {study.solution}
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Technologies Used
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
              {study.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                    color: 'primary.main',
                    fontWeight: 500,
                    borderRadius: 2,
                  }}
                />
              ))}
            </Box>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Results
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              {study.results}
            </Typography>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, boxShadow: softShadow, position: 'sticky', top: 24 }}>
              <Typography variant="h6" gutterBottom fontWeight={700}>
                Project Snapshot
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <People fontSize="small" color="primary" />
                <Typography variant="body2">Client: {study.client}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <CalendarToday fontSize="small" color="primary" />
                <Typography variant="body2">Timeline: {study.timeline}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <TrendingUp fontSize="small" color="primary" />
                <Typography variant="body2">Industry: {study.industry}</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Button
                component={Link}
                to="/request-quote"
                variant="contained"
                fullWidth
                sx={{ mb: 2 }}
              >
                Start a Similar Project
              </Button>
              <Button
                component={Link}
                to="/portfolio"
                variant="outlined"
                fullWidth
              >
                View All Projects
              </Button>
            </Card>
          </Grid>
        </Grid>

        {/* Screenshots */}
        {study.screenshots && study.screenshots.length > 0 && (
          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Screenshots
            </Typography>
            <Grid container spacing={3}>
              {study.screenshots.map((img, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <Box
                    component="img"
                    src={img}
                    alt={`${study.title} screenshot ${idx + 1}`}
                    sx={{
                      width: '100%',
                      borderRadius: 3,
                      boxShadow: softShadow,
                      transition: '0.3s',
                      '&:hover': { transform: 'scale(1.02)', boxShadow: softShadowHover },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Call to Action */}
        <Box
          sx={{
            mt: 8,
            bgcolor: alpha(theme.palette.primary.light, 0.05),
            p: 4,
            borderRadius: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom fontWeight={700}>
            Ready to Build Something Amazing?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Let’s discuss your project and create a solution just as powerful.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
          >
            Let's Talk
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PortfolioDetail;