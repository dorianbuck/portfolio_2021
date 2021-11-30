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
}));

export default homeStyle;
