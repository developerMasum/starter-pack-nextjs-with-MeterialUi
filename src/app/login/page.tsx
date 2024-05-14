
"use client";
import React, { useState } from "react";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";

const LoginPage = () => {
  const [currentPage, setCurrentPage] = useState("initial");

  const handleButtonClick = (page:any) => {
    setCurrentPage(page);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case "signup":
        return (
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Stack
              sx={{
                background: "green",
                width: "500px",
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition:
                  "background 0.5s ease-in-out, transform 0.5s ease-in-out", // Smooth color and transform transition
                transform: "scale(1)", // Initial scale
              }}
            >
              <Stack>
                <TextField
                  id="standard-search"
                  label="user name"
                  type="name"
                  variant="standard"
                />
              </Stack>
              <Stack>
                <TextField
                  id="standard-search"
                  label="email"
                  type="email"
                  variant="standard"
                />
              </Stack>
              <Stack>
                <TextField
                  id="standard-search"
                  label="password"
                  type="password"
                  variant="standard"
                />
              </Stack>
              <Button variant="contained">Sign up</Button>
            </Stack>

            <Stack
              sx={{
                // background: "gray",
                backgroundImage: "linear-gradient(to right, #134e5e, #71b280)",
                width: "500px",
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition:
                  "background 0.5s ease-in-out, transform 0.5s ease-in-out", // Smooth color and transform transition
                transform: "scale(1)", // Initial scale
              }}
            >
              <Typography variant="h5">already have an account? </Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleButtonClick("login")}
              >
                login
              </Button>
            </Stack>
          </Stack>
        );

      case "initial":
      default:
        return (
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Stack
              sx={{
                background: "gray",
                width: "500px",
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition:
                  "background 0.5s ease-in-out, transform 0.5s ease-in-out", // Smooth color and transform transition
                transform: "scale(1)", // Initial scale
              }}
            >
              <Typography variant="h5">
                Enter your personal details and start journey with us
              </Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleButtonClick("signup")}
              >
                signup
              </Button>
            </Stack>

            <Stack
              sx={{
                background: "green",
                width: "500px",
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition:
                  "background 0.5s ease-in-out, transform 0.5s ease-in-out", // Smooth color and transform transition
                transform: "scale(1)", // Initial scale
              }}
            >
              <Stack>
                <TextField
                  id="standard-search"
                  label="email"
                  type="email"
                  variant="standard"
                />
              </Stack>
              <Stack>
                <TextField
                  id="standard-search"
                  label="password"
                  type="password"
                  variant="standard"
                />
              </Stack>
              <Button variant="contained">Login</Button>
            </Stack>
          </Stack>
        );
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Set height to viewport height
      }}
    >
      {renderPageContent()}
    </Container>
  );
};

export default LoginPage;

