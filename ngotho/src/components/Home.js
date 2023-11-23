import React from 'react';
import { Container, Typography, Paper, Grid, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import image1 from '../images/OIP_5.jpg';
import image2 from '../images/OIP_4.jpg';
import image3 from '../images/R.png';
import image4 from '../images/flutter.webp';
import image5 from '../images/R_2.png';
import service4 from '../images/OIP.jpg';
import service3 from '../images/OIP_2.jpg';
import service2 from '../images/OIP_3.jpg';
import service1 from '../images/m.jpg';
import project1 from '../images/bk.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const slideData = [
  {
    image: image1,
    header: 'Machine Learning Expertise',
    description: 'Proficient in machine learning algorithms, including supervised learning, unsupervised learning, and reinforcement learning.',
  },
  {
    image: image2,
    header: 'Blockchain Technology',
    description: 'Utilizing immutable ledger for recording transactions, tracking assets, and building trust in a business network.',
  },
  {
    image: image3,
    header: 'Cross-Platform Development',
    description: 'Using the principle of "Learn once, write anywhere" for building applications that run on mobile, web, desktop, and embedded devices — all from a single codebase.',
  },
  {
    image: image4,
    header: 'Multi-Platform App Development',
    description: 'Expertise in building apps for mobile, web, desktop, and embedded devices — all from a single codebase.',
  },
  {
    image: image5,
    header: 'Cloud technology',
    description: 'Expertise in building apps for mobile, web, desktop, and embedded devices — all from a single codebase.',
  },
];

const servicesData = [
  { image: service1, description: ' expertise in Android development' },
  { image: service2, description: 'AI' },
  { image: service3, description: 'Cloud computing' },
  { image: service4, description: 'Web development' },
];

const projectsData = [
  { image: project1, description: 'mobile banking application where users can make transactions at the comfort of their homes' },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Home = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        style={{ marginBottom: '40px', marginTop: '40px' }}
      >
        {/* Slider */}
        <Slider {...settings}>
          {slideData.map((slide, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '40px', marginTop: '50px' }}>
              <Container style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                <div style={{ flex: 1, marginRight: '10px' }}>
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    style={{ width: '280px', height: '250px', borderRadius: '10px' }}
                  />
                </div>
                <div style={{ flex: 1, marginLeft: '10px', flexDirection: 'column' }}>
                  <Typography variant="h5" style={{ color: '#3498db', marginBottom: '10px' }}>{slide.header}</Typography>
                  <Typography variant="body1">{slide.description}</Typography>
                </div>
              </Container>
            </div>
          ))}
        </Slider>

        {/* Services Section */}
        <Typography
          variant="h5"
          style={{
            marginBottom: '20px',
            color: '#EC8F5E',
            marginTop: '40px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          SERVICES
        </Typography>

        <Grid container spacing={3}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                <img
                  src={service.image}
                  alt={`Service ${index + 1}`}
                  style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }}
                />
                <Typography variant="body1" style={{ marginTop: '10px' }}>{service.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Projects Section */}
        <Typography
          variant="h5"
          style={{
            marginBottom: '20px',
            color: '#0766AD',
            marginTop: '40px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          MY Projects
        </Typography>

        <Grid container spacing={3}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                <img
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }}
                />
                <Typography variant="body1" style={{ marginTop: '10px' }}>{project.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Work With Us Section */}
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', marginTop: '40px', }}>
          <Typography
            variant="h5"
            style={{
              marginBottom: '20px',
              color: '#2B2A4C',
              marginTop: '4px',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            WORK WITH ME!
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '20px', color: '#34495e' }}>
            If you want to make something amazing with us, let's discuss your ideas!
          </Typography>
          <Button component={motion.a} href="/contact" variant="contained" color="primary">
            Contact Us <EmailIcon style={{ marginLeft: '5px' }} />
          </Button>
        </Paper>
      </motion.div>
      {/* footer */}
      <div style={{ backgroundColor: '#2c3e50', padding: '20px', color: 'white', marginTop: '40px', marginLeft: '-20px', marginRight: '-20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" style={{ marginBottom: '20px', color: '#3498db' }}>About Us</Typography>
            <Typography variant="body2">
              I am a passionate and experienced software engineer with a strong background
              in computer science. I have a proven track record of developing and
              delivering high-quality software solutions. I am also
              a cloud engineer with expertise in AWS and Azure. I am looking for a challenging and rewarding opportunity to apply my skills and experience to make a significant impact.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" style={{ marginBottom: '20px', color: '#3498db' }}>Contacts</Typography>
            <Typography variant="body2">
              Email: keziengotho182@gmail.com
            </Typography>
            <Typography variant="body2">
              Phone: +254 716304517
            </Typography>
            <div style={{ marginTop: '10px' }}>
              <IconButton href="https://github.com/KezzyNgotho/" target="_blank" style={{ color: '#3498db' }}>
                <GitHubIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" style={{ color: '#3498db' }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://wa.me/+254716304517" target="_blank" style={{ color: '#3498db' }}>
                <WhatsAppIcon />
              </IconButton>
              <IconButton href="https://www.instagram.com/your-instagram-profile" target="_blank" style={{ color: '#3498db' }}>
                <InstagramIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" style={{ marginBottom: '20px', color: '#3498db' }}>Back to Top</Typography>
            <IconButton onClick={handleBackToTop} style={{ color: '#3498db' }}>
              <KeyboardArrowUpIcon />
            </IconButton>
          </Grid>
        </Grid>
        <div style={{ marginTop: '20px', borderTop: '1px solid #34495e', paddingTop: '10px', textAlign: 'center' }}>
          <Typography variant="body2">&copy; 2023 Keziah Ngotho. All rights reserved.</Typography>
        </div>
      </div>
      {/* Back to Top Button */}
      <IconButton onClick={handleBackToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#3498db', color: 'white' }}>
        <KeyboardArrowUpIcon />
      </IconButton>
    </Container>
  );
};

export default Home;
