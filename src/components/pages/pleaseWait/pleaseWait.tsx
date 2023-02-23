import { ReactNode } from 'react';

import PleaseWaitSpinner from '@src/components/ui/pleaseWaitSpinner/pleaseWaitSpinner';
import PleaseWaitStyles from './pleaseWait.styles';

import AuthLayout from '@src/layouts/auth/auth';
import Layout from '@src/layouts/layout';

const PleaseWaitPage = () => {
  return (
    <AuthLayout>
      <PleaseWaitSpinner sx={PleaseWaitStyles.spinnerSx()} />
    </AuthLayout>
  );
};

// TODO :  must be check !!!
PleaseWaitPage.getLayout = (page: ReactNode | any) => {
  return <Layout variant='auth'>{page}</Layout>;
};

export default PleaseWaitPage;
