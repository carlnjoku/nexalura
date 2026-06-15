import React from 'react';
import { Box, Container, Typography, Grid, Card, useTheme } from '@mui/material';

const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';

const RescueProcess = () => {
  const theme = useTheme();

  const process = [
    { step: '01', title: 'Discovery', desc: 'We review your current site, identify issues, and define goals.' },
    { step: '02', title: 'Quote & Plan', desc: 'Transparent pricing and timeline for the rescue work.' },
    { step: '03', title: 'Execution', desc: 'We fix, optimize, and improve – with regular updates.' },
    { step: '04', title: 'Testing & Launch', desc: 'Rigorous QA before deploying the rescued site.' },
    { step: '05', title: 'Handover & Support', desc: 'Full documentation and optional maintenance plan.' },
  ];

  return (
    <Container maxWidth="lg" id="process" sx={{ py: { xs: 8, md: 10 } }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
        How We Rescue Your Project
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
        A transparent, step‑by‑step approach
      </Typography>
      <Grid container spacing={4}>
        {process.map((step, idx) => (
          <Grid item xs={12} sm={6} md={2.4} key={idx}>
            <Card sx={{ p: 3, textAlign: 'center', height: '100%', boxShadow: softShadow }}>
              <Typography variant="h2" sx={{ color: 'primary.main', fontWeight: 800, mb: 2 }}>
                {step.step}
              </Typography>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {step.desc}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RescueProcess;