import { Box, Button } from "@mui/material";

export const CommonButton = ({
  title,
  width,
  endIcon,
}: {
  title: string;
  width?: number;
  endIcon?:string
}) => {
  return (
    <Button
      variant="contained"
      size="small"
      sx={{
        width: width || "auto",
        borderRadius: "35px",
        textTransform: "none",
      }}
    >
      {title}
    </Button>
  );
};




export const CenteredButton = ({
  title,
  width,
}: {
  title: string;
  width?: number;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        // height: "100vh", // Assuming you want the button to be centered vertically on the page
      }}
    >
      <CommonButton title={title} width={width} />
    </Box>
  );
};

