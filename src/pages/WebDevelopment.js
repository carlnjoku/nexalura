// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Chip,
//   useTheme,
//   alpha,
//   Avatar,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from '@mui/material';
// import {
//   Web,
//   Storefront,
//   Business,
//   Dashboard,
//   Speed,
//   Security,
//   CheckCircle,
//   Code,
//   Storage,
//   CloudQueue,
// } from '@mui/icons-material';

// const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
// const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

// const WebDevelopment = () => {
//   const theme = useTheme();

//   const services = [
//     {
//       icon: <Web fontSize="large" />,
//       title: 'Business Websites',
//       desc: 'Professional, conversion‑focused websites for service providers, agencies, and corporations.',
//     },
//     {
//       icon: <CloudQueue fontSize="large" />,
//       title: 'SaaS Applications',
//       desc: 'Multi‑tenant platforms with subscription billing, user dashboards, and API access.',
//     },
//     {
//       icon: <Business fontSize="large" />,
//       title: 'Enterprise Systems',
//       desc: 'Complex internal tools, ERPs, CRM, and workflow automation for large organizations.',
//     },
//     {
//       icon: <Dashboard fontSize="large" />,
//       title: 'Admin Dashboards',
//       desc: 'Powerful data visualization, reporting, and management interfaces.',
//     },
//     {
//       icon: <Storefront fontSize="large" />,
//       title: 'E‑commerce Solutions',
//       desc: 'Custom online stores with payment gateways, inventory, and order management.',
//     },
//   ];

//   const technologies = [
//     { name: 'React', level: 'Advanced' },
//     { name: 'Next.js', level: 'Advanced' },
//     { name: 'Node.js / Express', level: 'Advanced' },
//     { name: 'FastAPI (Python)', level: 'Advanced' },
//     { name: 'MongoDB', level: 'Advanced' },
//     { name: 'PostgreSQL', level: 'Advanced' },
//     { name: 'TypeScript', level: 'Advanced' },
//     { name: 'Tailwind CSS', level: 'Advanced' },
//   ];

//   const benefits = [
//     { title: 'Lightning Fast', desc: 'Optimized performance with SSR, ISR, and efficient caching.' },
//     { title: 'Scalable Architecture', desc: 'Microservices, serverless, or monolithic – we design for growth.' },
//     { title: 'Secure by Default', desc: 'Input validation, authentication, CSRF protection, and HTTPS.' },
//     { title: 'SEO Optimized', desc: 'Structured data, meta tags, and performance scores >90 on Lighthouse.' },
//   ];

//   const approach = [
//     'Requirements workshop & technical audit',
//     'Agile development with bi‑weekly sprints',
//     'Continuous integration & automated testing',
//     'Deployment to staging for client review',
//     'Production launch with rollback plan',
//     'Post‑launch support & maintenance',
//   ];

