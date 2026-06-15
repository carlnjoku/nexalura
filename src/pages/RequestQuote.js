import React, { useState } from 'react';
import { Box, Container, Typography, Stepper, Step, StepLabel, TextField, Button, MenuItem, Grid, Paper, Alert } from '@mui/material';
import { Link } from 'react-router-dom';

const RequestQuote = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    features: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const steps = ['Project Details', 'Requirements', 'Contact Information'];

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}><TextField select fullWidth label="Project Type" name="projectType" value={formData.projectType} onChange={handleChange} required><MenuItem value="Web Development">Web Development</MenuItem><MenuItem value="Mobile App">Mobile App</MenuItem><MenuItem value="AI/Automation">AI/Automation</MenuItem><MenuItem value="API Integration">API Integration</MenuItem><MenuItem value="Cloud/DevOps">Cloud/DevOps</MenuItem><MenuItem value="Other">Other</MenuItem></TextField></Grid>
            <Grid item xs={12}><TextField select fullWidth label="Budget Range" name="budget" value={formData.budget} onChange={handleChange}><MenuItem value="$5k-$15k">$5,000 – $15,000</MenuItem><MenuItem value="$15k-$30k">$15,000 – $30,000</MenuItem><MenuItem value="$30k-$60k">$30,000 – $60,000</MenuItem><MenuItem value="$60k+">$60,000+</MenuItem><MenuItem value="Not sure">Not sure</MenuItem></TextField></Grid>
            <Grid item xs={12}><TextField select fullWidth label="Timeline" name="timeline" value={formData.timeline} onChange={handleChange}><MenuItem value="ASAP">ASAP (within 2 weeks)</MenuItem><MenuItem value="1-2 months">1–2 months</MenuItem><MenuItem value="3-4 months">3–4 months</MenuItem><MenuItem value="5+ months">5+ months</MenuItem></TextField></Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}><TextField fullWidth label="Key features / requirements" name="features" multiline rows={4} value={formData.features} onChange={handleChange} placeholder="Describe the main functionality you need..." /></Grid>
            <Grid item xs={12}><TextField fullWidth label="Additional details" name="message" multiline rows={3} value={formData.message} onChange={handleChange} placeholder="Anything else we should know?" /></Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Full name" name="name" value={formData.name} onChange={handleChange} required /></Grid>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required /></Grid>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Phone" name="phone" value={formData.phone} onChange={handleChange} /></Grid>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Company (optional)" name="company" value={formData.company} onChange={handleChange} /></Grid>
          </Grid>
        );
      default: return null;
    }
  };

  if (submitted) return <Box sx={{ py: 10, textAlign: 'center' }}><Container><Alert severity="success">Thank you! We'll contact you within 24 hours.</Alert><Button component={Link} to="/" sx={{ mt: 2 }}>Return Home</Button></Container></Box>;

  return (
    <Box>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, textAlign: 'center' }}>
        <Container><Typography variant="h2">Request a Quote</Typography><Typography>Tell us about your project and we'll get back to you promptly.</Typography></Container>
      </Box>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper sx={{ p: 4, boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>{steps.map(label => <Step key={label}><StepLabel>{label}</StepLabel></Step>)}</Stepper>
          <form onSubmit={handleSubmit}>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
              {activeStep === steps.length - 1 ? <Button type="submit" variant="contained">Submit Request</Button> : <Button variant="contained" onClick={handleNext}>Next</Button>}
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};
export default RequestQuote;
