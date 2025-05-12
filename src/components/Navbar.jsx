import { AppBar, Toolbar, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Início', path: '/' },
    { text: 'Produtos', path: '/produtos' },
    { text: 'Sobre', path: '/sobre' },
    { text: 'Contato', path: '/contato' },
  ];

  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 2,
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <img 
          src="/images/logo-dotan.png" 
          alt="Dotan Logo" 
          style={{ height: '40px' }} 
        />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text} 
            component={RouterLink} 
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              py: 2,
              px: 3,
              '&:hover': {
                bgcolor: 'primary.light',
                '& .MuiListItemText-primary': {
                  color: 'primary.main',
                }
              },
              ...(location.pathname === item.path && {
                bgcolor: 'primary.light',
                '& .MuiListItemText-primary': {
                  color: 'primary.main',
                  fontWeight: 'bold',
                }
              })
            }}
          >
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{
                fontSize: '1.1rem',
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        py: 1
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: { xs: 1, sm: 2 } }}>
          <Box 
            component={RouterLink} 
            to="/" 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none'
            }}
          >
            <img 
              src="/images/logo-dotan.png" 
              alt="Dotan Logo" 
              style={{ height: '40px' }} 
            />
          </Box>
          
          {isMobile ? (
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.light',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item) => (
                <Button 
                  key={item.text}
                  component={RouterLink} 
                  to={item.path}
                  sx={{ 
                    color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                    fontSize: '1.1rem',
                    fontWeight: location.pathname === item.path ? 'bold' : 500,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: location.pathname === item.path ? 'translateX(-50%)' : 'translateX(-50%) scaleX(0)',
                      width: '80%',
                      height: '2px',
                      bgcolor: 'primary.main',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                      bgcolor: 'transparent',
                      '&::after': {
                        transform: 'translateX(-50%) scaleX(1)',
                      }
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            border: 'none',
            boxShadow: '-4px 0 10px rgba(0,0,0,0.1)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 