import React from 'react';
import { Container, Typography, Paper, Grid, Box, IconButton } from '@mui/material';
import aboutImage from '../images/OIP_2.jpg'; // Replace with the actual path to your image
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Circle = ({ color, children }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    width="70px"
    height="70px"
    borderRadius="50%"
    bgcolor={color}
    marginBottom="10px"
  >
    {children}
  </Box>
);

const About = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <Grid container spacing={3} style={{ marginTop: '40px' }}>
        {/* About Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} style={{ padding: '20px', borderRadius: '10px' }}>
            <Typography variant="h5" style={{ marginBottom: '20px', color: '#2d3e50' }}>
              About Us
            </Typography>
            <img
              src={aboutImage}
              alt="About Us"
              style={{ width: '180px', height: 'auto', borderRadius: '10px', marginBottom: '20px' }}
            />
            <Typography variant="body1">
              We are a team dedicated to creating innovative solutions and pushing the boundaries of technology.
            </Typography>
          </Paper>
        </Grid>

        {/* Mission, Vision, and Values Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} style={{ padding: '20px', borderRadius: '10px' }}>
            <Typography variant="h5" style={{ marginBottom: '20px', color: '#2d3e50' }}>
              Mission, Vision, and Values
            </Typography>
            <Circle color="#3498db">
              <Typography variant="h6" style={{ color: '#fff' }}>
                Mission
              </Typography>
            </Circle>
            <Typography variant="body1">
              Innovate and inspire through technology, making a positive impact on the world.
            </Typography>

            <Circle color="#e74c3c">
              <Typography variant="h6" style={{ color: '#fff' }}>
                Vision
              </Typography>
            </Circle>
            <Typography variant="body1">
              Be a driving force in technological advancement, shaping a brighter future for everyone.
            </Typography>

            <Circle color="#27ae60">
              <Typography variant="h6" style={{ color: '#fff' }}>
                Values
              </Typography>
            </Circle>
            <Typography variant="body1">
              Excellence, Innovation, Collaboration, and Integrity guide our every endeavor.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <div style={{ backgroundColor: '#2c3e50', padding: '20px', color: 'white', marginTop: '40px', marginLeft: '-20px', marginRight: '-20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" style={{ marginBottom: '20px', color: '#3498db' }}>About Us</Typography>
            <Typography variant="body2">
              I am a passionate and experienced software engineer with a strong background in computer science. I have a proven track record of developing and delivering high-quality software solutions. I am also a cloud engineer with expertise in AWS and Azure. I am looking for a challenging and rewarding opportunity to apply my skills and experience to make a significant impact.
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
         {/*  <Grid item xs={12} md={4}>
            <Typography variant="h6" style={{ marginBottom: '20px', color: '#3498db' }}>Back to Top</Typography>
            <IconButton onClick={handleBackToTop} style={{ color: '#3498db' }}>
              <KeyboardArrowUpIcon />
            </IconButton>
          </Grid> */}
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

export default About;
