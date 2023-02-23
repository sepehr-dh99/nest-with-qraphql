import '@src/styles/globals.scss';
import ThemeController from '@src/styles/themes/themeController';
import { IProps } from '@src/types/_app.types';
import Head from 'next/head';

export default function App({ Component, pageProps }: IProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>هم میهن</title>
      </Head>
      <ThemeController>{getLayout(<Component {...pageProps} />)}</ThemeController>
    </>
  );
}
