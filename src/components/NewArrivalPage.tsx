import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { articleData } from "../data/articles";

const useStyle = makeStyles({
  boxWrapper: {
    flexGrow: 1,
    width: "100%",
  },
  artclCard: {
    width: "500px",
  },
  pageTitle: {
    padding: "10px",
  },
});

export const NewArrivalPage: React.FC<{}> = () => {
  const classes = useStyle();
  const pageTitle = "New Arrival";

  return (
    <>
      <Typography className={classes.pageTitle} variant="h4" align="center">
        ~~ {pageTitle} ~~
      </Typography>
      <Box
        className={classes.boxWrapper}
        flexGrow={1}
        display="flex"
        alignContent="center"
        justifyContent="space-evenly"
      >
        {articleData.map((each) => {
          return (
            // <>
            <Card className={classes.artclCard} key={each.id}>
              <CardContent>
                <Typography color="textSecondary">
                  {each.category.join(" | ")}
                </Typography>
                <Typography variant="h5" component="h2">
                  {each.name}
                </Typography>
                <Typography variant="h6">Brand: {each.brand}</Typography>
                <Button variant="contained" color="primary" href={each.link}>
                  Buy
                </Button>
                {each.picturesPath.forEach((pic) => {
                  return <img key={pic} src={pic} alt="pic" />;
                })}
              </CardContent>
            </Card>
            // </>
          );
        })}
      </Box>
    </>
  );
};
