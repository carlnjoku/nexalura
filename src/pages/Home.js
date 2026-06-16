// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   Chip,
//   Rating,
//   useTheme,
//   alpha,
// } from '@mui/material';
// import CodeIcon from '@mui/icons-material/Code';
// import SmartphoneIcon from '@mui/icons-material/Smartphone';
// import PaletteIcon from '@mui/icons-material/Palette';
// import AndroidIcon from '@mui/icons-material/Android';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import { images } from '../config/images';

// // Soft shadow definition (reusable)
// const softShadow = '0 8px 20px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.02)';
// const softShadowHover = '0 12px 28px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.02)';

// const Home = () => {
//   const theme = useTheme();

//   const services = [
//     {
//       icon: <CodeIcon sx={{ fontSize: 48 }} />,
//       title: 'Web Development',
//       description:
//         'Custom websites, SaaS apps, e-commerce solutions, and enterprise systems.',
//       link: '/services/web-development',
//     },
//     {
//       icon: <SmartphoneIcon sx={{ fontSize: 48 }} />,
//       title: 'Mobile Development',
//       description:
//         'iOS, Android, and cross-platform apps with React Native.',
//       link: '/services/mobile-development',
//     },
//     {
//       icon: <PaletteIcon sx={{ fontSize: 48 }} />,
//       title: 'UI/UX Design',
//       description:
//         'User-centered design, wireframes, prototypes, and mockups.',
//       link: '/services/ui-ux-design',
//     },
//     {
//       icon: <AndroidIcon sx={{ fontSize: 48 }} />,
//       title: 'AI & Automation',
//       description:
//         'Chatbots, AI assistants, process automation, and computer vision.',
//       link: '/services/ai-automation',
//     },
//   ];

//   const industries = [
//     'Healthcare',
//     'Real Estate',
//     'Cleaning Services',
//     'Logistics',
//     'Education',
//     'E-commerce',
//     'Finance',
//     'Startups',
//   ];

//   const process = [
//     {
//       step: '01',
//       title: 'Discovery',
//       desc: 'Requirements gathering and business analysis',
//     },
//     {
//       step: '02',
//       title: 'Planning',
//       desc: 'Technical architecture and milestone planning',
//     },
//     {
//       step: '03',
//       title: 'Design',
//       desc: 'Wireframes and UI/UX design',
//     },
//     {
//       step: '04',
//       title: 'Development',
//       desc: 'Frontend, backend, and database implementation',
//     },
//     {
//       step: '05',
//       title: 'Testing',
//       desc: 'QA, security, and performance testing',
//     },
//     {
//       step: '06',
//       title: 'Deployment',
//       desc: 'Production setup and launch',
//     },
//   ];

//   const testimonials = [
//     {
//       name: 'Sarah Johnson',
//       role: 'CEO, TechStart',
//       content:
//         'Nexalura delivered an exceptional web application that exceeded our expectations. Their team was professional, responsive, and truly understood our vision.',
//       rating: 5,
//     },
//     {
//       name: 'Michael Chen',
//       role: 'Founder, MobileFirst',
//       content:
//         'The mobile app they built for us has transformed our business. Outstanding quality and ongoing support.',
//       rating: 5,
//     },
//     {
//       name: 'Emily Rodriguez',
//       role: 'Product Manager, FinTech Co',
//       content:
//         'Their AI automation solution saved us countless hours. Highly recommended for any business looking to scale.',
//       rating: 5,
//     },
//   ];

