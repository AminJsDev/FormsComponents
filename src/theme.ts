import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
    primary: {
      main: '#E5C26E',
    },
    background: {
      default: '#0B1A3A',
      paper: '#0B1A3A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#C7C7C7',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: 'Vazirmatn, Roboto, Arial, sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            '& fieldset': {
              borderColor: 'rgba(229, 194, 110, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: '#E5C26E',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#E5C26E',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
