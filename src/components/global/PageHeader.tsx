import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  title: {
    margin: "10px",
  },
});

export type pageHeaderType = {
  pageTitle: string;
};

export const PageHeader: React.FC<pageHeaderType> = (props) => {
  const classes = useStyle();
  return (
    <>
      <Container>
        <Typography className={classes.title} variant="h4" component="h4">
          {props.pageTitle}
        </Typography>
      </Container>
    </>
  );
};
