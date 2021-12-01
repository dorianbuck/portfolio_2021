import React from "react";
import Home from "../src/components/Home/Home";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "../src/theme/theme";
import About from "../src/components/About/About";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <canvas id="canvas" width="1200" height="650"></canvas>
      <Home />

      <About />
    </ThemeProvider>
  );
};

export default App;
