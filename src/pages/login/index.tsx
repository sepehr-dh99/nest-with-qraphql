import React, { ReactNode } from "react";

import BottomSheet from "@src/components/ui/bottomSheet/BottomSheet";
import MainInput from "@src/components/ui/inputs/main/Main";
import { Button, Stack, Typography } from "@mui/material";
import Layout from "@src/layouts/Layout";

const LoginPage = () => {
  return (
    <BottomSheet open={true} transparent>
      <Stack spacing={2.5} sx={{ mb: 4 }}>
        {/* TODO: Must be create Layout TRL provider */}
        <Typography variant="h3" sx={{ color: "#474747" }}>
          به هم میهن خوش آمدید
        </Typography>
        <Typography variant="pSmRegular">
          لطفاً شماره موبایل‌ خود را وارد کنید تا کد فعال‌سازی برا‌یتان ارسال
          شود
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <MainInput />
        {/* TODO: must be add custom size in theme / this height must be equal input */}
        <Button variant="contained" size="large">
          مرحله بعدی
        </Button>
      </Stack>
    </BottomSheet>
  );
};

// TODO :  must be check !!!
LoginPage.getLayout = (page: ReactNode | any) => {
  return <Layout variant="guest">{page}</Layout>;
};

export default LoginPage;
