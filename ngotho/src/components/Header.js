import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  MenuItem,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Header = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const iconStyle = { color: '#000' };
  const buttonTextStyle = { color: '#000' };

  return (
    <div>
      {/* App Bar for Larger Screens */}
      <AppBar position="static" style={{ backgroundColor: '#E0F4FF' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          {/* Logo or Label in the Center for Larger Screens */}
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: '#000' }}>
            KEZIAH NGOTHO
          </Typography>

          {/* Navigation Buttons with Icons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {!isSmallScreen && (
              <>
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
              </>
            )}

            {/* Toggle Button for Smaller Screens */}
            {isSmallScreen && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
                className="small-screens"
              >
                <MenuIcon />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer for Smaller Screens */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <div>
          <IconButton onClick={handleDrawerClose} style={{ alignSelf: 'flex-end' }}>
            <MenuIcon />
          </IconButton>
          <MenuItem component={Link} to="/" onClick={handleDrawerClose}>
            Home
          </MenuItem>
          <MenuItem component={Link} to="/about" onClick={handleDrawerClose}>
            About
          </MenuItem>
          <MenuItem component={Link} to="/projects" onClick={handleDrawerClose}>
            Projects
          </MenuItem>
          <MenuItem component={Link} to="/contact" onClick={handleDrawerClose}>
            Contact
          </MenuItem>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
