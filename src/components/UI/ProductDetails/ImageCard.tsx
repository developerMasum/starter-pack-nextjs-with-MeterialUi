import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";


const ImageCard = () => {
    return (
      <Stack>
        <Box
          sx={{
            position: "relative",
            width: 500,
            height: 500,
            padding: "2px",
          }}
        >
          <Image
            style={{
              border: "2px",
              borderRadius: "8px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2021-10/sofa-category.jpg"
            width={500}
            height={660}
            alt="green iguana"
          />
          
        </Box>
      </Stack>
    );
};

export default ImageCard;