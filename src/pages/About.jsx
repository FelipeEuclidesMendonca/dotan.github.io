import { Container, Typography, Box, Grid } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          Sobre Nós
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Conheça mais sobre a Dotan e nossa história
        </Typography>
      </Box>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Nossa História
            </Typography>
            <Typography paragraph>
              A Dotan foi fundada com o objetivo de fornecer soluções inovadoras
              e de alta qualidade para nossos clientes. Ao longo dos anos,
              construímos uma reputação sólida no mercado, baseada em excelência
              e compromisso com nossos clientes.
            </Typography>
            <Typography paragraph>
              Nossa equipe é composta por profissionais altamente qualificados,
              dedicados a desenvolver produtos e serviços que atendam às
              necessidades específicas de cada cliente.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Nossa Missão
            </Typography>
            <Typography paragraph>
              Nossa missão é fornecer produtos e serviços de excelência,
              contribuindo para o sucesso de nossos clientes através de
              soluções inovadoras e personalizadas.
            </Typography>
            <Typography paragraph>
              Acreditamos que o sucesso de nossos clientes é o nosso sucesso,
              e trabalhamos incansavelmente para garantir que cada projeto
              atenda às expectativas e necessidades específicas.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 