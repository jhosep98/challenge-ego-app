import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
        },
      },
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#d0021b",
    },
  },
});
