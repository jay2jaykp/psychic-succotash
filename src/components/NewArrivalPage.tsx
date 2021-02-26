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
import SimpleImageSlider from "react-simple-image-slider";
import { PageHeader } from "./global/PageHeader";

const useStyle = makeStyles({
  boxWrapper: {
    flexGrow: 1,
    width: "100%",
  },
  artclCard: {
    width: "500px",
    margin: "10px",
  },
  pageTitle: {
    padding: "10px",
  },
});

export const NewArrivalPage: React.FC<{}> = () => {
  const classes = useStyle();
  const pageTitle = "New Arrivals";

  return (
    <>
      <PageHeader pageTitle={pageTitle} />
      <Box
        className={classes.boxWrapper}
        flexGrow={1}
        flexWrap="wrap"
        display="flex"
        alignContent="center"
        justifyContent="space-evenly"
      >
        {articleData.map((each) => {
          return (
            // <>
            <Card className={classes.artclCard} key={each.id} elevation={2}>
              <SimpleImageSlider
                images={each.picturesPath}
                width="500px"
                height="400px"
                showBullets={true}
                showNavs={true}
                slideDuration={0.5}
                navStyle={2}
              />
              <CardContent>
                <Typography color="textSecondary">
                  {each.category.join(" | ")}
                </Typography>
                <Typography variant="h5" component="h2">
                  {each.name}
                </Typography>
                <Typography variant="h6">Brand: {each.brand}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={each.link}
                  target="_"
                >
                  Buy
                </Button>
              </CardContent>
            </Card>
            // </>
          );
        })}
      </Box>
    </>
  );
};
