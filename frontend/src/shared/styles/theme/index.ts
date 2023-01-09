import {ThemeProvider, Button, createTheme} from '@rneui/themed';

const theme = createTheme({
  components: {
    Button: {
      buttonStyle: {
        backgroundColor: 'rgba(111, 202, 186, 1)',
        borderRadius: 15,
      },
    },
  },
});

export default theme;