//   return (
//     <Box>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           position: 'relative',
//           bgcolor: 'primary.main',
//           color: 'white',
//           py: { xs: 10, md: 16 },
//           overflow: 'hidden',
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: `radial-gradient(circle at 20% 50%, ${alpha(
//               theme.palette.primary.light,
//               0.3
//             )} 0%, ${alpha(theme.palette.primary.dark, 0.2)} 100%)`,
//             zIndex: 0,
//           },
//           '&::after': {
//             content: '""',
//             position: 'absolute',
//             bottom: '-20%',
//             right: '-10%',
//             width: '300px',
//             height: '300px',
//             borderRadius: '50%',
//             background: alpha(theme.palette.common.white, 0.08),
//             zIndex: 0,
//           },
//         }}
//       >
//         <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={7}>
//               <Box
//                 sx={{
//                   animation: 'fadeInUp 0.8s ease-out',
//                   '@keyframes fadeInUp': {
//                     '0%': { opacity: 0, transform: 'translateY(30px)' },
//                     '100%': { opacity: 1, transform: 'translateY(0)' },
//                   },
//                 }}
//               >
//                 <Chip
//                   label="We build digital excellence"
//                   icon={<AutoAwesomeIcon />}
//                   sx={{
//                     mb: 3,
//                     bgcolor: alpha(theme.palette.common.white, 0.15),
//                     color: 'white',
//                     fontWeight: 500,
//                     backdropFilter: 'blur(4px)',
//                     '& .MuiChip-icon': { color: 'white' },
//                   }}
//                 />
//                 <Typography
//                   variant="h1"
//                   sx={{
//                     fontSize: { xs: '2.8rem', md: '4rem', lg: '4.5rem' },
//                     fontWeight: 800,
//                     mb: 2,
//                     lineHeight: 1.2,
//                   }}
//                 >
//                   Build Digital Products That Drive Growth
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     mb: 4,
//                     opacity: 0.9,
//                     fontSize: { xs: '1rem', md: '1.25rem' },
//                     maxWidth: '90%',
//                   }}
//                 >
//                   Custom software, websites, mobile apps, and AI solutions for
//                   forward-thinking businesses.
//                 </Typography>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     gap: 2,
//                     flexWrap: 'wrap',
//                   }}
//                 >
//                   <Button
//                     component={Link}
//                     to="/request-quote"
//                     variant="contained"
//                     size="large"
//                     sx={{
//                       bgcolor: 'white',
//                       color: 'primary.main',
//                       px: 4,
//                       py: 1.5,
//                       '&:hover': {
//                         bgcolor: alpha(theme.palette.common.white, 0.9),
//                         transform: 'scale(1.02)',
//                       },
//                       transition: 'all 0.2s',
//                     }}
//                   >
//                     Start Your Project
//                   </Button>
//                   <Button
//                     component={Link}
//                     to="/portfolio"
//                     variant="outlined"
//                     size="large"
//                     sx={{
//                       color: 'white',
//                       borderColor: 'white',
//                       px: 4,
//                       py: 1.5,
//                       '&:hover': {
//                         borderColor: 'white',
//                         bgcolor: alpha(theme.palette.common.white, 0.1),
//                       },
//                     }}
//                   >
//                     View Our Work
//                   </Button>
//                 </Box>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
//               <Box
//                 component="img"
//                 src={images.home}
//                 alt="Hero illustration"
//                 sx={{
//                   width: '100%',
//                   maxWidth: 450,
//                   margin: 'auto',
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

