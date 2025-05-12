import { Container, Typography, Box, Grid, Paper, Button, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { keyframes } from '@mui/system';

// Animação para o efeito de flutuação
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Componente de arte decorativa
const DecorativeCircle = ({ size, color, top, left, delay }) => (
  <Box
    sx={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      top,
      left,
      opacity: 0.1,
      animation: `${float} 3s ease-in-out ${delay}s infinite`,
      zIndex: 0,
    }}
  />
);

const Contact = () => {
  const theme = useTheme();
  const whatsappNumber = '+554888336852';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 8, position: 'relative', overflow: 'hidden' }}>
      {/* Elementos decorativos */}
      <DecorativeCircle size={300} color={theme.palette.primary.main} top="10%" left="5%" delay={0} />
      <DecorativeCircle size={200} color={theme.palette.secondary.main} top="60%" left="80%" delay={0.5} />
      <DecorativeCircle size={150} color={theme.palette.primary.light} top="30%" left="70%" delay={1} />
      <DecorativeCircle size={250} color={theme.palette.secondary.light} top="70%" left="10%" delay={1.5} />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          mb: 8,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/images/chocolate-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
          }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                animation: `${float} 6s ease-in-out infinite`
              }}
            >
              Entre em Contato
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                maxWidth: '800px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                animation: `${float} 6s ease-in-out 0.5s infinite`
              }}
            >
              Estamos aqui para atender você da melhor forma possível
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Informações de Contato */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  bgcolor: 'primary.main',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
                    zIndex: 1,
                  }
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', position: 'relative', zIndex: 2 }}>
                  Informações de Contato
                </Typography>
                
                <Box sx={{ mt: 4, position: 'relative', zIndex: 2 }}>
                  {[
                    {
                      icon: <LocationOnIcon sx={{ fontSize: 30 }} />,
                      title: 'Endereço',
                      content: 'Rua Exemplo, 123 - São Paulo, SP'
                    },
                    {
                      icon: <PhoneIcon sx={{ fontSize: 30 }} />,
                      title: 'Telefone',
                      content: '+55 (48) 8833-6852'
                    },
                    {
                      icon: <EmailIcon sx={{ fontSize: 30 }} />,
                      title: 'Email',
                      content: 'contato@empresa.com'
                    },
                    {
                      icon: <AccessTimeIcon sx={{ fontSize: 30 }} />,
                      title: 'Horário de Atendimento',
                      content: 'Segunda a Sexta: 8h às 18h'
                    }
                  ].map((item, index) => (
                    <Box 
                      key={index} 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'flex-start',
                        mb: 3,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateX(10px)'
                        }
                      }}
                    >
                      <Box sx={{ mr: 2, color: 'primary.light' }}>
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2">
                          {item.content}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* WhatsApp Button Section */}
          <Grid item xs={12} md={8}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
                  zIndex: 1,
                }
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 600 }}>
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 3,
                    color: 'primary.main'
                  }}
                >
                  Fale Conosco pelo WhatsApp
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 4,
                    color: 'text.secondary',
                    fontSize: '1.1rem'
                  }}
                >
                  Para um atendimento rápido e personalizado, entre em contato conosco pelo WhatsApp.
                  Nossa equipe está pronta para ajudar você!
                </Typography>

                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  startIcon={<WhatsAppIcon sx={{ fontSize: 28 }} />}
                  href={whatsappUrl}
                  target="_blank"
                  sx={{
                    py: 2,
                    px: 6,
                    fontSize: '1.2rem',
                    borderRadius: 3,
                    textTransform: 'none',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 12px rgba(0,0,0,0.2)',
                    }
                  }}
                >
                  Fale Conosco no WhatsApp
                </Button>

                <Typography 
                  variant="body2" 
                  sx={{ 
                    mt: 2,
                    color: 'text.secondary'
                  }}
                >
                  {whatsappNumber}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 