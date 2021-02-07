import React from "react";
import { theme } from "./helpers/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { NavigationMenu } from "./components/NavigationMenu.jsx";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationMenu />
    </ThemeProvider>
  );
};

export default App;
