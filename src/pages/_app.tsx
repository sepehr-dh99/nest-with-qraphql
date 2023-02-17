import { NextPage } from "next";
import type { AppProps } from "next/app";

import "@src/styles/globals.scss";

import ThemeController from "@src/styles/themes/themeController";
import { IGetLayout } from "@src/types/getLayout.types";

type Page<P = {}> = NextPage<P> & {
  getLayout?: IGetLayout;
};

type Props = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeController>{getLayout(<Component {...pageProps} />)}</ThemeController>
  );
}
