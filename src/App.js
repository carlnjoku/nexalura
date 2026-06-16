import React, {Suspense, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ServicesIndex from './pages/ServicesIndex';
import WebDevelopment from './pages/WebDevelopment';
import MobileDevelopment from './pages/MobileDevelopment';
import UiUxDesign from './pages/UiUxDesign';
import AiAutomation from './pages/AiAutomation';
import ApiIntegrations from './pages/ApiIntegrations';
import CloudDevOps from './pages/CloudDevOps';
import Process from './pages/Process';
import Technologies from './pages/Technologies';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Industries from './pages/Industries';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import RequestQuote from './pages/RequestQuote';
import FreeConsultation from './pages/FreeConsultation';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Partners from './pages/Partners';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Pricing from './pages/Pricing';
import StartupMVP from './pages/StartupMVP';
import MaintenanceSupport from './pages/MaintenanceSupport';
import AppStorePublishing from './pages/AppStorePublishing';
import WebsiteRescue from './pages/WebsiteRescue';
import LoadingSpinner from './components/LoadingSpinner';
// import { useLocation } from 'react-router-dom';

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.hash) {
  //     const element = document.getElementById(location.hash.substring(1));
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }, [location]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-development" element={<MobileDevelopment />} />
            <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
            <Route path="/services/ai-automation" element={<AiAutomation />} />
            <Route path="/services/api-integrations" element={<ApiIntegrations />} />
            <Route path="/services/cloud-devops" element={<CloudDevOps />} />
            <Route path="/process" element={<Process />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            <Route path="/free-consultation" element={<FreeConsultation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/startup-mvp" element={<StartupMVP />} />
            <Route path="/maintenance-support" element={<MaintenanceSupport />} />
            <Route path="/app-store-publishing" element={<AppStorePublishing />} />
            <Route path="/website-rescue" element={<WebsiteRescue />} />
          </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
