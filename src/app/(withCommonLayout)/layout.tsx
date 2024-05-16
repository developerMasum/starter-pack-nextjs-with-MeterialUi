import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Container } from "@mui/material";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      <Container  className="min-h-screen pt-[65px]">{children}</Container>

      <Footer />
    </>
  );
};

export default CommonLayout;
