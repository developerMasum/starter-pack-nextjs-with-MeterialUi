"use client"
import React, { useState } from "react";
import { Stack, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ActionButton = () => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Button
        color="secondary"
        sx={{
          border: "none",
          "&:hover": {
            border: "none",
          },
          "&:disabled": {
            border: "none",
          },
        }}
        variant="outlined"
        disabled={count === 1}
        onClick={handleRemove}
        startIcon={<RemoveIcon />}
      ></Button>

      <Typography sx={{
        fontFamily:"cursive"
      }}> {count}</Typography>
      <Button
        sx={{
          border: "none",
          "&:hover": {
            border: "none",
          },
        }}
        color="secondary"
        variant="outlined"
        onClick={handleAdd}
        startIcon={<AddIcon />}
      ></Button>
    </Stack>
  );
};

export default ActionButton;
