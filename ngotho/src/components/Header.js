import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Header = () => {
  const iconStyle = { color: '#000' }; // Set the icon color here
  const buttonTextStyle = { color: '#000' }; // Set the button text color here

  return (
    <AppBar position="static" style={{ backgroundColor: '#E0F4FF' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        {/* Logo or Label on the Leftmost Side */}
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: '#000' }}>
          KEZIAH NGOTHO
        </Typography>

        {/* Navigation Buttons with Icons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            component={Link}
            to="/"
            color="inherit"
            style={{ marginLeft: '20px', ...buttonTextStyle }}
            startIcon={<HomeIcon style={iconStyle} />}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            color="inherit"
            style={{ marginLeft: '20px', ...buttonTextStyle }}
            startIcon={<InfoIcon style={iconStyle} />}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/projects"
            color="inherit"
            style={{ marginLeft: '20px', ...buttonTextStyle }}
            startIcon={<WorkIcon style={iconStyle} />}
          >
            Projects
          </Button>
          <Button
            component={Link}
            to="/contact"
            color="inherit"
            style={{ marginLeft: '20px', ...buttonTextStyle }}
            startIcon={<MailOutlineIcon style={iconStyle} />}
          >
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
