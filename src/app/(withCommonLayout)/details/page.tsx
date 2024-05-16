import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ActionButton from "@/components/UI/Common/ActionButton";
import { AddToCart } from "@/components/UI/ProductDetails/AddToCart";
import { CommonButton } from "@/components/UI/Common/CommonButton";
import Shipping from "@/components/UI/ProductDetails/Shipping";
import DesAndReview from "@/components/UI/ProductDetails/DesAndReview";
import ImageCard from "@/components/UI/ProductDetails/ImageCard";
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
      <Stack direction="row" gap={2} justifyContent="space-between" alignItems="center" mb={8}>
        <Box>
        
          <ImageCard />
        </Box>
        <Box>
          <Stack
            direction="row"
            gap={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Double Bed & Side Tables</Typography>
            <FavoriteBorderIcon />
          </Stack>
          <Stack direction="row" gap={2} mb={1}>
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
          <Box mt={1}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed
              diam <br />
              nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem ipsum{" "}
              <br />
              dolor sit amet, consectetuer adipi scing elit, sed diam nonummy
              nibh <br />
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
          <Stack
            my={2}
            direction="row"
            gap={2}
            justifyContent="start"
            alignItems="center"
          >
            <ActionButton />
            <AddToCart />
          </Stack>
          <CommonButton title="Buy Now" width={400} />
          <Shipping />
        </Box>
      </Stack>

      <DesAndReview />
    </Stack>
  );
};

export default DetailsPage;
