import React from 'react';
import { Container, Typography, IconButton, Grid, Paper, Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useForm } from 'react-hook-form';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';

const Contacts = () => {
  const { handleSubmit } = useForm();

  const handleEnquirySubmit = (data) => {
    // Handle the form submission logic here
    console.log(data);
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      {/* Contacts Section */}
      <Typography variant="h5" style={{ marginBottom: '20px', color: '#2d3e50', marginTop: '40px', textAlign: 'center' }}>
        Contacts
      </Typography>
      <Typography variant="body2" style={{ marginBottom: '20px', textAlign: 'center' }}>
        Feel free to reach out to me through the following channels:
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {/* Add your social icons and links here */}
        <IconButton href="https://github.com/KezzyNgotho/" target="_blank" style={{ color: '#3498db', margin: '0 10px' }}>
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" style={{ color: '#3498db', margin: '0 10px' }}>
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://wa.me/+254716304517" target="_blank" style={{ color: '#3498db', margin: '0 10px' }}>
          <WhatsAppIcon />
        </IconButton>
        <IconButton href="https://www.instagram.com/your-instagram-profile" target="_blank" style={{ color: '#3498db', margin: '0 10px' }}>
          <InstagramIcon />
        </IconButton>
        {/* Add more social icons as needed */}
      </div>

      <Typography variant="body2" style={{ marginBottom: '20px', textAlign: 'center' }}>
        You can also contact me through email or phone:
      </Typography>

      <Typography variant="body2" style={{ textAlign: 'center' }}>
        Email: keziengotho182@gmail.com
      </Typography>
      <Typography variant="body2" style={{ marginBottom: '20px', textAlign: 'center' }}>
        Phone: +254 716304517
      </Typography>

      {/* Feedback Section */}
      <Typography variant="h5" style={{ marginBottom: '20px', color: '#2d3e50', marginTop: '40px', textAlign: 'center' }}>
        Leave Feedback
      </Typography>
      <form onSubmit={handleSubmit(handleEnquirySubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px' }}>
              <Typography variant="h6" style={{ marginBottom: '10px', color: '#3498db' }}>
                Rate your experience
              </Typography>
              <Rating name="feedback" defaultValue={0} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px' }}>
              <Typography variant="h6" style={{ marginBottom: '10px', color: '#3498db' }}>
                Enquiry Form
              </Typography>
              <TextField label="Name" variant="outlined" fullWidth margin="normal" />
              <TextField label="Email" variant="outlined" fullWidth margin="normal" />
              <TextField label="Message" variant="outlined" fullWidth margin="normal" multiline rows={4} />
              <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Submit
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </form>

      {/* Back to Top Button */}
      <IconButton
        onClick={handleBackToTop}
        style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#3498db', color: 'white' }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
      <div style={{ backgroundColor: '#2c3e50', padding: '20px', color: 'white', marginTop: '40px', marginLeft: '-20px', marginRight: '-20px' }}>
        <Grid container spacing={3}>

        <div style={{marginLeft:'80px', marginTop: '20px', borderTop: '1px solid #34495e', paddingTop: '10px', textAlign: 'center',alignContent:'center' }}>
         
         <Typography variant="body2">&copy; 2023 Keziah Ngotho. All rights reserved.</Typography>
       </div>
      </Grid>
      </div>
   
    </Container>
  );
};

export default Contacts;
