import { makeStyles } from "@material-ui/core";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `cacl(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
  image: {
    marginRight: "10px",
  },
  grow: {
    flexGrow: 1,
  },
}));
