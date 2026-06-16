// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Chip,
//   Button,
//   useTheme,
//   alpha,
//   ToggleButton,
//   ToggleButtonGroup,
// } from '@mui/material';
// import {
//   Web,
//   MobileFriendly,
//   ShoppingCart,
//   Psychology,
//   Apps,
// } from '@mui/icons-material';

// // Soft shadows (consistent with Home & Process)
// const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
// const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

// const Portfolio = () => {
//   const theme = useTheme();
//   const [filter, setFilter] = useState('all');

//   const projects = [
//     {
//       id: 1,
//       title: 'HealthSync – Telemedicine Platform',
//       category: 'web',
//       tags: ['React', 'Node.js', 'WebRTC'],
//       image: 'https://placehold.co/600x400/4F46E5/white?text=HealthSync',
//       description:
//         'A HIPAA‑compliant telemedicine app with video consultations, e‑prescriptions, and patient records.',
//       link: '/portfolio/1',
//     },
//     {
//       id: 2,
//       title: 'UrbanRide – Ride‑Sharing App',
//       category: 'mobile',
//       tags: ['React Native', 'Firebase', 'Google Maps'],
//       image: 'https://placehold.co/600x400/8B5CF6/white?text=UrbanRide',
//       description:
//         'Real‑time ride booking, driver tracking, and in‑app payments for iOS & Android.',
//       link: '/portfolio/2',
//     },
//     {
//       id: 3,
//       title: 'StyleCart – AI Fashion E‑commerce',
//       category: 'ecommerce',
//       tags: ['Next.js', 'Stripe', 'TensorFlow'],
//       image: 'https://placehold.co/600x400/4F46E5/white?text=StyleCart',
//       description:
//         'Personalized recommendations using computer vision, plus seamless checkout.',
//       link: '/portfolio/3',
//     },
//     {
//       id: 4,
//       title: 'InsightFlow – Business Analytics',
//       category: 'web',
//       tags: ['FastAPI', 'PostgreSQL', 'D3.js'],
//       image: 'https://placehold.co/600x400/8B5CF6/white?text=InsightFlow',
//       description:
//         'Interactive dashboards and real‑time reporting for enterprise data.',
//       link: '/portfolio/4',
//     },
//     {
//       id: 5,
//       title: 'PetCare – Vet Booking',
//       category: 'mobile',
//       tags: ['Flutter', 'Firebase', 'Google Calendar API'],
//       image: 'https://placehold.co/600x400/4F46E5/white?text=PetCare',
//       description:
//         'Appointment scheduling, reminders, and telemedicine for pet owners.',
//       link: '/portfolio/5',
//     },
//     {
//       id: 6,
//       title: 'SmartRetail – Inventory AI',
//       category: 'ai',
//       tags: ['Python', 'OpenCV', 'FastAPI'],
//       image: 'https://placehold.co/600x400/8B5CF6/white?text=SmartRetail',
//       description:
//         'Shelf‑scanning computer vision to detect low stock and predict demand.',
//       link: '/portfolio/6',
//     },
//   ];

//   const filteredProjects =
//     filter === 'all' ? projects : projects.filter((p) => p.category === filter);

//   const handleFilterChange = (event, newFilter) => {
//     if (newFilter !== null) {
//       setFilter(newFilter);
//     }
//   };

//   return (
//     <Box>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           bgcolor: 'primary.main',
//           color: 'white',
//           py: { xs: 8, md: 10 },
//           textAlign: 'center',
//         }}
//       >
//         <Container maxWidth="lg">
//           <Typography
//             variant="h2"
//             component="h1"
//             gutterBottom
//             sx={{ fontWeight: 800 }}
//           >
//             Our Portfolio
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{ maxWidth: 700, mx: 'auto', opacity: 0.9 }}
//           >
//             Real projects, real impact – see how we turn ideas into powerful
//             digital solutions.
//           </Typography>
//         </Container>
//       </Box>