//       {/* Services Section */}
//       <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
//         <Typography
//           variant="h2"
//           align="center"
//           gutterBottom
//           sx={{ fontWeight: 700 }}
//         >
//           Our Services
//         </Typography>
//         <Typography
//           variant="h6"
//           align="center"
//           color="text.secondary"
//           sx={{ mb: 6, maxWidth: '80%', mx: 'auto' }}
//         >
//           Comprehensive digital solutions tailored to your business needs
//         </Typography>
//         <Grid container spacing={4}>
//           {services.map((s, i) => (
//             <Grid item xs={12} sm={6} md={3} key={i}>
//               <Card
//                 sx={{
//                   p: 3,
//                   textAlign: 'center',
//                   height: '100%',
//                   transition: 'all 0.3s ease',
//                   boxShadow: softShadow,
//                   '&:hover': {
//                     transform: 'translateY(-8px)',
//                     boxShadow: softShadowHover,
//                   },
//                   borderRadius: 4,
//                   background: `linear-gradient(135deg, #fff 0%, ${alpha(
//                     theme.palette.primary.light,
//                     0.03
//                   )} 100%)`,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     mb: 2,
//                     color: 'primary.main',
//                     '& svg': { fontSize: 56 },
//                   }}
//                 >
//                   {s.icon}
//                 </Box>
//                 <Typography variant="h5" gutterBottom fontWeight={600}>
//                   {s.title}
//                 </Typography>
//                 <Typography color="text.secondary" paragraph>
//                   {s.description}
//                 </Typography>
//                 <Button
//                   component={Link}
//                   to={s.link}
//                   endIcon={<ArrowForwardIcon />}
//                   sx={{ mt: 'auto' }}
//                 >
//                   Learn More
//                 </Button>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Industries Served */}
//       <Box
//         sx={{
//           bgcolor: alpha(theme.palette.primary.light, 0.05),
//           py: { xs: 8, md: 12 },
//         }}
//       >
//         <Container maxWidth="lg">
//           <Typography variant="h2" align="center" gutterBottom fontWeight={700}>
//             Industries We Serve
//           </Typography>
//           <Typography
//             variant="h6"
//             align="center"
//             color="text.secondary"
//             sx={{ mb: 4 }}
//           >
//             Domain expertise across multiple sectors
//           </Typography>
//           <Box
//             sx={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               justifyContent: 'center',
//               gap: 2,
//             }}
//           >
//             {industries.map((ind, i) => (
//               <Chip
//                 key={i}
//                 label={ind}
//                 sx={{
//                   fontSize: '1rem',
//                   py: 2.5,
//                   px: 1,
//                   bgcolor: 'white',
//                   boxShadow: softShadow,
//                   transition: 'all 0.2s',
//                   '&:hover': {
//                     bgcolor: theme.palette.primary.main,
//                     color: 'white',
//                     boxShadow: softShadowHover,
//                   },
//                 }}
//               />
//             ))}
//           </Box>
//         </Container>
//       </Box>

//       {/* Development Process */}
//       <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
//         <Typography variant="h2" align="center" gutterBottom fontWeight={700}>
//           Our Development Process
//         </Typography>
//         <Typography
//           variant="h6"
//           align="center"
//           color="text.secondary"
//           sx={{ mb: 6 }}
//         >
//           A proven methodology for successful project delivery
//         </Typography>
//         <Grid container spacing={4}>
//           {process.map((step, i) => (
//             <Grid item xs={12} sm={6} md={4} key={i}>
//               <Card
//                 sx={{
//                   p: 3,
//                   height: '100%',
//                   borderRadius: 3,
//                   transition: '0.2s',
//                   boxShadow: softShadow,
//                   '&:hover': { boxShadow: softShadowHover },
//                 }}
//               >
//                 <Typography
//                   variant="h2"
//                   sx={{
//                     color: 'primary.main',
//                     fontWeight: 800,
//                     mb: 2,
//                     fontSize: '3rem',
//                   }}
//                 >
//                   {step.step}
//                 </Typography>
//                 <Typography variant="h6" gutterBottom fontWeight={600}>
//                   {step.title}
//                 </Typography>
//                 <Typography color="text.secondary">{step.desc}</Typography>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//         <Box sx={{ textAlign: 'center', mt: 5 }}>
//           <Button
//             component={Link}
//             to="/process"
//             variant="outlined"
//             size="large"
//             sx={{ px: 4, py: 1.5 }}
//           >
//             View Detailed Process
//           </Button>
//         </Box>
//       </Container>

