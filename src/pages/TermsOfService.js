import React from 'react';
import { Box, Container, Typography, Paper, Divider } from '@mui/material';

const TermsOfService = () => {
  return (
    <Box>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, textAlign: 'center' }}>
        <Container><Typography variant="h2">Terms of Service</Typography><Typography>Last updated: June 15, 2026</Typography></Container>
      </Box>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper sx={{ p: 4, boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}>
          <Typography variant="h5" gutterBottom>1. Acceptance of Terms</Typography>
          <Typography paragraph>By accessing or using Nexalura's services, you agree to be bound by these Terms.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom>2. Services</Typography>
          <Typography paragraph>We provide custom software development, web/mobile app development, AI solutions, and related consulting. Project scope and deliverables will be defined in separate Statements of Work.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom>3. Payment Terms</Typography>
          <Typography paragraph>Invoices are due within 15 days. Late payments may incur interest. All fees are exclusive of taxes.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom>4. Intellectual Property</Typography>
          <Typography paragraph>Upon full payment, all custom code and designs become your property. Third‑party libraries remain under their original licenses.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom>5. Confidentiality</Typography>
          <Typography paragraph>Both parties agree to protect confidential information shared during the engagement.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom>6. Limitation of Liability</Typography>
          <Typography paragraph>To the maximum extent permitted by law, we are not liable for indirect or consequential damages.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom>7. Governing Law</Typography>
          <Typography paragraph>These terms are governed by the laws of California, USA.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom>8. Changes to Terms</Typography>
          <Typography paragraph>We may update these terms at any time. Continued use constitutes acceptance.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography paragraph variant="body2" color="text.secondary">For questions, contact legal@nexalura.com</Typography>
        </Paper>
      </Container>
    </Box>
  );
};
export default TermsOfService;