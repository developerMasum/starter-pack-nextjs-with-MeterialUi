import { Box, Divider, Stack, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
const DetailsPage = () => {
  return (
    <Stack mt={5}>
      <Typography variant="caption">
        Product Listing
        <span>
          <KeyboardDoubleArrowRightIcon />
        </span>
        dynamic Product Name
      </Typography>
      <Stack>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">Double Bed & Side Tables</Typography>
          <FavoriteBorderIcon />
        </Stack>
        <Stack direction="row" gap={2} mb={2}>
          <Typography>$54.98</Typography>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Rating
            name="text-feedback"
            value={3.3}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {/* <Box sx={{ ml: 2 }}>{labels[value]}</Box> */}
          <Box>
            <Typography variant="caption"> ( 32 review )</Typography>
          </Box>
        </Stack>
        <Divider />
        <Box>
          <Typography>
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam{" "}
            <br />
            nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem ipsum{" "}
            <br />
            dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh{" "}
            <br />
            euismod tincidunt ut laoreet dolore magn.
          </Typography>
          <Box mt={3}>
          
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default DetailsPage;