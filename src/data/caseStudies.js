// export const caseStudies = [
//     {
//       id: 1,
//       title: 'HealthSync – Telemedicine Platform',
//       category: 'Web',
//       heroImage: '/images/case-studies/healthsync-hero.jpg',
//       challenge: 'Healthcare providers needed a HIPAA‑compliant platform for remote patient consultations. Existing solutions were clunky, insecure, and lacked integrated e‑prescription and billing.',
//       solution: 'We built a secure, real‑time telemedicine app with WebRTC video, appointment scheduling, e‑prescription, and Stripe integration. The platform supports multi‑doctor practices and patient records.',
//       technologies: ['React', 'Node.js', 'WebRTC', 'PostgreSQL', 'Stripe'],
//       results: 'Reduced patient wait times by 60%, increased provider capacity by 40%, and enabled 10,000+ virtual consultations in the first 3 months.',
//       timeline: '16 weeks',
//       screenshots: [
//         '/images/case-studies/healthsync-1.jpg',
//         '/images/case-studies/healthsync-2.jpg',
//         '/images/case-studies/healthsync-3.jpg',
//       ],
//       client: 'HealthSync Inc.',
//       industry: 'Healthcare',
//     },
//     {
//       id: 2,
//       title: 'UrbanRide – Ride‑Sharing App',
//       category: 'Mobile',
//       heroImage: '/images/case-studies/urbanride-hero.jpg',
//       challenge: 'A local startup needed a ride‑sharing app to compete with Uber/Lyft, with real‑time tracking, driver management, and in‑app payments.',
//       solution: 'We built a cross‑platform React Native app with Google Maps integration, real‑time driver location, fare calculation, and secure Stripe payments. Admin dashboard for fleet management.',
//       technologies: ['React Native', 'Firebase', 'Google Maps API', 'Stripe'],
//       results: '2,500+ active users in the first month, 4.8 star rating on both stores, and 95% driver retention.',
//       timeline: '20 weeks',
//       screenshots: [
//         '/images/case-studies/urbanride-1.jpg',
//         '/images/case-studies/urbanride-2.jpg',
//       ],
//       client: 'UrbanRide Inc.',
//       industry: 'Transportation',
//     },
//     // Add more case studies...
//   ];

import { images } from "../config/images";



