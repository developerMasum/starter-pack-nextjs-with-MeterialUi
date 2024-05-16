import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import TopTitle from "./TopTitle";
import Image from "next/image";
import { CenteredButton } from "../../Common/CommonButton";

const TopCategories = () => {
  return (
    <Stack mb={10}>
      <TopTitle />

      {/* start gallery stack */}
      <Stack
        direction={"row"}
        gap={5}
        justifyItems="center"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          display: "flex",
          // Apply responsive styles for small devices
          "@media (max-width:600px)": {
            flexDirection: "column", // Stack items vertically
            alignItems: "center", // Align items to center
          },
        }}
      >
        {/* card-1 */}
        <Box
          sx={{
            position: "relative",
            width: 500,
            height: 660,
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
            src="https://www.unisonhome.com/media/wysiwyg/LivingCLP_SU24_LivingFurniture_1200x1200.jpg"
            alt="green iguana"
            width={500}
            height={660}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              position: "absolute",
              top: "95%",
              left: "25%",
              transform: "translate(-50%, -50%)",
              padding: "5px",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "22px",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            Bed Room Furniture
          </Typography>
        </Box>

        {/* middle two card */}
        <Stack
          direction={"column"}
          gap={5}
          justifyItems="center"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            sx={{
              position: "relative",
              width: 370,
              height: 310,
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
              src="https://t3.ftcdn.net/jpg/02/71/05/60/360_F_271056073_C0tbpNLFbcGurqxoMXqPBrx8vzL9VLVY.jpg"
              alt="green iguana"
              width={500}
              height={660}
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                position: "absolute",
                top: "92%",
                left: "25%",
                transform: "translate(-50%, -50%)",
                padding: "5px",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "22px",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              Drawing Room Furniture
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: 370,
              height: 310,
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
              src="https://static-01.daraz.com.bd/p/92950e9d13754f2bbc6e5a9107dc2e63.jpg"
              alt="green iguana"
              width={500}
              height={660}
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                position: "absolute",
                top: "92%",
                left: "18%",
                transform: "translate(-50%, -50%)",
                padding: "5px",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "22px",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              Mirror Furniture
            </Typography>
          </Box>
        </Stack>

        {/* card-2 */}
        <Box
          sx={{
            position: "relative",
            width: 500,
            height: 660,
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
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              position: "absolute",
              top: "95%",
              left: "25%",
              transform: "translate(-50%, -50%)",
              padding: "5px",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              borderRadius: "22px",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            Bed Room Furniture
          </Typography>
        </Box>
      </Stack>
      <Box mt={2}>
        <CenteredButton title="See More" width={120} />
      </Box>
    </Stack>
  );
};

export default TopCategories;
