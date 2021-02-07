import { makeStyles } from "@material-ui/core";

const drawerWidth = 400;

export const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    display: "flex",
  },
  logo: {
    marginRight: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  tabasCustom: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: "none",
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down("xs")]: {
      width: `calc(100%)`,
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  listItemCustom: {
    backgroundColor: "#e7e7e7",
  },
  paragraphClose: {
    marginBottom: 0,
    fontSize: "0.9rem",
  },
  listItem: {
    textAlign: "end",
  },
  paragraphMenu: {
    marginRight: theme.spacing(1),
  },
}));