//   return (
//     <Box>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           bgcolor: 'primary.main',
//           color: 'white',
//           py: { xs: 8, md: 10 },
//           position: 'relative',
//           overflow: 'hidden',
//         }}
//       >
//         <Container maxWidth="lg">
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <Chip
//                 label="Web Development"
//                 icon={<Web />}
//                 sx={{
//                   mb: 2,
//                   bgcolor: alpha(theme.palette.common.white, 0.15),
//                   color: 'white',
//                   '& .MuiChip-icon': { color: 'white' },
//                 }}
//               />
//               <Typography
//                 variant="h2"
//                 component="h1"
//                 gutterBottom
//                 sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' } }}
//               >
//                 Powerful Web Applications
//               </Typography>
//               <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
//                 From business websites to complex SaaS platforms – we build fast,
//                 secure, and scalable web solutions using modern frameworks.
//               </Typography>
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                 <Button
//                   component={Link}
//                   to="/request-quote"
//                   variant="contained"
//                   size="large"
//                   sx={{ bgcolor: 'white', color: 'primary.main', px: 4 }}
//                 >
//                   Start Your Project
//                 </Button>
//                 <Button
//                   component={Link}
//                   to="/portfolio"
//                   variant="outlined"
//                   size="large"
//                   sx={{ color: 'white', borderColor: 'white' }}
//                 >
//                   View Web Portfolio
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Box
//                 component="img"
//                 src="https://placehold.co/600x500/4F46E5/white?text=Web+Development"
//                 alt="Web development illustration"
//                 sx={{
//                   width: '100%',
//                   maxWidth: 500,
//                   mx: 'auto',
//                   display: 'block',
//                   borderRadius: 4,
//                   boxShadow: '0 20px 35px -10px rgba(0,0,0,0.3)',
//                   animation: 'float 6s ease-in-out infinite',
//                   '@keyframes float': {
//                     '0%': { transform: 'translateY(0px)' },
//                     '50%': { transform: 'translateY(-20px)' },
//                     '100%': { transform: 'translateY(0px)' },
//                   },
//                 }}
//               />
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* What We Build */}
//       <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
//         <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
//           What We Build
//         </Typography>
//         <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
//           Tailored web solutions for every business need
//         </Typography>
//         <Grid container spacing={4}>
//           {services.map((service, idx) => (
//             <Grid item xs={12} sm={6} md={4} key={idx}>
//               <Card
//                 sx={{
//                   p: 3,
//                   height: '100%',
//                   boxShadow: softShadow,
//                   transition: '0.3s',
//                   '&:hover': { transform: 'translateY(-6px)', boxShadow: softShadowHover },
//                 }}
//               >
//                 <Avatar
//                   sx={{
//                     bgcolor: alpha(theme.palette.primary.main, 0.1),
//                     color: 'primary.main',
//                     width: 56,
//                     height: 56,
//                     mb: 2,
//                   }}
//                 >
//                   {service.icon}
//                 </Avatar>
//                 <Typography variant="h6" gutterBottom fontWeight={600}>
//                   {service.title}
//                 </Typography>
//                 <Typography color="text.secondary">{service.desc}</Typography>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Technology Stack */}
//       <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
//         <Container maxWidth="lg">
//           <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
//             Modern Tech Stack
//           </Typography>
//           <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
//             We use industry‑leading frameworks and databases
//           </Typography>
//           <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
//             {technologies.map((tech) => (
//               <Chip
//                 key={tech.name}
//                 label={
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//                     <span>{tech.name}</span>
//                     <Box
//                       component="span"
//                       sx={{
//                         ml: 1,
//                         fontSize: '0.7rem',
//                         fontWeight: 600,
//                         color: theme.palette.success.main,
//                         bgcolor: alpha(theme.palette.success.main, 0.1),
//                         px: 1,
//                         py: 0.3,
//                         borderRadius: 2,
//                       }}
//                     >
//                       {tech.level}
//                     </Box>
//                   </Box>
//                 }
//                 variant="outlined"
//                 sx={{
//                   py: 2.5,
//                   px: 1.5,
//                   fontSize: '0.9rem',
//                   fontWeight: 500,
//                   borderColor: alpha(theme.palette.primary.main, 0.3),
//                   bgcolor: 'white',
//                   boxShadow: softShadow,
//                 }}
//               />
//             ))}
//           </Box>
//         </Container>
//       </Box>

//       {/* Benefits & Approach */}
//       <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
//         <Grid container spacing={6}>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
//               Why Choose Our Web Development?
//             </Typography>
//             <Typography variant="body1" color="text.secondary" paragraph>
//               We build websites that perform, convert, and scale.
//             </Typography>
//             <Grid container spacing={2}>
//               {benefits.map((benefit, idx) => (
//                 <Grid item xs={12} sm={6} key={idx}>
//                   <Card sx={{ p: 2, boxShadow: softShadow }}>
//                     <Typography variant="subtitle1" fontWeight={600}>
//                       {benefit.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {benefit.desc}
//                     </Typography>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
//               Our Development Approach
//             </Typography>
//             <Typography variant="body1" color="text.secondary" paragraph>
//               Agile, transparent, and quality‑driven.
//             </Typography>
//             <List>
//               {approach.map((item, idx) => (
//                 <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
//                   <ListItemIcon sx={{ minWidth: 36 }}>
//                     <CheckCircle color="primary" fontSize="small" />
//                   </ListItemIcon>
//                   <ListItemText primary={item} />
//                 </ListItem>
//               ))}
//             </List>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Call to Action */}
//       <Box
//         sx={{
//           bgcolor: 'secondary.main',
//           color: 'white',
//           py: 8,
//           textAlign: 'center',
//         }}
//       >
//         <Container maxWidth="md">
//           <Typography variant="h4" gutterBottom fontWeight={700}>
//             Ready to Build Your Web Project?
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
//             Let’s discuss your requirements and deliver a modern web solution.
//           </Typography>
//           <Button
//             component={Link}
//             to="/contact"
//             variant="contained"
//             size="large"
//             sx={{ bgcolor: 'white', color: 'secondary.main', px: 5, py: 1.5 }}
//           >
//             Get a Free Consultation
//           </Button>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default WebDevelopment;




import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
  alpha,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Web,
  Storefront,
  Business,
  Dashboard,
  Speed,
  Security,
  CheckCircle,
  Code,
  Storage,
  CloudQueue,
} from '@mui/icons-material';

const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

