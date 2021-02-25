import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    routerLink: {
      color: "white",
      textDecoration: "none",
    },
  })
);

type linkProp = {
  to: string;
};

export const RouterLink: React.FC<linkProp> = (props) => {
  const classes = useStyles();
  return (
    <>
      <Link className={classes.routerLink} to={props.to}>
        {props.children}
      </Link>
    </>
  );
};
