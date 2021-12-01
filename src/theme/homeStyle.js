import { makeStyles } from "@mui/styles";

const homeStyle = makeStyles((theme) => ({
  headerName: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "center",
    },
  },

  highLight: {
    color: "gold",
  },

  btn: {
    marginLeft: "100px",
    display: "flex",
    alignContent: "center",
    height: "50px",
    marginBottom: "50px",
  },

  navBar: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "50px",
    // position: "fixed",
    // bottom: 0,
    // left: 0,
    // right: 0,
    // position: "relative",
    zIndex: 99,
    // flexWrap: "wrap",

  },

  headerBox: {
    display: "flex",
    
    flexDirection: "column",
    marginTop: "-157px",
    height: "100%",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll"
    // background: "linear-gradient(to right, #fdfbfb 0%, #ebedee 100%)",
  },
}));

export default homeStyle;
