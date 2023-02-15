import "@src/styles/globals.scss";
import ThemeController from "@src/styles/themes/themeController";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeController>
      <Component {...pageProps} />
    </ThemeController>
  );
}
