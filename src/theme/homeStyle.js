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
    // display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "35px",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2000,
  },
}));

export default homeStyle;
