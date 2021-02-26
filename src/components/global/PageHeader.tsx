import {
  Box,
  Button,
  // Container,
  makeStyles,
  // Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  title: {
    margin: "10px",
    textAlign: "center",
    width: "500px",
  },
});

export type pageHeaderType = {
  pageTitle: string;
};

export const PageHeader: React.FC<pageHeaderType> = (props) => {
  const classes = useStyle();
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box>
          <Button
            className={classes.title}
            color="primary"
            variant="contained"
            size="large"
            disableFocusRipple
            disableRipple
            disableElevation
          >
            <Typography variant="h5" component="h5">
              {props.pageTitle}
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};
