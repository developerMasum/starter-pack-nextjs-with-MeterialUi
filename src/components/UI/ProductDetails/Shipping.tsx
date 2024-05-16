import { Box, Stack, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RvHookupIcon from "@mui/icons-material/RvHookup";
const Shipping = () => {
  return (
    <Stack mt={3}>
      <Stack direction="row" gap={2} justifyContent="start" alignItems="center">
        <LocalShippingIcon color="info" />
        <Typography variant="caption">
          Free worldwide shipping on all orders over $100
        </Typography>
      </Stack>
      <Stack direction="row" gap={2} justifyContent="start" alignItems="center">
        <RvHookupIcon color="info" />
        <Typography variant="caption">
          Delivers in: 3-7 Working Days Shipping & Return
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Shipping;