//       {/* Technologies */}
//       <Box
//         sx={{
//           bgcolor: alpha(theme.palette.primary.light, 0.05),
//           py: { xs: 8, md: 12 },
//         }}
//       >
//         <Container maxWidth="lg">
//           <Typography variant="h2" align="center" gutterBottom fontWeight={700}>
//             Technologies We Use
//           </Typography>
//           <Typography
//             variant="h6"
//             align="center"
//             color="text.secondary"
//             sx={{ mb: 4 }}
//           >
//             Modern tech stack for cutting-edge solutions
//           </Typography>
//           <Box
//             sx={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               justifyContent: 'center',
//               gap: 1.5,
//             }}
//           >
//             {[
//               'React',
//               'Next.js',
//               'Node.js',
//               'Python',
//               'React Native',
//               'MongoDB',
//               'PostgreSQL',
//               'AWS',
//               'Docker',
//               'Figma',
//               'TensorFlow',
//               'FastAPI',
//             ].map((tech) => (
//               <Chip
//                 key={tech}
//                 label={tech}
//                 variant="outlined"
//                 sx={{
//                   fontSize: '0.9rem',
//                   py: 2.5,
//                   px: 1.5,
//                   bgcolor: 'white',
//                   borderColor: alpha(theme.palette.primary.main, 0.3),
//                   fontWeight: 500,
//                   boxShadow: softShadow,
//                   transition: '0.2s',
//                   '&:hover': { boxShadow: softShadowHover },
//                 }}
//               />
//             ))}
//           </Box>
//         </Container>
//       </Box>

