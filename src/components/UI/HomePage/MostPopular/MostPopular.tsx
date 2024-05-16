
import PopularTitle from './PopularTitle';
import { Badge, Box, Card, CardMedia, Stack, Typography } from '@mui/material';

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const MostPopular = () => {
    return (
      <div>
        <PopularTitle />
        <Stack
          sx={{
            maxWidth: 300,
          }}
        >
          {/* boxShadow: 0 */}
          <Stack sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", top: 15, left: 35 }}>
              <Badge color="secondary" badgeContent={100}></Badge>
            </Box>
            <Card sx={{ borderRadius: "12px", boxShadow: 1 }}>
              <CardMedia
                sx={{ height: 350 }}
                image="https://i.ibb.co/Qr47hBs/1.png"
                title="green iguana"
              />
            </Card>
          </Stack>

          <Stack
            direction="row"
            gap={3}
            justifyContent="space-between"
            alignItems="center"
            px={2}
          >
            <Stack>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                Name of Product
              </Typography>
              <Stack>
                <Stack direction="row" gap={3}>
                  <Typography
                    sx={{
                      fontSize: "15px",
                    }}
                    component="h6"
                  >
                    $200
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: 700,
                    }}
                    component="h6"
                  >
                    $200
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <AddCircleOutlineIcon fontSize="medium" />
          </Stack>
        </Stack>
      </div>
    );
};

export default MostPopular;