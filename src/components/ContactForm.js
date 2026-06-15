import React, { useState } from 'react';
import { TextField, Button, Alert, Box } from '@mui/material';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { mb: 2 } }}>
      <TextField fullWidth label="Name" name="name" required value={form.name} onChange={handleChange} />
      <TextField fullWidth label="Email" name="email" type="email" required value={form.email} onChange={handleChange} />
      <TextField fullWidth label="Message" name="message" multiline rows={4} required value={form.message} onChange={handleChange} />
      <Button type="submit" variant="contained" fullWidth>Send Message</Button>
      {submitted && <Alert severity="success" sx={{ mt: 2 }}>Thank you! We'll get back soon.</Alert>}
    </Box>
  );
};

export default ContactForm;