export const caseStudies = [
    // ==============================
    // EXISTING CASE STUDIES (KEEP)
    // ==============================
    // {
    //   id: 1,
    //   title: 'HealthSync – Telemedicine Platform',
    //   category: 'Web',
    //   heroImage: '/images/case-studies/healthsync-hero.jpg',
    //   challenge:
    //     'Healthcare providers needed a HIPAA‑compliant platform for remote patient consultations. Existing solutions were clunky, insecure, and lacked integrated e‑prescription and billing.',
    //   solution:
    //     'We built a secure, real‑time telemedicine app with WebRTC video, appointment scheduling, e‑prescription, and Stripe integration. The platform supports multi‑doctor practices and patient records.',
    //   technologies: ['React', 'Node.js', 'WebRTC', 'PostgreSQL', 'Stripe'],
    //   results:
    //     'Reduced patient wait times by 60%, increased provider capacity by 40%, and enabled 10,000+ virtual consultations in the first 3 months.',
    //   timeline: '16 weeks',
    //   screenshots: [
    //     '/images/case-studies/healthsync-1.jpg',
    //     '/images/case-studies/healthsync-2.jpg',
    //   ],
    //   client: 'HealthSync Inc.',
    //   industry: 'Healthcare',
    // },
    // {
    //   id: 2,
    //   title: 'UrbanRide – Ride‑Sharing App',
    //   category: 'Mobile',
    //   heroImage: '/images/case-studies/urbanride-hero.jpg',
    //   challenge:
    //     'A local startup needed a ride‑sharing app to compete with Uber/Lyft, with real‑time tracking, driver management, and in‑app payments.',
    //   solution:
    //     'We built a cross‑platform React Native app with Google Maps integration, real‑time driver location, fare calculation, and secure Stripe payments. Admin dashboard for fleet management.',
    //   technologies: ['React Native', 'Firebase', 'Google Maps API', 'Stripe'],
    //   results:
    //     '2,500+ active users in the first month, 4.8 star rating on both stores, and 95% driver retention.',
    //   timeline: '20 weeks',
    //   screenshots: [
    //     '/images/case-studies/urbanride-1.jpg',
    //     '/images/case-studies/urbanride-2.jpg',
    //   ],
    //   client: 'UrbanRide Inc.',
    //   industry: 'Transportation',
    // },
  
    // ==============================
    // NEW CASE STUDY 1: Short‑term rental cleaning service (Mobile + Web)
    // ==============================
    {
      id: 1,
      title: 'Freshsweeper – Short‑Term Rental Cleaning Coordination',
      category: 'Web + Mobile',
      heroImage: images.fresh2,
      challenge:
        'Property managers of short‑term rentals struggled to coordinate cleaning between guest check‑outs and check‑ins. Manual scheduling, missed cleanings, and communication gaps led to late check‑ins and negative reviews.',
      solution:
        'We developed a dual‑platform solution: a React Native mobile app for cleaners to accept jobs, check in/out, and upload photos, and a Next.js web dashboard for property managers to automate scheduling, track cleaning status, and manage inventory. Integrated with Airbnb/Booking.com APIs for automatic trigger of cleaning tasks upon new bookings.',
      technologies: ['React Native', 'Next.js', 'Node.js', 'PostgreSQL', 'Twilio', 'Airbnb API'],
      results:
        'Reduced cleaning turnaround time by 45%, eliminated double‑bookings, and boosted property ratings from 4.2 to 4.8 stars. Over 1,200 cleanings successfully coordinated in the first 2 months.',
      timeline: '18 weeks',
      screenshots: [
        images.fresh1,
        images.fresh2,
        images.fresh3,
    ],
      client: 'Freshsweeper',
      industry: 'Hospitality / Real Estate',
    },


  
    // ==============================
    // NEW CASE STUDY 2: Social Share Event (Mobile)
    // ==============================

    {
        id: 2,
        title: 'Blissful Sojourn – Luxury Short‑Term Rental Marketplace',
        category: 'Web',
        heroImage: images.bliss_1,
        challenge:
          'A boutique hospitality brand wanted a direct‑booking website to compete with OTAs (Online Travel Agencies) while showcasing their curated luxury properties. They needed a seamless booking engine, property management dashboard, and a dynamic pricing tool.',
        solution:
          'We developed a custom Next.js website with a React admin dashboard. Integrated a booking engine with availability calendars, dynamic pricing based on demand, and secure payment via Stripe Connect. Built a property management system (PMS) for owners to manage reservations, housekeeping, and guest communications. Designed a responsive, immersive UI with high‑quality imagery and virtual tours.',
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe Connect', 'Elasticsearch', 'Google Maps API'],
        results:
          'Direct bookings increased by 80% within 3 months, reducing OTA dependency. Average daily rate (ADR) increased by 15% through dynamic pricing. Property owners reported a 30% reduction in management time.',
        timeline: '24 weeks',
        screenshots: [
            images.bliss_2,
            images.bliss_3
        ],
        client: 'Blissful Sourjorn',
        industry: 'Hospitality / Travel',
      },
    
    
  
    // ==============================
    // NEW CASE STUDY 3: Newborn Care (Web)
    // ==============================
    {
        id: 3,
        title: 'SoShare – Social Event Sharing App',
        category: 'Mobile',
        heroImage: '/images/case-studies/eventconnect-hero.jpg',
        challenge:
          'Event organizers needed a mobile app that allowed attendees to share live updates, photos, and network with each other. Existing event apps lacked real‑time social features and had clunky interfaces.',
        solution:
          'We created a React Native app with real‑time chat, photo/video sharing, event‑specific feeds, and attendee profiles. Integrated with social media login (Google, Facebook) and push notifications for session reminders. Built a scalable backend with Firebase Realtime Database and Cloud Functions.',
        technologies: ['React Native', 'Firebase', 'Cloud Functions', 'Stripe (for ticket upsells)'],
        results:
          'Used by 5+ conferences with over 10,000 total attendees. Achieved 70% daily active user rate during events. Increased ticket upsells by 25% through in‑app promotions.',
        timeline: '14 weeks',
        screenshots: [
            images.fresh1,
            images.fresh2,
            images.fresh3,
        ],
        client: 'SoShare.',
        industry: 'Events / Social',
      },
    
    // ==============================
    // NEW CASE STUDY 4: Hospitality – Short‑term Rental Website (Web)
    // ==============================

    {
        id: 4,
        title: 'Care And Craddle – Newborn Care & Parenting Platform',
        category: 'Web',
        heroImage: images.cc,
        challenge:
          'New parents lacked a single trustworthy source for newborn care guidance, expert advice, and community support. Existing websites were either too clinical or contained conflicting advice.',
        solution:
          'We built a comprehensive web portal with expert‑written articles, video tutorials, and a Q&A forum moderated by pediatric nurses. Integrated a symptom checker (using a decision‑tree model) and a daily newborn log (feedings, diaper changes, sleep). The platform is fully responsive and accessible, with SEO‑optimized content.',
        technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Elasticsearch', 'Stripe (for premium content)'],
        results:
          'Grew to 150,000 monthly unique visitors within 4 months. Achieved #1 Google ranking for several newborn care keywords. 85% of users reported feeling more confident in caring for their newborn.',
        timeline: '22 weeks',
        screenshots: [
            images.cc,
            images.cc4,
            images.cc3,
            images.cc5,
            // images.cc3,
            // images.cc4,
        ],
        client: 'Care And Craddle',
        industry: 'Health & Parenting',
      },
    
    // {
    //   id: 6,
    //   title: 'Blissful Sojourn – Luxury Short‑Term Rental Marketplace',
    //   category: 'Web',
    //   heroImage: '/images/case-studies/stayvista-hero.jpg',
    //   challenge:
    //     'A boutique hospitality brand wanted a direct‑booking website to compete with OTAs (Online Travel Agencies) while showcasing their curated luxury properties. They needed a seamless booking engine, property management dashboard, and a dynamic pricing tool.',
    //   solution:
    //     'We developed a custom Next.js website with a React admin dashboard. Integrated a booking engine with availability calendars, dynamic pricing based on demand, and secure payment via Stripe Connect. Built a property management system (PMS) for owners to manage reservations, housekeeping, and guest communications. Designed a responsive, immersive UI with high‑quality imagery and virtual tours.',
    //   technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe Connect', 'Elasticsearch', 'Google Maps API'],
    //   results:
    //     'Direct bookings increased by 80% within 3 months, reducing OTA dependency. Average daily rate (ADR) increased by 15% through dynamic pricing. Property owners reported a 30% reduction in management time.',
    //   timeline: '24 weeks',
    //   screenshots: [
    //     '/images/case-studies/stayvista-1.jpg',
    //     '/images/case-studies/stayvista-2.jpg',
    //   ],
    //   client: 'Blissful Sourjorn',
    //   industry: 'Hospitality / Travel',
    // },
  ];