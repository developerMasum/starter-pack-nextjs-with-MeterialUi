import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
  return (
    <Stack direction="column" justifyItems="center" alignItems="center">
      <Box>
        <Typography textAlign="center" fontSize="45px" fontWeight={700}>
          Crafting Comfort, Redefining Spaces. <br /> Your Home, Your Signature
          Style!
        </Typography>
        <Typography textAlign="center" fontSize="15px" fontWeight={500} pt='22px'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          fringilla nunc in molestie <br /> feugiat. Nunc auctor consectetur
          elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit. Nulla fringilla nunc in molestie feugiat
        </Typography>
      </Box>
    </Stack>
  );
};

export default Banner;