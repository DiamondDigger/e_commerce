import { makeStyles } from "@material-ui/core";

const verticalLineChangeRes = 410;

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  layout: {
    width: "auto",
    marginTop: "5%",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.down(verticalLineChangeRes)]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  title: {
    fontSize: "32px",
    [theme.breakpoints.down(verticalLineChangeRes)]: {
      fontSize: "24px",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBotton: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down(verticalLineChangeRes)]: {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    flexDirection: "row",
    padding: theme.spacing(3, 0, 5),
    [theme.breakpoints.down(verticalLineChangeRes)]: {
      flexDirection: "column",
    },
  },
  label: {
    [theme.breakpoints.down(verticalLineChangeRes)]: {
      paddingBottom: theme.spacing(1),
    },
  },
  verticalLine: {
    [theme.breakpoints.up(verticalLineChangeRes)]: {
      display: "none",
    },
    [theme.breakpoints.down(verticalLineChangeRes)]: {
      display: "box",
      height: "40px",
      borderLeft: "1px groove",
      marginLeft: theme.spacing(8),
      marginBottom: theme.spacing(1),
    },
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
  },
}));
