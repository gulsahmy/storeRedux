import { createTheme, ThemeProvider } from "@mui/material";
import { amber, indigo, pink } from "@mui/material/colors";

const ThemeContextProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: pink[800],
      },
      secondary: {
        main: indigo[700],
      },
      amber: {
        main: amber[700],
        light: amber[400],
        dark: amber[900],
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContextProvider;