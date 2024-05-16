import { Stack, Typography } from "@mui/material";

;

const TopTitle = () => {
    return (
      <Stack direction="column" justifyContent="center" alignItems="center" textAlign="center" mb={8}>
        <Typography variant="h5" fontWeight={700}> Top Categories </Typography>
        <Typography variant="caption">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh <br /> euismod tincidunt ut laoreet dolore magna aliquam.
        </Typography>
      </Stack>
    );
};

export default TopTitle;