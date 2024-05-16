"use client";
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from 'react';
const FlashSellSearch = () => {
    const [q, setQ] = useState("");
     console.log(q)

    return (
      <Stack>
      
          <TextField
            onChange={(e) => setQ(e.target.value)}
            size="small"
            placeholder="Search blogs..."
            fullWidth={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
         
      </Stack>
    );
};

export default FlashSellSearch;