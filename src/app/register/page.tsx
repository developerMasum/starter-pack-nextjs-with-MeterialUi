import { Container, Stack, Box, Typography } from "@mui/material";

const RegisterPage = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        gap={5}
        justifyContent="center"
        alignItems="center"
        sx={{
          background: "red",

          borderRadius: "40px",
        }}
      >
        <Box
          sx={{
            width: "500px",
            height: "500px",
          }}
        >
          this is img compo
        </Box>
        <Box
          sx={{
            width: "500px",
            height: "500px",
          }}
        >
          this is img compo
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
