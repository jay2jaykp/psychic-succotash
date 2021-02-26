import { Box, Paper, Typography } from "@material-ui/core";
import { NewArrivalPage } from "./NewArrivalPage";

export const HomePage: React.FC<{}> = () => {
  return (
    <>
      <Box textAlign="center" margin={15}>
        <Paper elevation={0} square={true}>
          <Typography variant="h4">Toys Universe</Typography>
          <Typography variant="h5">
            We are India's best wooden Educational toys manufacturer in the
            industry. Today amidst the pandemic, children are unable to go to
            school for study. Kids can learn while playing with educational
            toys. We make learning toys for kids that help them boost their IQ,
            Enhances the development of their senses, Improve concentration, and
            enhance their creativity.
          </Typography>
        </Paper>
      </Box>
      <NewArrivalPage />
    </>
  );
};
