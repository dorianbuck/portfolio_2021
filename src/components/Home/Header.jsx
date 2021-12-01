import React from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import homeStyle from "../../theme/homeStyle";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import { sections } from "../../components/About/data/sections";

const Header = () => {
  const classes = homeStyle();
  let Link = Scroll.Link;
  let Button = Scroll.Button;
  let Element = Scroll.Element;
  let Events = Scroll.Events;
  let scroll = Scroll.animateScroll;
  let scrollSpy = Scroll.scrollSpy;

  scroller.scrollTo("about", {
    duration: 1500,
    delay: 100,
    smooth: true,
    containerId: "ContainerElementID",
    offset: 50, // Scrolls to element + 50 pixels down the page
  });

  return (
    <Box className={classes.navBar} data-cy="nav-links">
      <BottomNavigation showLabels>
        <BottomNavigationAction data-cy="nav-home" label="Home" />
        <BottomNavigationAction
          // name="about"
          data-cy="nav-about"
          label="About"
        />
        <BottomNavigationAction data-cy="nav-projects" label="Projects" />
        <BottomNavigationAction data-cy="nav-contact" label="Contact" />
      </BottomNavigation>
    </Box>
  );
};

export default Header;