//       {/* Filter Toggle */}
//       <Container maxWidth="lg" sx={{ mt: 4, mb: 2 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//           <ToggleButtonGroup
//             value={filter}
//             exclusive
//             onChange={handleFilterChange}
//             aria-label="project category"
//             sx={{
//               bgcolor: 'background.paper',
//               boxShadow: softShadow,
//               borderRadius: 8,
//               '& .MuiToggleButton-root': {
//                 px: 4,
//                 py: 1,
//                 borderRadius: 8,
//                 border: 'none',
//                 fontWeight: 500,
//                 '&.Mui-selected': {
//                   bgcolor: 'primary.main',
//                   color: 'white',
//                   '&:hover': { bgcolor: 'primary.dark' },
//                 },
//               },
//             }}
//           >
//             <ToggleButton value="all">
//               <Apps sx={{ mr: 1 }} /> All
//             </ToggleButton>
//             <ToggleButton value="web">
//               <Web sx={{ mr: 1 }} /> Web
//             </ToggleButton>
//             <ToggleButton value="mobile">
//               <MobileFriendly sx={{ mr: 1 }} /> Mobile
//             </ToggleButton>
//             <ToggleButton value="ecommerce">
//               <ShoppingCart sx={{ mr: 1 }} /> E‑commerce
//             </ToggleButton>
//             <ToggleButton value="ai">
//               <Psychology sx={{ mr: 1 }} /> AI
//             </ToggleButton>
//           </ToggleButtonGroup>
//         </Box>
//       </Container>