//       {/* Testimonials */}
//       <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
//         <Typography variant="h2" align="center" gutterBottom fontWeight={700}>
//           What Our Clients Say
//         </Typography>
//         <Typography
//           variant="h6"
//           align="center"
//           color="text.secondary"
//           sx={{ mb: 6 }}
//         >
//           Trusted by businesses worldwide
//         </Typography>
//         <Grid container spacing={4}>
//           {testimonials.map((t, i) => (
//             <Grid item xs={12} md={4} key={i}>
//               <Card
//                 sx={{
//                   p: 3,
//                   height: '100%',
//                   borderRadius: 4,
//                   background: `linear-gradient(145deg, #ffffff 0%, ${alpha(
//                     theme.palette.primary.light,
//                     0.02
//                   )} 100%)`,
//                   boxShadow: softShadow,
//                   transition: '0.2s',
//                   '&:hover': { boxShadow: softShadowHover },
//                 }}
//               >
//                 <Rating value={t.rating} readOnly sx={{ mb: 2 }} />
//                 <Typography
//                   variant="body1"
//                   sx={{ mb: 2, fontStyle: 'italic', lineHeight: 1.6 }}
//                 >
//                   "{t.content}"
//                 </Typography>
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   {t.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {t.role}
//                 </Typography>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//         <Box sx={{ textAlign: 'center', mt: 5 }}>
//           <Button
//             component={Link}
//             to="/testimonials"
//             variant="outlined"
//             size="large"
//           >
//             Read More Testimonials
//           </Button>
//         </Box>
//       </Container>

//       {/* FAQ Section */}
//       <Box
//         sx={{
//           bgcolor: alpha(theme.palette.primary.light, 0.05),
//           py: { xs: 8, md: 12 },
//         }}
//       >
//         <Container maxWidth="md">
//           <Typography variant="h2" align="center" gutterBottom fontWeight={700}>
//             Frequently Asked Questions
//           </Typography>
//           <Typography
//             variant="h6"
//             align="center"
//             color="text.secondary"
//             sx={{ mb: 6 }}
//           >
//             Quick answers to common questions
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
//             {[
//               {
//                 q: 'How much does a website cost?',
//                 a: 'Website costs range from $5,000 for a business website to $50,000+ for complex web applications. Contact us for a custom quote.',
//               },
//               {
//                 q: 'How long does development take?',
//                 a: 'Typical timelines: Websites (4-8 weeks), Mobile Apps (3-6 months), Complex Web Apps (4-9 months).',
//               },
//               {
//                 q: 'Do you offer support after launch?',
//                 a: 'Yes, we offer maintenance and support plans to ensure your project runs smoothly post-launch.',
//               },
//             ].map((faq, idx) => (
//               <Card
//                 key={idx}
//                 sx={{
//                   p: 3,
//                   borderRadius: 3,
//                   transition: '0.2s',
//                   boxShadow: softShadow,
//                   '&:hover': { boxShadow: softShadowHover },
//                 }}
//               >
//                 <Typography variant="h6" gutterBottom fontWeight={600}>
//                   {faq.q}
//                 </Typography>
//                 <Typography color="text.secondary">{faq.a}</Typography>
//               </Card>
//             ))}
//           </Box>
//           <Box sx={{ textAlign: 'center', mt: 5 }}>
//             <Button component={Link} to="/faq" variant="outlined" size="large">
//               View All FAQs
//             </Button>
//           </Box>
//         </Container>
//       </Box>

//       {/* Final CTA */}
//       <Box
//         sx={{
//           bgcolor: 'primary.main',
//           color: 'white',
//           py: { xs: 8, md: 12 },
//           textAlign: 'center',
//           position: 'relative',
//           overflow: 'hidden',
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: '-50%',
//             right: '-10%',
//             width: '300px',
//             height: '300px',
//             borderRadius: '50%',
//             background: alpha(theme.palette.common.white, 0.08),
//           },
//           '&::after': {
//             content: '""',
//             position: 'absolute',
//             bottom: '-30%',
//             left: '-5%',
//             width: '200px',
//             height: '200px',
//             borderRadius: '50%',
//             background: alpha(theme.palette.common.white, 0.05),
//           },
//         }}
//       >
//         <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
//           <Typography variant="h3" gutterBottom fontWeight={700}>
//             Ready to Build Your Next Project?
//           </Typography>
//           <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
//             Let's discuss your ideas and turn them into reality.
//           </Typography>
//           <Button
//             component={Link}
//             to="/contact"
//             variant="contained"
//             size="large"
//             sx={{
//               bgcolor: 'white',
//               color: 'primary.main',
//               px: 5,
//               py: 1.5,
//               '&:hover': {
//                 bgcolor: alpha(theme.palette.common.white, 0.95),
//                 transform: 'scale(1.02)',
//               },
//             }}
//           >
//             Get in Touch Today
//           </Button>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Chip,
  Rating,
  useTheme,
  alpha,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PaletteIcon from '@mui/icons-material/Palette';
import AndroidIcon from '@mui/icons-material/Android';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { images } from '../config/images';

// Soft shadow definition (reusable)
const softShadow = '0 8px 20px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.02)';
const softShadowHover = '0 12px 28px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.02)';

const Home = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <CodeIcon sx={{ fontSize: 48 }} />,
      title: 'Web Development',
      description:
        'Custom websites, SaaS apps, e-commerce solutions, and enterprise systems.',
      link: '/services/web-development',
    },
    {
      icon: <SmartphoneIcon sx={{ fontSize: 48 }} />,
      title: 'Mobile Development',
      description:
        'iOS, Android, and cross-platform apps with React Native.',
      link: '/services/mobile-development',
    },
    {
      icon: <PaletteIcon sx={{ fontSize: 48 }} />,
      title: 'UI/UX Design',
      description:
        'User-centered design, wireframes, prototypes, and mockups.',
      link: '/services/ui-ux-design',
    },
    {
      icon: <AndroidIcon sx={{ fontSize: 48 }} />,
      title: 'AI & Automation',
      description:
        'Chatbots, AI assistants, process automation, and computer vision.',
      link: '/services/ai-automation',
    },
  ];

  const industries = [
    'Healthcare',
    'Real Estate',
    'Cleaning Services',
    'Logistics',
    'Education',
    'E-commerce',
    'Finance',
    'Startups',
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      desc: 'Requirements gathering and business analysis',
    },
    {
      step: '02',
      title: 'Planning',
      desc: 'Technical architecture and milestone planning',
    },
    {
      step: '03',
      title: 'Design',
      desc: 'Wireframes and UI/UX design',
    },
    {
      step: '04',
      title: 'Development',
      desc: 'Frontend, backend, and database implementation',
    },
    {
      step: '05',
      title: 'Testing',
      desc: 'QA, security, and performance testing',
    },
    {
      step: '06',
      title: 'Deployment',
      desc: 'Production setup and launch',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content:
        'Nexalura delivered an exceptional web application that exceeded our expectations. Their team was professional, responsive, and truly understood our vision.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, MobileFirst',
      content:
        'The mobile app they built for us has transformed our business. Outstanding quality and ongoing support.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, FinTech Co',
      content:
        'Their AI automation solution saved us countless hours. Highly recommended for any business looking to scale.',
      rating: 5,
    },
  ];

  return (
    <Box>
      {/* Hero Section – updated background, text, and now circular image */}
      <Box
        sx={{
          position: 'relative',
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.20)} 0%, #ffffff 100%)`,
          color: 'text.primary',
          py: { xs: 10, md: 16 },
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 20% 50%, ${alpha(
              theme.palette.primary.light,
              0.15
            )} 0%, transparent 100%)`,
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: alpha(theme.palette.primary.light, 0.08),
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  animation: 'fadeInUp 0.8s ease-out',
                  '@keyframes fadeInUp': {
                    '0%': { opacity: 0, transform: 'translateY(30px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                <Chip
                  label="We build digital excellence"
                  icon={<AutoAwesomeIcon />}
                  sx={{
                    mb: 3,
                    bgcolor: alpha(theme.palette.primary.main, 0.10),
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                    backdropFilter: 'blur(4px)',
                    '& .MuiChip-icon': { color: theme.palette.primary.main },
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.8rem', md: '4rem', lg: '4.5rem' },
                    fontWeight: 800,
                    mb: 2,
                    lineHeight: 1.2,
                    color: theme.palette.primary.main,
                  }}
                >
                  Build Digital Products That Drive Growth
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    color: theme.palette.text.secondary,
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    maxWidth: '90%',
                  }}
                >
                  Custom software, websites, mobile apps, and AI solutions for
                  forward-thinking businesses.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    flexWrap: 'wrap',
                  }}
                >
                  <Button
                    component={Link}
                    to="/request-quote"
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      color: '#fff',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        bgcolor: theme.palette.primary.dark,
                        transform: 'scale(1.02)',
                      },
                      transition: 'all 0.2s',
                    }}
                  >
                    Start Your Project
                  </Button>
                  <Button
                    component={Link}
                    to="/portfolio"
                    variant="outlined"
                    size="large"
                    sx={{
                      color: theme.palette.primary.main,
                      borderColor: theme.palette.primary.main,
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        borderColor: theme.palette.primary.dark,
                        bgcolor: alpha(theme.palette.primary.main, 0.05),
                      },
                    }}
                  >
                    View Our Work
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Circular Hero Image */}
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 450,
                  aspectRatio: '1/1', // forces square shape
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
                  src={images.home}
                  alt="Hero illustration"
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

      {/* Rest of the page remains exactly the same */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          Our Services
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: '80%', mx: 'auto' }}
        >
          Comprehensive digital solutions tailored to your business needs
        </Typography>
        <Grid container spacing={4}>
          {services.map((s, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  boxShadow: softShadow,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: softShadowHover,
                  },
                  borderRadius: 4,
                  background: `linear-gradient(135deg, #fff 0%, ${alpha(
                    theme.palette.primary.light,
                    0.03
                  )} 100%)`,
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    color: 'primary.main',
                    '& svg': { fontSize: 56 },
                  }}
                >
                  {s.icon}
                </Box>
                <Typography variant="h5" gutterBottom fontWeight={600}>
                  {s.title}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  {s.description}
                </Typography>
                <Button
                  component={Link}
                  to={s.link}
                  endIcon={<ArrowForwardIcon />}
                  sx={{ mt: 'auto' }}
                >
                  Learn More
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        sx={{
          bgcolor: alpha(theme.palette.primary.light, 0.05),
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom fontWeight={700}>
            Industries We Serve
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Domain expertise across multiple sectors
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {industries.map((ind, i) => (
              <Chip
                key={i}
                label={ind}
                sx={{
                  fontSize: '1rem',
                  py: 2.5,
                  px: 1,
                  bgcolor: 'white',
                  boxShadow: softShadow,
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: theme.palette.primary.main,
                    color: 'white',
                    boxShadow: softShadowHover,
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h2" align="center" gutterBottom fontWeight={700}>
          Our Development Process
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          A proven methodology for successful project delivery
        </Typography>
        <Grid container spacing={4}>
          {process.map((step, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 3,
                  transition: '0.2s',
                  boxShadow: softShadow,
                  '&:hover': { boxShadow: softShadowHover },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 800,
                    mb: 2,
                    fontSize: '3rem',
                  }}
                >
                  {step.step}
                </Typography>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {step.title}
                </Typography>
                <Typography color="text.secondary">{step.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            component={Link}
            to="/process"
            variant="outlined"
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            View Detailed Process
          </Button>
        </Box>
      </Container>

      <Box
        sx={{
          bgcolor: alpha(theme.palette.primary.light, 0.05),
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom fontWeight={700}>
            Technologies We Use
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Modern tech stack for cutting-edge solutions
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1.5,
            }}
          >
            {[
              'React',
              'Next.js',
              'Node.js',
              'Python',
              'React Native',
              'MongoDB',
              'PostgreSQL',
              'AWS',
              'Docker',
              'Figma',
              'TensorFlow',
              'FastAPI',
            ].map((tech) => (
              <Chip
                key={tech}
                label={tech}
                variant="outlined"
                sx={{
                  fontSize: '0.9rem',
                  py: 2.5,
                  px: 1.5,
                  bgcolor: 'white',
                  borderColor: alpha(theme.palette.primary.main, 0.3),
                  fontWeight: 500,
                  boxShadow: softShadow,
                  transition: '0.2s',
                  '&:hover': { boxShadow: softShadowHover },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h2" align="center" gutterBottom fontWeight={700}>
          What Our Clients Say
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Trusted by businesses worldwide
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((t, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 4,
                  background: `linear-gradient(145deg, #ffffff 0%, ${alpha(
                    theme.palette.primary.light,
                    0.02
                  )} 100%)`,
                  boxShadow: softShadow,
                  transition: '0.2s',
                  '&:hover': { boxShadow: softShadowHover },
                }}
              >
                <Rating value={t.rating} readOnly sx={{ mb: 2 }} />
                <Typography
                  variant="body1"
                  sx={{ mb: 2, fontStyle: 'italic', lineHeight: 1.6 }}
                >
                  "{t.content}"
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  {t.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t.role}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            component={Link}
            to="/testimonials"
            variant="outlined"
            size="large"
          >
            Read More Testimonials
          </Button>
        </Box>
      </Container>

      <Box
        sx={{
          bgcolor: alpha(theme.palette.primary.light, 0.05),
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" align="center" gutterBottom fontWeight={700}>
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Quick answers to common questions
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {[
              {
                q: 'How much does a website cost?',
                a: 'Website costs range from $5,000 for a business website to $50,000+ for complex web applications. Contact us for a custom quote.',
              },
              {
                q: 'How long does development take?',
                a: 'Typical timelines: Websites (4-8 weeks), Mobile Apps (3-6 months), Complex Web Apps (4-9 months).',
              },
              {
                q: 'Do you offer support after launch?',
                a: 'Yes, we offer maintenance and support plans to ensure your project runs smoothly post-launch.',
              },
            ].map((faq, idx) => (
              <Card
                key={idx}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  transition: '0.2s',
                  boxShadow: softShadow,
                  '&:hover': { boxShadow: softShadowHover },
                }}
              >
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {faq.q}
                </Typography>
                <Typography color="text.secondary">{faq.a}</Typography>
              </Card>
            ))}
          </Box>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button component={Link} to="/faq" variant="outlined" size="large">
              View All FAQs
            </Button>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: alpha(theme.palette.common.white, 0.08),
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-30%',
            left: '-5%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: alpha(theme.palette.common.white, 0.05),
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h3" gutterBottom fontWeight={700}>
            Ready to Build Your Next Project?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Let's discuss your ideas and turn them into reality.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 5,
              py: 1.5,
              '&:hover': {
                bgcolor: alpha(theme.palette.common.white, 0.95),
                transform: 'scale(1.02)',
              },
            }}
          >
            Get in Touch Today
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;