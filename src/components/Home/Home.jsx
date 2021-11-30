import React from "react";
import "@fontsource/roboto/700.css";
import Typography from "@mui/material/Typography";
import homeStyle from "../../theme/homeStyle";


const Home = () => {
  const classes = homeStyle();
  return (
    <div className={classes.headerName}>
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        data-cy="header-1"
        className="headerName"
      >
        Hello, I'm <span className={classes.highLight}>Dorian Buck</span>. 
      </Typography>
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        data-cy="header-2"
        className="headerName"
      >
        I'm a full-stack web developer.
      </Typography>
    </div>
  );
};

export default Home;
