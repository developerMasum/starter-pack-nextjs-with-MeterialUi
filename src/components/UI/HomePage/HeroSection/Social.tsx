import { Box, Button, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import CheckIcon from "@mui/icons-material/Check";

const SocialMedia = () => {
  return (
    <>
      <Stack spacing={2}>
        <Box>
          <Typography>
            Buy, sell, and discover fashion, home decor, beauty, and more
          </Typography>
          <Typography>
            Sign up now and join millions of people on the social marketplace
            for all things style
          </Typography>
        </Box>
        <Stack direction="column" spacing={2}>
          <Button variant="contained" startIcon={<GoogleIcon />}>
            Continue with Google
          </Button>
          <Button variant="contained" startIcon={<FacebookIcon />}>
            Continue with Facebook
          </Button>
          <Button variant="contained" startIcon={<EmailIcon />}>
            Continue with Gmail
          </Button>
          <Stack direction="row" alignItems="center">
            <CheckIcon />
            <Typography>Stay Signed In</Typography>
          </Stack>
          <Typography>Uncheck if using a public device. Show More</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default SocialMedia;
