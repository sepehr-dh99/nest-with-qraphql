import React, { ReactNode } from 'react';

import BottomSheet from '@src/components/ui/bottomSheet/BottomSheet';
import MainInput from '@src/components/ui/inputs/main/MainInput';
import { Button, Stack, TextField, Typography, useTheme } from '@mui/material';
import Layout from '@src/layouts/Layout';

const LoginPage = () => {
  const theme = useTheme();

  console.log('theme:', theme.palette);

  return (
    <BottomSheet open={true} transparent>
      <Stack sx={{ height: '55vh' }}>
        <Stack spacing={2.5} sx={{ mb: 3 }}>
          {/* TODO: Must be create Layout TRL provider */}
          <Typography variant='h3'>به هم میهن خوش آمدید</Typography>
          <Typography variant='pSmRegular'>
            لطفاً شماره موبایل‌ خود را وارد کنید تا کد فعال‌سازی برا‌یتان ارسال شود
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <MainInput label='شماره همراه' placeholder='مثلا ۰۹۱۲۳۴۵۶۷۸۹' />
          <Button variant='contained' size='xLarge'>
            مرحله بعدی
          </Button>
        </Stack>
      </Stack>
    </BottomSheet>
  );
};

// TODO :  must be check !!!
LoginPage.getLayout = (page: ReactNode | any) => {
  return <Layout variant='guest'>{page}</Layout>;
};

export default LoginPage;
