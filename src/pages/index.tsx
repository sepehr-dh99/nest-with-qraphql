import { ReactNode } from 'react';

import Layout from '@src/layouts/layout';

const HomePage = () => {
  return <>Home Page</>;
};

// TODO :  must be check !!!
HomePage.getLayout = (page: ReactNode | any) => {
  return <Layout variant='auth'>{page}</Layout>;
};

export default HomePage;
