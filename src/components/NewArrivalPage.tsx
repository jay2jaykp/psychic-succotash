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
  const pageTitle = "New Arrivals";

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
              <SimpleImageSlider
                images={each.picturesPath}
                width="500px"
                height="300px"
                showBullets={true}
                showNavs={true}
                slideDuration={0.5}
              />
              {/* {each.picturesPath.map((src) => {
                return (
                  <CardMedia key={src.id} image={src.path} component="img" />
                );
              })} */}
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
                {/* {each.picturesPath.map((pic) => {
                  // console.log(pic);
                  return <img src={pic} alt="pic" />;
                })} */}
              </CardContent>
            </Card>
            // </>
          );
        })}
      </Box>
    </>
  );
};
