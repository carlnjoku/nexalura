import React from 'react'; import { Box, Container, Typography } from '@mui/material'; import ContactForm from '../components/ContactForm';
const Contact = () => <Box sx={{ py: 8 }}><Container maxWidth="md"><Typography variant="h2" align="center">Contact Us</Typography><ContactForm /></Container></Box>;
export default Contact;
