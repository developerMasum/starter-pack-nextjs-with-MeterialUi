import { Box, Button, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import FlashSellSearch from "./components/FlashSellSearch";

const FlashSellPage = () => {
  return (
    <Stack mt={3}>
      <Box>
        <Typography mb={5} variant="h5">
          Flash Sale
        </Typography>
        <FlashSellSearch />
        <Stack direction="column" mb={2}>
          <Typography variant="caption">Showing 1–12 of 24 item(s)</Typography>
          <Typography mb={5} variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default FlashSellPage;
