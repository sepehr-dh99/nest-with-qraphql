import React, { ReactNode, useState } from "react";

import { Box } from "@mui/system";
import BottomSheet from "@src/components/ui/bottomSheet/BottomSheet";

import Layout from "@src/layouts/Layout";

const LoginPage = () => {
  return (
    <BottomSheet open={true} transparent>
      <Box>Test Bottom 2 Sheet</Box>
    </BottomSheet>
  );
};

// TODO :  must be check !!!
LoginPage.getLayout = (page: ReactNode | any) => {
  return <Layout variant="guest">{page}</Layout>;
};

export default LoginPage;
