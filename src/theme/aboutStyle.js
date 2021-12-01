import { makeStyles } from "@mui/styles";

const aboutStyle = makeStyles((theme) => ({
  about: {
    marginBottom: "50px",
    height: "100%",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  aboutContent: {
    marginBottom: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

export default aboutStyle;
