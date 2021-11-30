import React from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import homeStyle from "../../theme/homeStyle";
// import { Link } from 'react-scroll'

const Header = () => {
  const classes = homeStyle();
  return (
    <Box className={classes.navBar} data-cy="nav-links">
      <BottomNavigation
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);home
        // }}abouthome
      >
        <BottomNavigationAction data-cy="nav-home" label="Home" />
        <BottomNavigationAction data-cy="nav-about" label="About" />
        <BottomNavigationAction data-cy="nav-projects" label="Projects" />
        <BottomNavigationAction data-cy="nav-contact" label="Contact" />
      </BottomNavigation>
    </Box>
  );
};

export default Header;
