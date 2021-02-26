import * as React from "react";
import {
  AppBar,
  Button,
  createStyles,
  // Link,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { RouterLink } from "./global/routerLinks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    routerLink: {
      color: "white",
      textDecoration: "none",
    },
    navBtn: {
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
            <RouterLink to="/">ToysUniverse</RouterLink>
          </Typography>
          {/* <Button className={classes.navBtn}>
            <RouterLink to="/category">Category</RouterLink>
          </Button>
          <Button className={classes.navBtn}>
            <RouterLink to="/brand">Brands</RouterLink>
          </Button>
          <Button className={classes.navBtn}>
            <RouterLink to="deals">Deals</RouterLink>
          </Button>
          <Button className={classes.navBtn}>
            <RouterLink to="new">New Arrivals</RouterLink>
          </Button> */}
          <Button variant="contained">Contact</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
