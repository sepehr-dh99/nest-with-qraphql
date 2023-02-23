import { ReactNode } from 'react';

import Layout from '@src/layouts/layout';
import { ILayoutPage } from '@src/types/getLayout.types';

const HomePage = () => {
  return <>Home Page</>;
};

// TODO :  must be check !!!
HomePage.getLayout = (page: ILayoutPage) => {
  return <Layout variant='auth'>{page}</Layout>;
};

export default HomePage;
