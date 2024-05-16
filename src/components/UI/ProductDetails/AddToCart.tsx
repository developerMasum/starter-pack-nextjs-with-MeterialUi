import { Button } from "@mui/material";

export const AddToCart = () => {
  return (
    <Button
      variant="contained"
      size="small"
      sx={{
        // width: width || "auto",
        borderRadius: "35px",
        textTransform: "none",
      }}
    >
    Add To Cart
    </Button>
  );
};
