import { Container, Typography, Box, Grid, Button, Card, CardContent, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  // Tentando diferentes formas de carregar a imagem
  const imagePath = new URL('../assets/images/chocolate-background.jpg', import.meta.url).href;
  console.log('Caminho da imagem:', imagePath);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        component="div"
        sx={{
          position: 'relative',
          color: 'white',
          py: { xs: 12, md: 20 }, // Aumentando o padding vertical
          minHeight: { xs: '400px', md: '600px' }, // Altura responsiva
          textAlign: 'center',
          backgroundImage: 'url(/images/chocolate-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Efeito parallax
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'primary.main',
            opacity: 0.75, // Ajustando a opacidade
            zIndex: 1,
          }
        }}
      >
        <Container 
          maxWidth="md" 
          sx={{ 
            position: 'relative', 
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3 // Espaçamento entre elementos
          }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)' // Sombra suave no texto
            }}
          >
            Bem-vindo à Dotan
          </Typography>
          <Typography 
            variant="h5" 
            paragraph
            sx={{
              maxWidth: '800px',
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)' // Sombra suave no texto
            }}
          >
            Uma linha de produtos para atender você
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/produtos"
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              fontWeight: 'medium',
              borderRadius: 2,
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 8px rgba(0,0,0,0.2)',
                transition: 'all 0.2s ease-in-out'
              }
            }}
          >
            Conheça Nossos Produtos
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="/images/qualidade.jpg"
                alt="Qualidade"
                sx={{
                  objectFit: 'cover'
                }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                  Qualidade
                </Typography>
                <Typography>
                  Produtos de alta qualidade para atender às suas necessidades
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="/images/inovacao.jpg"
                alt="Inovação"
                sx={{
                  objectFit: 'cover'
                }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                  Inovação
                </Typography>
                <Typography>
                  Soluções inovadoras para impulsionar seu negócio
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 