import * as React from "react";
import {
  AppBar,
  Button,
  createStyles,
  Link,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    links: {
      margin: "0 50px 0 0",
      color: "white",
      textTransform: "uppercase",
      transitionTimingFunction: "ease-out",
      // TransitionDuration: "2",
      "&:hover": {
        textDecoration: "underline red 2px",
      },
    },
  })
);

export const Navbar: React.FC<{}> = (props) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ToysUniverse
          </Typography>
          <Link
            component="button"
            variant="body2"
            underline="none"
            className={classes.links}
          >
            Category
          </Link>
          <Link
            component="button"
            variant="body2"
            underline="none"
            className={classes.links}
          >
            Brands
          </Link>
          <Link
            component="button"
            variant="body2"
            underline="none"
            className={classes.links}
          >
            Deals
          </Link>
          <Link
            component="button"
            variant="body2"
            underline="none"
            className={classes.links}
          >
            New Arrivals
          </Link>
          <Button variant="contained">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
