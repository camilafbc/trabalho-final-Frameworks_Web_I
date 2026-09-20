import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#d946ef' },
    secondary: { main: '#f59e0b' },
    background: { default: '#121212', paper: '#1e293b' },
    text: {
      primary: '#ffffff', // Define o texto padrão como branco
      secondary: '#94a3b8',
    },
  },
  typography: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
      root: { textTransform: 'none', padding: '10px 20px' },
      },
    },
  },
});

export default theme;