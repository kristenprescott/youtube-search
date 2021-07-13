import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  AppBar: {
    width: "100vw",
    height: "13vmin",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  searchbarWrapper: {
    // border: "1px solid ghostwhite",
    // width: "calc(50vmin + 100px)",
  },
}));

export default function Navbar({ children }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar className={classes.AppBar} position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Youtube Clone
            </Typography>
            <div className={classes.searchbarWrapper}>{children}</div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
