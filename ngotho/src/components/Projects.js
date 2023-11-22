import React from 'react';
import { Container, Typography, Paper, Grid, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

// Import project images
import project1Image from '../images/bk.jpg';
import project2Image from '../images/bk.jpg';
import project3Image from '../images/bk.jpg';

const projectsData = [
  { image: project1Image, title: 'Project 1', description: 'Description for Project 1' },
  { image: project2Image, title: 'Project 2', description: 'Description for Project 2' },
  { image: project3Image, title: 'Project 3', description: 'Description for Project 3' },
  // Add more projects as needed
];

const Projects = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      {/* Projects Section */}
      <Typography variant="h5" style={{ fontWeight:'bold',marginBottom: '20px', color: '#2d3e50', marginTop: '40px', textAlign: 'center' }}>
      MY PROJECTS
      </Typography>
      <Grid container spacing={3}>
        {projectsData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={2} style={{ padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <Typography variant="h6" style={{ marginTop: '10px', color: '#3498db' }}>{project.title}</Typography>
              <Typography variant="body2" style={{ marginTop: '10px' }}>{project.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Back to Top Button */}
      <IconButton onClick={handleBackToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#3498db', color: 'white' }}>
        <KeyboardArrowUpIcon />
      </IconButton>


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
    </Container>
  );
};

export default Projects;