const WebDevelopment = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <Web fontSize="large" />,
      title: 'Business Websites',
      desc: 'Professional, conversion‑focused websites for service providers, agencies, and corporations.',
    },
    {
      icon: <CloudQueue fontSize="large" />,
      title: 'SaaS Applications',
      desc: 'Multi‑tenant platforms with subscription billing, user dashboards, and API access.',
    },
    {
      icon: <Business fontSize="large" />,
      title: 'Enterprise Systems',
      desc: 'Complex internal tools, ERPs, CRM, and workflow automation for large organizations.',
    },
    {
      icon: <Dashboard fontSize="large" />,
      title: 'Admin Dashboards',
      desc: 'Powerful data visualization, reporting, and management interfaces.',
    },
    {
      icon: <Storefront fontSize="large" />,
      title: 'E‑commerce Solutions',
      desc: 'Custom online stores with payment gateways, inventory, and order management.',
    },
  ];

  const technologies = [
    { name: 'React', level: 'Advanced' },
    { name: 'Next.js', level: 'Advanced' },
    { name: 'Node.js / Express', level: 'Advanced' },
    { name: 'FastAPI (Python)', level: 'Advanced' },
    { name: 'MongoDB', level: 'Advanced' },
    { name: 'PostgreSQL', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Advanced' },
  ];

  const benefits = [
    { title: 'Lightning Fast', desc: 'Optimized performance with SSR, ISR, and efficient caching.' },
    { title: 'Scalable Architecture', desc: 'Microservices, serverless, or monolithic – we design for growth.' },
    { title: 'Secure by Default', desc: 'Input validation, authentication, CSRF protection, and HTTPS.' },
    { title: 'SEO Optimized', desc: 'Structured data, meta tags, and performance scores >90 on Lighthouse.' },
  ];

  const approach = [
    'Requirements workshop & technical audit',
    'Agile development with bi‑weekly sprints',
    'Continuous integration & automated testing',
    'Deployment to staging for client review',
    'Production launch with rollback plan',
    'Post‑launch support & maintenance',
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 10 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                label="Web Development"
                icon={<Web />}
                sx={{
                  mb: 2,
                  bgcolor: alpha(theme.palette.common.white, 0.15),
                  color: 'white',
                  '& .MuiChip-icon': { color: 'white' },
                }}
              />
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' } }}
              >
                Powerful Web Applications
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                From business websites to complex SaaS platforms – we build fast,
                secure, and scalable web solutions using modern frameworks.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/request-quote"
                  variant="contained"
                  size="large"
                  sx={{ bgcolor: 'white', color: 'primary.main', px: 4 }}
                >
                  Start Your Project
                </Button>
                <Button
                  component={Link}
                  to="/portfolio"
                  variant="outlined"
                  size="large"
                  sx={{ color: 'white', borderColor: 'white' }}
                >
                  View Web Portfolio
                </Button>
              </Box>
            </Grid>

            {/* Circular Hero Image */}
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 450,
                  aspectRatio: '1/1',
                  margin: 'auto',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 20px 35px -10px rgba(0,0,0,0.3)',
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                    '100%': { transform: 'translateY(0px)' },
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://placehold.co/600x500/4F46E5/white?text=Web+Development"
                  alt="Web development illustration"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* What We Build */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          What We Build
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Tailored web solutions for every business need
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  boxShadow: softShadow,
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: softShadowHover },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: 'primary.main',
                    width: 56,
                    height: 56,
                    mb: 2,
                  }}
                >
                  {service.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {service.title}
                </Typography>
                <Typography color="text.secondary">{service.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Technology Stack */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.light, 0.05), py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Modern Tech Stack
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            We use industry‑leading frameworks and databases
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
            {technologies.map((tech) => (
              <Chip
                key={tech.name}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <span>{tech.name}</span>
                    <Box
                      component="span"
                      sx={{
                        ml: 1,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: theme.palette.success.main,
                        bgcolor: alpha(theme.palette.success.main, 0.1),
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
                  py: 2.5,
                  px: 1.5,
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  borderColor: alpha(theme.palette.primary.main, 0.3),
                  bgcolor: 'white',
                  boxShadow: softShadow,
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Benefits & Approach */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Why Choose Our Web Development?
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We build websites that perform, convert, and scale.
            </Typography>
            <Grid container spacing={2}>
              {benefits.map((benefit, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <Card sx={{ p: 2, boxShadow: softShadow }}>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {benefit.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Our Development Approach
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Agile, transparent, and quality‑driven.
            </Typography>
            <List>
              {approach.map((item, idx) => (
                <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircle color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>

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
            Ready to Build Your Web Project?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Let’s discuss your requirements and deliver a modern web solution.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ bgcolor: 'white', color: 'secondary.main', px: 5, py: 1.5 }}
          >
            Get a Free Consultation
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default WebDevelopment;