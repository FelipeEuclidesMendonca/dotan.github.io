import { Container, Typography, Box, Grid, Paper, Button, useTheme } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CakeIcon from '@mui/icons-material/Cake';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import IcecreamIcon from '@mui/icons-material/Icecream';
import { keyframes } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';

// Animação para o efeito de flutuação
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Animação para o efeito de rotação
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Componente de arte decorativa
const DecorativeCircle = ({ size, color, top, left, delay, rotate = false }) => (
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
      animation: `${rotate ? rotate : float} 3s ease-in-out ${delay}s infinite`,
      zIndex: 0,
    }}
  />
);

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Elementos decorativos */}
      <DecorativeCircle size={300} color={theme.palette.primary.main} top="10%" left="5%" delay={0} />
      <DecorativeCircle size={200} color={theme.palette.secondary.main} top="60%" left="80%" delay={0.5} />
      <DecorativeCircle size={150} color={theme.palette.primary.light} top="30%" left="70%" delay={1} />
      <DecorativeCircle size={250} color={theme.palette.secondary.light} top="70%" left="10%" delay={1.5} rotate />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
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
            opacity: 0.7,
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)',
            zIndex: 1,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                <Typography 
                  variant="h1" 
                  component="h1" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold',
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    animation: `${float} 6s ease-in-out infinite`
                  }}
                >
                  Qualidade e Sabor em Cada Detalhe
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 4,
                    animation: `${float} 6s ease-in-out 0.5s infinite`
                  }}
                >
                  Produtos alimentícios de alta qualidade para o seu negócio
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  component={RouterLink}
                  to="/produtos"
                  sx={{
                    py: 2,
                    px: 4,
                    fontSize: '1.2rem',
                    borderRadius: 2,
                    textTransform: 'none',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 12px rgba(0,0,0,0.2)',
                    }
                  }}
                >
                  Conheça Nossos Produtos
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Produtos em Destaque */}
      <Box id="produtos" sx={{ py: 8, position: 'relative' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              mb: 6,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 4,
                bgcolor: 'primary.main',
                borderRadius: 2,
              }
            }}
          >
            Nossos Produtos
          </Typography>

          <Grid container spacing={4} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              {
                title: 'Vita Coco',
                description: 'Coco ralado de alta qualidade',
                image: '/images/vita-coco.jpg',
                icon: <LocalDiningIcon sx={{ fontSize: 40 }} />
              },
              {
                title: 'Tartuffi Cacau',
                description: 'Chocolates artesanais',
                image: '/images/tartuffi.jpeg',
                icon: <CakeIcon sx={{ fontSize: 40 }} />
              },
              {
                title: 'Good Suco',
                description: 'Sucos naturais',
                image: '/images/good-suco.jpeg',
                icon: <LocalDrinkIcon sx={{ fontSize: 40 }} />
              },
              {
                title: 'Top Mix',
                description: 'Creme pasteurizado',
                image: '/images/top-mix.jpg',
                icon: <IcecreamIcon sx={{ fontSize: 40 }} />
              }
            ].map((product, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={3} 
                key={index} 
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  width: { xs: '100%', sm: '50%', md: '25%' }
                }}
              >
                <Paper 
                  elevation={3} 
                  sx={{ 
                    width: '100%',
                    maxWidth: '280px',
                    height: '100%',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: (theme) => theme.shadows[8],
                      '& .product-image': {
                        transform: 'scale(1.1)',
                      }
                    }
                  }}
                >
                  <Box 
                    className="product-image"
                    sx={{ 
                      height: 200,
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 3, textAlign: 'center' }}>
                    <Box 
                      sx={{ 
                        color: 'primary.main',
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                      {product.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Seção de Diferenciais */}
      <Box 
        sx={{ 
          py: 8, 
          bgcolor: 'primary.main',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              mb: 6,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 4,
                bgcolor: 'white',
                borderRadius: 2,
              }
            }}
          >
            Por que nos escolher?
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: 'Qualidade Premium',
                description: 'Seleção rigorosa de ingredientes e processos controlados'
              },
              {
                title: 'Entrega Confiável',
                description: 'Logística eficiente e pontualidade garantida'
              },
              {
                title: 'Atendimento Personalizado',
                description: 'Soluções sob medida para cada cliente'
              }
            ].map((diferencial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 4,
                    height: '100%',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      bgcolor: 'rgba(255,255,255,0.2)',
                    }
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {diferencial.title}
                  </Typography>
                  <Typography variant="body1">
                    {diferencial.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 