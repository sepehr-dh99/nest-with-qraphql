import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@src/styles/Home.module.css";
import { useTheme } from "@emotion/react";
import LandingLogo from "@src/components/ui/landingLogo/landingLogo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const theme = useTheme();

  console.log("theme", theme);

  return (
    <>
      <LandingLogo />
    </>
  );
}
