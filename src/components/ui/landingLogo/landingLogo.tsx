import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/system";

import Image from "next/image";

const LandingLogo = () => {
  return (
    <Stack alignItems="center">
      <Image src="/images/logo-full.svg" alt="logo" width={250} height={70} />
      <Typography variant="subtitle1" component="span">
        اپلیکشن جامع هم میهن برای هم میهن
      </Typography>
    </Stack>
  );
};

export default LandingLogo;
