import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { sections } from "./data/sections";
import aboutStyles from "../../theme/aboutStyle";

const About = () => {
  const classes = aboutStyles();

  let sectionList = sections.map((section) => {
    // debugger
    return (
      <Box  key={section.header}>
        <Typography variant="h4">{section.header}</Typography>
        <Typography className={classes.aboutContent} variant="body1">
          {section.body1}
        </Typography>
        <Typography
          name="about"
          className={classes.aboutContent}
          variant="body1"
        >
          {section.body2}
        </Typography>
      </Box>
    );
  });

  return <Container className={classes.about}>{sectionList}</Container>;
};

export default About;
