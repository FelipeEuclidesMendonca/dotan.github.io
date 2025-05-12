import { Container, Typography, Box, Grid, Paper, Avatar, Divider, useTheme } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FavoriteIcon from '@mui/icons-material/Favorite';
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

const Sobre = () => {
  const theme = useTheme();

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
              Nossa História
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                maxWidth: '800px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                animation: `${float} 6s ease-in-out 0.5s infinite`
              }}
            >
              Qualidade e sabor em cada detalhe desde 2024
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Missão e Visão */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
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
                },
                '&:hover': {
                  transform: 'translateY(-8px)',
                  transition: 'transform 0.3s ease',
                }
              }}
            >
              <RestaurantIcon sx={{ fontSize: 60, mb: 2, position: 'relative', zIndex: 2 }} />
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Nossa Missão
                </Typography>
                <Typography variant="body1">
                  Fornecer produtos alimentícios de alta qualidade, mantendo o compromisso com a excelência, 
                  sustentabilidade e satisfação dos nossos clientes. Buscamos constantemente inovação e 
                  melhoria em nossos processos para entregar o melhor em cada produto.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                bgcolor: 'secondary.main',
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
                },
                '&:hover': {
                  transform: 'translateY(-8px)',
                  transition: 'transform 0.3s ease',
                }
              }}
            >
              <EmojiFoodBeverageIcon sx={{ fontSize: 60, mb: 2, position: 'relative', zIndex: 2 }} />
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Nossa Visão
                </Typography>
                <Typography variant="body1">
                  Ser referência no mercado de produtos alimentícios, reconhecida pela qualidade, 
                  inovação e compromisso com a sustentabilidade. Almejamos expandir nossa presença 
                  mantendo os valores que nos trouxeram até aqui.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Valores */}
        <Box sx={{ mb: 8, position: 'relative' }}>
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              textAlign: 'center', 
              mb: 4, 
              fontWeight: 'bold',
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
            Nossos Valores
          </Typography>
          <Grid 
            container 
            spacing={3} 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {[
              {
                title: 'Qualidade',
                description: 'Compromisso com a excelência em todos os nossos produtos',
                icon: <LocalDiningIcon sx={{ fontSize: 40 }} />
              },
              {
                title: 'Sustentabilidade',
                description: 'Práticas responsáveis em toda nossa cadeia produtiva',
                icon: <FavoriteIcon sx={{ fontSize: 40 }} />
              },
              {
                title: 'Inovação',
                description: 'Busca constante por melhorias e novas soluções',
                icon: <EmojiFoodBeverageIcon sx={{ fontSize: 40 }} />
              },
              {
                title: 'Compromisso',
                description: 'Dedicação total à satisfação dos nossos clientes',
                icon: <RestaurantIcon sx={{ fontSize: 40 }} />
              }
            ].map((value, index) => (
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
                  elevation={2} 
                  sx={{ 
                    p: 3, 
                    width: '100%',
                    maxWidth: '280px',
                    height: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
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
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: (theme) => theme.shadows[8],
                      '& .icon-box': {
                        transform: 'scale(1.1)',
                        bgcolor: 'primary.main',
                        color: 'white',
                      }
                    }
                  }}
                >
                  <Box 
                    className="icon-box"
                    sx={{ 
                      color: 'primary.main',
                      mb: 2,
                      p: 2,
                      borderRadius: '50%',
                      transition: 'all 0.3s ease',
                      bgcolor: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 80,
                      height: 80,
                      flexShrink: 0
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 'bold', 
                      position: 'relative', 
                      zIndex: 2,
                      flexShrink: 0
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ 
                      position: 'relative', 
                      zIndex: 2,
                      flexGrow: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      px: 1
                    }}
                  >
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* História */}
        <Box sx={{ mb: 8, position: 'relative' }}>
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              textAlign: 'center', 
              mb: 4, 
              fontWeight: 'bold',
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
            Nossa História
          </Typography>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4,
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
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Typography variant="body1" paragraph>
                Fundada em 2024, nossa empresa nasceu do sonho de oferecer produtos alimentícios de alta qualidade 
                para o mercado brasileiro. Começamos com uma pequena linha de produtos e, ao longo dos anos, 
                expandimos nossa atuação para incluir uma variedade de itens que atendem às necessidades 
                dos nossos clientes.
              </Typography>
              <Typography variant="body1" paragraph>
                Hoje, somos reconhecidos pela qualidade dos nossos produtos, que incluem coco ralado, 
                chocolates artesanais, sucos naturais e creme pasteurizado. Nossa dedicação à excelência 
                e à satisfação dos clientes nos permitiu crescer e nos estabelecer como uma empresa 
                confiável no setor alimentício.
              </Typography>
              <Typography variant="body1">
                Continuamos investindo em tecnologia e inovação para melhorar nossos processos e produtos, 
                sempre mantendo o compromisso com a qualidade e a sustentabilidade que nos caracteriza 
                desde o início.
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Diferenciais */}
        <Box>
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              textAlign: 'center', 
              mb: 4, 
              fontWeight: 'bold',
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
            Por que nos escolher?
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                title: 'Qualidade Premium',
                description: 'Seleção rigorosa de ingredientes e processos controlados'
              },
              {
                title: 'Sustentabilidade',
                description: 'Práticas eco-friendly em toda nossa operação'
              },
              {
                title: 'Atendimento Personalizado',
                description: 'Soluções sob medida para cada cliente'
              },
              {
                title: 'Entrega Confiável',
                description: 'Logística eficiente e pontualidade garantida'
              }
            ].map((diferencial, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 3,
                    height: '100%',
                    transition: 'all 0.3s ease',
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
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: (theme) => theme.shadows[8],
                      bgcolor: 'primary.main',
                      color: 'white',
                      '& .description': {
                        color: 'white',
                      }
                    }
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', position: 'relative', zIndex: 2 }}>
                    {diferencial.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    className="description"
                    sx={{ 
                      position: 'relative', 
                      zIndex: 2,
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {diferencial.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Sobre; 