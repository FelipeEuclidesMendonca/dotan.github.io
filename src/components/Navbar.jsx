import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        py: 1
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
              src="/dotan.github.io/logo-dotan.png" 
              alt="Dotan Logo" 
              style={{ height: '40px' }} 
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              color="primary" 
              component={RouterLink} 
              to="/"
              sx={{ 
                color: '#333',
                fontSize: '1.1rem',
                fontWeight: 500
              }}
            >
              Início
            </Button>
            <Button 
              color="primary" 
              component={RouterLink} 
              to="/produtos"
              sx={{ 
                color: '#333',
                fontSize: '1.1rem',
                fontWeight: 500
              }}
            >
              Produtos
            </Button>
            <Button 
              color="primary" 
              component={RouterLink} 
              to="/sobre"
              sx={{ 
                color: '#333',
                fontSize: '1.1rem',
                fontWeight: 500
              }}
            >
              Sobre
            </Button>
            <Button 
              color="primary" 
              component={RouterLink} 
              to="/contato"
              sx={{ 
                color: '#333',
                fontSize: '1.1rem',
                fontWeight: 500
              }}
            >
              Contato
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 