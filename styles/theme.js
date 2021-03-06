import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: '#54426B',
    },
    background: {
      default: '#FAFAFA',
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontFamily: 'Lobster, cursive',
      fontWeight: '400',
    },
    h2: {
      fontFamily: 'Lobster, cursive',
      fontWeight: '400',
    },
    h3: {
      fontFamily: 'Lobster, cursive',
      fontWeight: '400',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        margin: '.7rem',
      },
      containedPrimary: {
        color: 'white',
      },
    },
  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'secondary',
    },
  },
});

export default theme;