//       {/* Projects Grid */}
//       <Container maxWidth="lg" sx={{ py: 6 }}>
//         <Grid container spacing={4}>
//           {filteredProjects.map((project) => (
//             <Grid item xs={12} sm={6} md={4} key={project.id}>
//               <Card
//                 sx={{
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   transition: 'all 0.3s',
//                   boxShadow: softShadow,
//                   '&:hover': {
//                     transform: 'translateY(-6px)',
//                     boxShadow: softShadowHover,
//                   },
//                   borderRadius: 4,
//                   overflow: 'hidden',
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="220"
//                   image={project.image}
//                   alt={project.title}
//                   sx={{ objectFit: 'cover' }}
//                 />
//                 <CardContent sx={{ flexGrow: 1, p: 3 }}>
//                   <Typography variant="h6" gutterBottom fontWeight={700}>
//                     {project.title}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{ mb: 2 }}
//                   >
//                     {project.description}
//                   </Typography>
//                   <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
//                     {project.tags.map((tag) => (
//                       <Chip
//                         key={tag}
//                         label={tag}
//                         size="small"
//                         sx={{
//                           bgcolor: alpha(theme.palette.primary.main, 0.08),
//                           color: 'primary.main',
//                           fontWeight: 500,
//                         }}
//                       />
//                     ))}
//                   </Box>
//                   <Button
//                     component={Link}
//                     to={project.link}
//                     variant="outlined"
//                     color="primary"
//                     fullWidth
//                     sx={{ mt: 'auto', borderRadius: 2 }}
//                   >
//                     View Case Study
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         {filteredProjects.length === 0 && (
//           <Box textAlign="center" py={8}>
//             <Typography variant="h6" color="text.secondary">
//               No projects found in this category.
//             </Typography>
//           </Box>
//         )}
//       </Container>

//       {/* Call to Action */}
//       <Box
//         sx={{
//           bgcolor: alpha(theme.palette.secondary.light, 0.1),
//           py: 8,
//           textAlign: 'center',
//         }}
//       >
//         <Container maxWidth="md">
//           <Typography variant="h4" gutterBottom fontWeight={700}>
//             Have a project in mind?
//           </Typography>
//           <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
//             Let’s build something great together.
//           </Typography>
//           <Button
//             component={Link}
//             to="/contact"
//             variant="contained"
//             size="large"
//             sx={{ px: 5, py: 1.5 }}
//           >
//             Start a Conversation
//           </Button>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Portfolio;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
  useTheme,
  alpha,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import {
  Web,
  MobileFriendly,
  ShoppingCart,
  Psychology,
  Apps,
} from '@mui/icons-material';
import { images } from '../config/images';

const softShadow = '0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)';
const softShadowHover = '0 12px 28px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.02)';

const Portfolio = () => {
  const theme = useTheme();
  const [filter, setFilter] = useState('all');

  // Updated projects array with all 6 projects (including the 4 new ones)
  const projects = [
    // {
    //   id: 1,
    //   title: 'HealthSync – Telemedicine Platform',
    //   category: 'web',
    //   tags: ['React', 'Node.js', 'WebRTC'],
    //   image: '/images/case-studies/healthsync-hero.jpg',
    //   description:
    //     'A HIPAA‑compliant telemedicine app with video consultations, e‑prescriptions, and patient records.',
    //   link: '/portfolio/1',
    // },
    // {
    //   id: 2,
    //   title: 'UrbanRide – Ride‑Sharing App',
    //   category: 'mobile',
    //   tags: ['React Native', 'Firebase', 'Google Maps'],
    //   image: '/images/case-studies/urbanride-hero.jpg',
    //   description:
    //     'Real‑time ride booking, driver tracking, and in‑app payments for iOS & Android.',
    //   link: '/portfolio/2',
    // },
    {
      id: 1,
      title: 'Freshsweeper – Rental Cleaning Coordination',
      category: 'web', // (web dashboard + mobile app for cleaners)
      tags: ['React Native', 'Next.js', 'Node.js', 'PostgreSQL'],
      image: images.fresh1,
      description:
        'Automated cleaning scheduling and management for short‑term rental properties.',
      link: '/portfolio/1',
    },
    {
        id: 2,
        title: 'Blissful Sojourn – Luxury Rental Marketplace',
        category: 'web',
        tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe Connect'],
        image: images.bliss_3,
        description:
          'Direct‑booking platform for luxury short‑term rentals with dynamic pricing and PMS.',
        link: '/portfolio/2',
      },
    {
      id: 3,
      title: 'SoShare – Social Event Sharing',
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'Cloud Functions'],
      image: '/images/case-studies/eventconnect-hero.jpg',
      description:
        'Live event feeds, attendee networking, and real‑time updates for conferences and meetups.',
      link: '/portfolio/3',
    },
    {
      id: 4,
      title: 'Care & Craddle – Newborn Care Platform',
      category: 'web',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Elasticsearch'],
      image: images.cc,
      description:
        'Expert articles, symptom checker, and newborn logs for new parents.',
      link: '/portfolio/4',
    },
   
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 10 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 800 }}
          >
            Our Portfolio
          </Typography>
          <Typography
            variant="h6"
            sx={{ maxWidth: 700, mx: 'auto', opacity: 0.9 }}
          >
            Real projects, real impact – see how we turn ideas into powerful
            digital solutions.
          </Typography>
        </Container>
      </Box>

      {/* Filter Toggle */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={handleFilterChange}
            aria-label="project category"
            sx={{
              bgcolor: 'background.paper',
              boxShadow: softShadow,
              borderRadius: 8,
              '& .MuiToggleButton-root': {
                px: 4,
                py: 1,
                borderRadius: 8,
                border: 'none',
                fontWeight: 500,
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': { bgcolor: 'primary.dark' },
                },
              },
            }}
          >
            <ToggleButton value="all">
              <Apps sx={{ mr: 1 }} /> All
            </ToggleButton>
            <ToggleButton value="web">
              <Web sx={{ mr: 1 }} /> Web
            </ToggleButton>
            <ToggleButton value="mobile">
              <MobileFriendly sx={{ mr: 1 }} /> Mobile
            </ToggleButton>
            <ToggleButton value="ecommerce">
              <ShoppingCart sx={{ mr: 1 }} /> E‑commerce
            </ToggleButton>
            <ToggleButton value="ai">
              <Psychology sx={{ mr: 1 }} /> AI
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Container>

      {/* Projects Grid */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  boxShadow: softShadow,
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: softShadowHover,
                  },
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={project.image || '/images/placeholder-project.jpg'}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h6" gutterBottom fontWeight={700}>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: alpha(theme.palette.primary.main, 0.08),
                          color: 'primary.main',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                  <Button
                    component={Link}
                    to={project.link}
                    variant="outlined"
                    color="primary"
                    fullWidth
                    sx={{ mt: 'auto', borderRadius: 2 }}
                  >
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredProjects.length === 0 && (
          <Box textAlign="center" py={8}>
            <Typography variant="h6" color="text.secondary">
              No projects found in this category.
            </Typography>
          </Box>
        )}
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: alpha(theme.palette.secondary.light, 0.1),
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom fontWeight={700}>
            Have a project in mind?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Let’s build something great together.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ px: 5, py: 1.5 }}
          >
            Start a Conversation
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Portfolio;