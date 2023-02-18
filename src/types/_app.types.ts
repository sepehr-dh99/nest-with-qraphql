import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { IGetLayout } from './getLayout.types';

export type IPage<P = {}> = NextPage<P> & {
  getLayout?: IGetLayout;
};

export type IProps = AppProps & {
  Component: IPage;
};
