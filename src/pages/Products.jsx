import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box, Paper, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CakeIcon from '@mui/icons-material/Cake';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import IcecreamIcon from '@mui/icons-material/Icecream';

const products = [
  {
    id: 1,
    title: 'Vita Coco',
    subtitle: 'Coco Ralado',
    description: 'Coco Ralado Integral Congelado.\nProduto 100% Natural de origem.\nPeso Líquido: 500g',
    image: '/images/vita-coco.jpg',
    category: 'Congelados',
    features: ['100% Natural', 'Congelado', '500g'],
    icon: <LocalDiningIcon sx={{ fontSize: 40 }} />
  },
  {
    id: 2,
    title: 'Tartuffi Cacau',
    subtitle: 'Chocolates Artesanais',
    description: 'Chocolates artesanais de alta qualidade, feitos com os melhores ingredientes selecionados.',
    image: '/images/tartuffi.jpeg',
    category: 'Chocolates',
    features: ['Artesanal', 'Alta Qualidade', 'Ingredientes Selecionados'],
    icon: <CakeIcon sx={{ fontSize: 40 }} />
  },
  {
    id: 3,
    title: 'Good Suco',
    subtitle: 'Sucos Naturais',
    description: 'Sucos naturais feitos com frutas selecionadas, sem adição de conservantes.',
    image: '/images/good-suco.jpeg',
    category: 'Bebidas',
    features: ['100% Natural', 'Sem Conservantes', 'Frutas Selecionadas'],
    icon: <LocalDrinkIcon sx={{ fontSize: 40 }} />
  },
  {
    id: 4,
    title: 'Top-Mix',
    subtitle: 'Creme Pasteurizado',
    description: 'Creme pasteurizado de alta qualidade, ideal para diversas aplicações culinárias.',
    image: '/images/top-mix.jpg',
    category: 'Congelados',
    features: ['Pasteurizado', 'Alta Qualidade', 'Versátil'],
    icon: <IcecreamIcon sx={{ fontSize: 40 }} />
  },
];

const Products = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 8 }}>
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
            backgroundImage: 'url(/images/food-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
          }
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', position: 'relative' }}>
            Nossos Produtos
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: '800px', position: 'relative' }}>
            Qualidade e sabor em cada detalhe
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Grid 
          container 
          spacing={3} 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)'
            },
            gap: 3
          }}
        >
          {products.map((product) => (
            <Grid item key={product.id} xs={12} md={6} sx={{ width: '100%', display: 'flex' }}>
              <Card 
                sx={{ 
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) => theme.shadows[8],
                  }
                }}
              >
                <Box sx={{ position: 'relative', height: '200px' }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'primary.main',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    {product.icon}
                  </Box>
                </Box>
                <CardContent sx={{ 
                  flexGrow: 1, 
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography 
                      variant="overline" 
                      color="primary" 
                      gutterBottom
                      sx={{ fontWeight: 'bold' }}
                    >
                      {product.category}
                    </Typography>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 'bold',
                        mb: 0.5,
                        fontSize: '1.25rem'
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      color="text.secondary"
                      gutterBottom
                      sx={{ mb: 1, fontSize: '1rem' }}
                    >
                      {product.subtitle}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {product.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {product.features.map((feature, index) => (
                        <Chip
                          key={index}
                          label={feature}
                          size="small"
                          sx={{ 
                            mr: 1, 
                            mb: 1,
                            bgcolor: 'primary.light',
                            color: 'white',
                            '&:hover': {
                              bgcolor: 'primary.main',
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                  <Button 
                    variant="contained" 
                    color="primary"
                    fullWidth
                    component={RouterLink}
                    to="/contato"
                    sx={{
                      py: 1,
                      fontWeight: 'bold',
                      textTransform: 'none',
                      fontSize: '1rem'
                    }}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action Section */}
        <Paper 
          elevation={3}
          sx={{ 
            mt: 8, 
            p: 4, 
            textAlign: 'center',
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: 2
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Quer conhecer mais sobre nossos produtos?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Nossa equipe está pronta para atender você
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/contato"
            sx={{
              py: 2,
              px: 4,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textTransform: 'none'
            }}
          >
            Fale Conosco
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Products; 