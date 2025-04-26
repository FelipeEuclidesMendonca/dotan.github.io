import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'Vita Coco\nCoco Ralado',
    description: 'Coco Ralado Integral Congelado.\nProduto 100% Natural de origem.\nPeso Líquido: 500g',
    image: '/vita-coco.jpg',
    category: 'Congelados'
  },
  {
    id: 2,
    title: 'Tartuffi Cacau\nChocolates Artesanais',
    description: 'Descrição linha 1\nDescrição linha 2\nDescrição linha 3',
    image: '/tartuffi.jpeg',
    category: 'Chocolates'
  },
  {
    id: 3,
    title: 'Good Suco\nSucos Naturais',
    description: 'Descrição linha 1\nDescrição linha 2\nDescrição linha 3',
    image: '/good-suco.jpeg',
    category: 'Bebidas'
  },
  {
    id: 4,
    title: 'Top-Mix\nCreme Pasteurizado',
    description: 'Descrição linha 1\nDescrição linha 2\nDescrição linha 3',
    image: '/top-mix.jpg',
    category: 'Congelados'
  },
];

const Products = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          Nossos Produtos
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Conheça nossa linha completa de produtos
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
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
                height="300"
                image={product.image}
                alt={product.title}
                sx={{
                  objectFit: 'contain',
                  p: 2,
                  bgcolor: 'white'
                }}
              />
              <CardContent 
                sx={{ 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '250px' // Altura fixa para o conteúdo
                }}
              >
                <Typography 
                  variant="overline" 
                  color="primary" 
                  gutterBottom
                >
                  {product.category}
                </Typography>
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom
                  sx={{
                    whiteSpace: 'pre-line',
                    mb: 2,
                    height: '64px' // Altura fixa para o título
                  }}
                >
                  {product.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    mb: 2,
                    whiteSpace: 'pre-line',
                    flexGrow: 1,
                    height: '80px' // Altura fixa para a descrição
                  }}
                >
                  {product.description}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  fullWidth
                  component={RouterLink}
                  to="/contato"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products; 