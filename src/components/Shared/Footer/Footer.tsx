import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedIcon from "@/assets/landing_page/linkedin.png";
import charity from "@/assets/icons/charity-icon.png";
import FooterCompanies from "./FooterCompanies";

const Footer = () => {
  return (
    <Stack>
          <FooterCompanies />
      <Box bgcolor="rgb(17, 26, 34)" py={5}>
        <Container>
          <Stack
            direction="column"
            gap={4}
            justifyContent="center"
            alignItems="center"
          >
            <Image src={charity} width={50} height={50} alt="charity" />
            <Typography component="p" color="white">
              Website Name!!!
            </Typography>
          </Stack>

          <Stack direction="row" gap={2} justifyContent="center" py={3}>
            <Image src={facebookIcon} width={30} height={30} alt="facebook" />
            <Image src={instagramIcon} width={30} height={30} alt="facebook" />
            <Image src={twitterIcon} width={30} height={30} alt="facebook" />
            <Image src={linkedIcon} width={30} height={30} alt="facebook" />
          </Stack>

          <Stack
            direction="row"
            gap={2}
            justifyContent="center"
            alignItems="center"
            py={3}
          >
            <Typography component="p" color="white">
              Privacy Policy!
            </Typography>
            <Typography component="p" color="white">
              Terms & Conditions
            </Typography>
            <Typography component="p" color="white">
              Supports
            </Typography>
            <Typography component="p" color="white">
              About Us
            </Typography>
          </Stack>

          <Typography
            sx={{
              textAlign: "center",
              color: "gray",
            }}
            variant="body2"
            color="textSecondary"
          >
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </Typography>
        </Container>
      </Box>
    </Stack>
  );
};

export default Footer;
