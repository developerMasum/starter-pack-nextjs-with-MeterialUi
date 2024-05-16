"use client"
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import AccountMenu from "./AccoountMenu";

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar sx={{ background: "#F3F3F2" }}>
          <Toolbar>
            <Container>
              <Stack
                py={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <a href="/">
                  <Typography
                    color="black"
                    variant="h6"
                    component="h1"
                    fontWeight={600}
                  >
                    Company
                    <Box component="span">logo</Box>
                    or name
                  </Typography>
                </a>
                <Stack
                  direction="row"
                  gap={4}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  {/* Drawer button */}
                  <IconButton
                    onClick={handleDrawerToggle}
                    sx={{ display: { xs: "block", md: "none" } }}
                  >
                    {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                  {/* Items */}
                  <Stack
                    direction="row"
                    gap={4}
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ display: { xs: "none", md: "flex" } }}
                  >
                    <Typography
                      component={Link}
                      href={"/consultation"}
                      passHref
                    >
                      item1
                    </Typography>
                    <Typography>item2</Typography>
                    <Typography>item3</Typography>
                    <Typography>item4</Typography>
                    <Typography>item5</Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <AccountMenu />
                </Stack>
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* Drawer */}
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Stack
          direction="column"
          gap={4}
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100vw", p: 4 }}
        >
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
          {/* Items */}
          <Typography
            component={Link}
            href={"/consultation"}
            passHref
            onClick={handleDrawerToggle}
          >
            item1
          </Typography>
          <Typography onClick={handleDrawerToggle}>item2</Typography>
          <Typography onClick={handleDrawerToggle}>item3</Typography>
          <Typography onClick={handleDrawerToggle}>item4</Typography>
          <Typography onClick={handleDrawerToggle}>item5</Typography>
        </Stack>
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
