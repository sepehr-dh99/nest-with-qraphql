import { Stack, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import Image from "next/image";
import styles from "./landingLogo.module.scss";

const LandingLogo = () => {
  const theme = useTheme();

  return (
    <div className={styles.landingLogo}>
      <Image src="/images/logo-full.svg" alt="logo" width={100} height={40} />
      <span>اپلیکشن جامع هم میهن برای هم میهن</span>
    </div>
  );
};

export default LandingLogo;
