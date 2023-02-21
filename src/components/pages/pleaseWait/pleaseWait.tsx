import { ReactNode } from 'react';

import { Box } from '@mui/system';
import BottomSheet from '@src/components/ui/bottomSheet/BottomSheet';
import PleaseWaitSpinner from '@src/components/ui/pleaseWaitSpinner/pleaseWaitSpinner';
import { PleaseWaitSpinnerStyles } from './pleaseWait.styles';

import AuthLayout from '@src/layouts/auth/auth';
import Layout from '@src/layouts/Layout';

const PleaseWaitPage = () => {
  return (
    <AuthLayout>
      <PleaseWaitSpinner sx={PleaseWaitSpinnerStyles} />
      <BottomSheet transparent>
        <Box>Test Bottom Sheet</Box>
      </BottomSheet>
    </AuthLayout>
  );
};

// TODO :  must be check !!!
PleaseWaitPage.getLayout = (page: ReactNode | any) => {
  return <Layout variant='auth'>{page}</Layout>;
};

export default PleaseWaitPage;
