import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Chip,
  CardContent,
  Button,
  useTheme,
  alpha,
  Avatar,
} from '@mui/material';
import { Handshake, Verified, EmojiEvents, TrendingUp } from '@mui/icons-material';

const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';

const Partners = () => {
  const theme = useTheme();

  const partners = [
    { name: 'TechCorp', logo: 'https://placehold.co/200x100/4F46E5/white?text=TechCorp' },
    { name: 'InnovateLabs', logo: 'https://placehold.co/200x100/8B5CF6/white?text=InnovateLabs' },
    { name: 'CloudScale', logo: 'https://placehold.co/200x100/4F46E5/white?text=CloudScale' },
    { name: 'FinSecure', logo: 'https://placehold.co/200x100/8B5CF6/white?text=FinSecure' },
    { name: 'HealthSoft', logo: 'https://placehold.co/200x100/4F46E5/white?text=HealthSoft' },
    { name: 'RetailHub', logo: 'https://placehold.co/200x100/8B5CF6/white?text=RetailHub' },
  ];

  const clients = [
    'Acme Inc.', 'Global Solutions', 'NextGen AI', 'Urban Mobility', 'EduTech', 'MediCare',
  ];

  const benefits = [
    { icon: <Handshake />, title: 'Strategic Alliances', desc: 'Long‑term partnerships with technology leaders.' },
    { icon: <Verified />, title: 'Certified Experts', desc: 'Official certifications from AWS, Google, and Microsoft.' },
    { icon: <EmojiEvents />, title: 'Award‑Winning', desc: 'Recognized for excellence in software development.' },
    { icon: <TrendingUp />, title: 'Joint Innovation', desc: 'Co‑developing solutions for emerging markets.' },
  ];

  return (
    <Box>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container><Typography variant="h2" fontWeight={800}>Our Partners & Clients</Typography></Container>
      </Box>
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>Trusted by Industry Leaders</Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
          {partners.map((p, i) => (
            <Grid item xs={6} sm={4} md={2} key={i}>
              <Box component="img" src={p.logo} alt={p.name} sx={{ width: '100%', maxHeight: 80, objectFit: 'contain', filter: 'grayscale(0.2)', transition: '0.3s', '&:hover': { filter: 'grayscale(0)' } }} />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h4" align="center" gutterBottom>Happy Clients</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
          {clients.map((c, i) => <Chip key={i} label={c} sx={{ p: 2, fontSize: '1rem', bgcolor: alpha(theme.palette.primary.main, 0.05), boxShadow: softShadow }} />)}
        </Box>
        <Grid container spacing={4} sx={{ mt: 8 }}>
          {benefits.map((b, i) => (
            <Grid item xs={12} md={3} key={i}>
              <Card sx={{ p: 3, textAlign: 'center', height: '100%', boxShadow: softShadow }}>
                <Avatar sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), color: 'primary.main', width: 56, height: 56, mx: 'auto', mb: 2 }}>{b.icon}</Avatar>
                <Typography variant="h6">{b.title}</Typography>
                <Typography color="text.secondary">{b.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container><Typography variant="h4" gutterBottom>Become a Partner</Typography><Button component={Link} to="/contact" variant="contained" sx={{ bgcolor: 'white', color: 'secondary.main' }}>Contact Partnerships</Button></Container>
      </Box>
    </Box>
  );
};
export default Partners;