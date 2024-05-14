import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Image
        width={400}
        height={400}
        src="https://www.freeparking.co.nz/learn/wp-content/uploads/2023/06/768x385-21.png" // Placeholder image URL, replace it with your desired image URL
        alt="404 - Page Not Found"
        style={{ marginBottom: 20 }}
      />
      <Typography variant="h4" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        The page you are looking for does not exist.
      </Typography>
    </Container>
  );
};

export default NotFoundPage;
