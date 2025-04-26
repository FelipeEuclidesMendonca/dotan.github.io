import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32', // Verde escuro para elementos principais
    },
    secondary: {
      main: '#4CAF50', // Verde mais claro para elementos secundários
    },
    background: {
      default: '#E8F5E9', // Verde muito claro para o fundo
      paper: '#FFFFFF', // Branco para cards e elementos de papel
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#E8F5E9',
        },
      },
    },
  },
});

export default theme; 