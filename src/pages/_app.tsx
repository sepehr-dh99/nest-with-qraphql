import '@src/styles/globals.scss';
import ThemeController from '@src/styles/themes/themeController';
import { IProps } from '@src/types/_app.types';

export default function App({ Component, pageProps }: IProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <ThemeController>{getLayout(<Component {...pageProps} />)}</ThemeController>;
}
