import { Box, Button, Stack, Typography } from '@mui/material';
import { CommonButton } from '../../Common/CommonButton';


const PopularTitle = () => {
    return (
      <Stack
        direction={"row"}
        justifyItems="center"
        justifyContent="space-between"
        alignItems="center"
      
        marginTop={10}
        marginBottom={10}
      >
        <Box>
          <Typography variant="h5" fontWeight={700}>
      
            Most Popular Products
          </Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            fringilla nunc in <br /> molestie feugiat. Nunc auctor consectetur
            elit, quis pulvina.
          </Typography>
        </Box>
        <Box>
          <CommonButton title="View All" />
        </Box>
      </Stack>
    );
};

export default PopularTitle;