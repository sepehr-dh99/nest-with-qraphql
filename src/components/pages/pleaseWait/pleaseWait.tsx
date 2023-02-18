import { ReactNode } from "react";

import { Box } from "@mui/system";
import BottomSheet from "@src/components/ui/bottomSheet/BottomSheet";
import PleaseWaitSpinner from "@src/components/ui/pleaseWaitSpinner/pleaseWaitSpinner";

import AuthLayout from "@src/layouts/auth/auth";
import Layout from "@src/layouts/Layout";

const PleaseWaitPage = () => {
  return (
    <AuthLayout>
      <PleaseWaitSpinner
        sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      />
      <BottomSheet transparent>
        <Box>Test Bottom Sheet</Box>
      </BottomSheet>
    </AuthLayout>
  );
};

// TODO :  must be check !!!
PleaseWaitPage.getLayout = (page: ReactNode | any) => {
  return <Layout variant="auth">{page}</Layout>;
};

export default PleaseWaitPage;
