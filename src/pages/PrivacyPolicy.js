import React from 'react';
import { Box, Container, Typography, Paper, Divider } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Box>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, textAlign: 'center' }}>
        <Container><Typography variant="h2">Privacy Policy</Typography><Typography>Effective date: June 15, 2026</Typography></Container>
      </Box>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper sx={{ p: 4, boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}>
          <Typography variant="h5" gutterBottom>1. Information We Collect</Typography>
          <Typography paragraph>We collect personal information you provide (name, email, phone) when you contact us or request a quote. We also collect usage data via cookies.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom>2. How We Use Your Information</Typography>
          <Typography paragraph>We use your information to respond to inquiries, provide services, improve our website, and send marketing communications (with your consent).</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom>3. Data Sharing</Typography>
          <Typography paragraph>We do not sell your personal data. We may share with third‑party service providers (hosting, analytics) under confidentiality agreements.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom>4. Data Security</Typography>
          <Typography paragraph>We implement industry‑standard measures to protect your data, but no transmission over the internet is 100% secure.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom>5. Your Rights</Typography>
          <Typography paragraph>You may request access, correction, or deletion of your personal data by emailing privacy@nexalura.com.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom>6. Cookies</Typography>
          <Typography paragraph>We use cookies to enhance user experience. You can disable cookies in your browser settings.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom>7. Changes to This Policy</Typography>
          <Typography paragraph>We may update this policy; changes will be posted on this page.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography paragraph variant="body2" color="text.secondary">Contact: privacy@nexalura.com</Typography>
        </Paper>
      </Container>
    </Box>
  );
};
export default PrivacyPolicy;