// theme.ts
import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins"; // Defaults to 400 weight
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

const theme = createTheme({
  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Customize as needed
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "13px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            fontSize: "13px",
          },
        },
      },
    },
  },
});

export default theme;
