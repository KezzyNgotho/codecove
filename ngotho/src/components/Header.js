import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Set your breakpoint here

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const iconStyle = { color: '#000' }; // Set the icon color here
  const buttonTextStyle = { color: '#000' }; // Set the button text color here

  return (
    <AppBar position="static" style={{ backgroundColor: '#E0F4FF' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        {/* Logo or Label in the Center for Larger Screens */}
        {!isSmallScreen && (
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: '#000' }}>
            KEZIAH NGOTHO
          </Typography>
        )}

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

          {/* Toggle Button for Smaller Screens */}
          {isSmallScreen && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Menu for Smaller Screens */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/" onClick={handleClose}>
              Home
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleClose}>
              About
            </MenuItem>
            <MenuItem component={Link} to="/projects" onClick={handleClose}>
              Projects
            </MenuItem>
            <MenuItem component={Link} to="/contact" onClick={handleClose}>
              Contact
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
