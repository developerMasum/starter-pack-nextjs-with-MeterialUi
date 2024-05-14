"use client";
import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Slide,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import Link from "next/link";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  //  const AuthButton = dynamic(
  //    () => import("@/components/UI/AuthButton/AuthButton"),
  //    { ssr: false }
  //  );
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <HideOnScroll>
        <AppBar
          sx={{
            background: "#F3F3F2",
          }}
        >
          {/* <Toolbar> */}
          <Container>
            <Stack
              py={2}
              direction="row"
              justifyContent="space-between"
              alignItems={"center"}
            >
              <a href="/">
                <Typography
                  color="black"
                  variant="h4"
                  component="h1"
                  fontWeight={600}
                >
                  Company
                  <Box component="span">logo</Box>
                  or name
                </Typography>
              </a>
              <Stack direction={"row"} gap={4} justifyContent={"space-between"}>
                <Typography component={Link} href={"/consultation"} passHref>
                  item1
                </Typography>
                <Typography>item2</Typography>
                <Typography>item3</Typography>
                <Typography>item4</Typography>
                <Typography>item5</Typography>
              </Stack>
              {/* <AuthButton /> */}
            </Stack>
          </Container>
          {/* </Toolbar> */}
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default Navbar;
