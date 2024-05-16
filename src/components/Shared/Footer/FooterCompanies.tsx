import assets from "@/assets";
import { Container, Stack } from "@mui/material";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const FooterCompanies = () => {
    return (
      <Container sx={{
        marginBottom:"28px",
        marginTop:"28px"
      }}>
          <Marquee autoFill>
        <Stack
          direction="row"
          justifyContent="space-between"
          gap={7}
          alignItems="center"
        >
            <Image
              src={assets.images.frame}
              alt="icon"
              width={80}
              height={80}
            />
            <Image src={assets.images.msn} alt="icon" width={80} height={80} />
            <Image
              src={assets.images.selfinds}
              alt="icon"
              width={80}
              height={80}
            />
            <Image
              src={assets.images.yahoo}
              alt="icon"
              width={80}
              height={80}
            />
            <Image
              src={assets.images.selfinds}
              alt="icon"
              width={80}
              height={80}
            />
            <Image
              src={assets.images.frame}
              alt="icon"
              width={80}
              height={80}
            />
            <Image src={assets.images.msn} alt="icon" width={80} height={80} />
        </Stack>
          </Marquee>
      </Container>
    );
};

export default FooterCompanies;