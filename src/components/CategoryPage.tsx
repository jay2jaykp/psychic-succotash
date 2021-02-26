import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { PageHeader } from "./global/PageHeader";

const useStyle = makeStyles({
  boxWrapper: {
    flexGrow: 1,
    width: "100%",
  },
});

export const CategoryPage: React.FC<{}> = () => {
  const classes = useStyle();
  return (
    <>
      <PageHeader pageTitle="Category" />
      <Box
        className={classes.boxWrapper}
        flexGrow={1}
        display="flex"
        alignContent="center"
        justifyContent="space-evenly"
      ></Box>
    </>
  );
};
