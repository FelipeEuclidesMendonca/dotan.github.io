import { Container, Typography, Box, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  const whatsappNumber = '+554888336852';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;

  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Entre em Contato
        </Typography>
        
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600 }}>
          Estamos aqui para ajudar. Entre em contato conosco via WhatsApp para um atendimento rápido e personalizado.
        </Typography>

        <Button
          variant="contained"
          color="success"
          size="large"
          startIcon={<WhatsAppIcon />}
          href={whatsappUrl}
          target="_blank"
          sx={{
            py: 2,
            px: 4,
            fontSize: '1.2rem',
            borderRadius: 2,
            textTransform: 'none',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 8px rgba(0,0,0,0.2)',
              transition: 'all 0.2s ease-in-out'
            }
          }}
        >
          Fale Conosco no WhatsApp
        </Button>

        <Typography variant="body1" color="text.secondary">
          {whatsappNumber}
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact; 