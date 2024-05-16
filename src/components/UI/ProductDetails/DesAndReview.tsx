import { Box, Divider, List, ListItem, Stack, Typography } from "@mui/material";

const DesAndReview = () => {
    return (
      <Stack bgcolor="#f8f8f8" p={2} borderRadius={2}>
        <Stack mt={3} mb={3} direction="row" gap={3}>
          <Typography>Description</Typography>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Typography>Reviews</Typography>
        </Stack>
        <Box>
          <Typography mb={2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <List>
            <ListItem>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                ducimus consequatur deserunt?
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                ducimus consequatur deserunt?
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                ducimus consequatur deserunt?
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                ducimus consequatur deserunt?
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                ducimus consequatur deserunt?
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Stack>
    );
};

export default DesAndReview;