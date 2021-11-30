import React, { useState } from "react";
import "@fontsource/roboto/700.css";
import { Typography, Button, Box } from "@mui/material";
import homeStyle from "../../theme/homeStyle";

const Home = () => {
  const classes = homeStyle();
  return (
    <Box className={classes.headerName}>
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        data-cy="header-1"
        className="headerName"
      >
        Aloha, I'm <span className={classes.highLight}>Dorian Buck</span>.
      </Typography>
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        data-cy="header-2"
        className="headerName"
      >
        I'm a full-stack web developer.
      </Typography>
      <Button variant="outlined" data-cy="welcome-btn" className="btn">
        View my work
      </Button>
    </Box>
  );
};

export default Home;
