import React from 'react';
import { Box, Container, Button, Link, Typography, Grid, Card, CardContent, Rating, Avatar } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';

const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';

const Testimonials = () => {
  const testimonials = [
    { name: 'Sarah Johnson', role: 'CEO, TechStart', content: 'Nexalura delivered an exceptional web application that exceeded our expectations. Their team was professional, responsive, and truly understood our vision.', rating: 5, avatar: 'S' },
    { name: 'Michael Chen', role: 'Founder, MobileFirst', content: 'The mobile app they built for us has transformed our business. Outstanding quality and ongoing support.', rating: 5, avatar: 'M' },
    { name: 'Emily Rodriguez', role: 'Product Manager, FinTech Co', content: 'Their AI automation solution saved us countless hours. Highly recommended for any business looking to scale.', rating: 5, avatar: 'E' },
    { name: 'David Kim', role: 'CTO, HealthSync', content: 'Nexalura rebuilt our legacy platform with modern tech – performance improved 300%.', rating: 5, avatar: 'D' },
    { name: 'Lisa Thompson', role: 'Marketing Director, StyleCart', content: 'The e‑commerce site they developed increased our conversions by 45%.', rating: 5, avatar: 'L' },
    { name: 'James Wilson', role: 'Operations Lead, UrbanRide', content: 'Flawless execution and great communication throughout the project.', rating: 5, avatar: 'J' },
  ];

  return (
    <Box>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container><Typography variant="h2" fontWeight={800}>Client Testimonials</Typography><Typography>What our clients say about working with us</Typography></Container>
      </Box>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {testimonials.map((t, i) => (
            <Grid item xs={12} md={6} lg={4} key={i}>
              <Card sx={{ p: 3, height: '100%', boxShadow: softShadow, transition: '0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>{t.avatar}</Avatar>
                  <Box><Typography variant="subtitle1" fontWeight={600}>{t.name}</Typography><Typography variant="body2" color="text.secondary">{t.role}</Typography></Box>
                </Box>
                <Rating value={t.rating} readOnly sx={{ mb: 2 }} />
                <FormatQuote sx={{ color: 'primary.light', fontSize: 40, mb: 1 }} />
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>"{t.content}"</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: 6, textAlign: 'center' }}>
        <Container><Typography variant="h5">Join our happy clients</Typography><Button onClick={() => (window.location.href = '/request-quote')}  variant="contained" sx={{ mt: 2, bgcolor: 'white', color: 'secondary.main' }}>Start Your Project</Button></Container>
      </Box>
    </Box>
  );
};
export default Testimonials;