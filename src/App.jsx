import React from 'react'
import Home from '../src/components/Home/Home'
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from '../src/theme/theme'



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
      
    </ThemeProvider>
  )
}

export default App
