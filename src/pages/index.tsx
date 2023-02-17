import { Box } from "@mui/system";
import BottomSheet from "@src/components/ui/bottomSheet/BottomSheet";

import PleaseWaitSpinner from "@src/components/ui/pleaseWaitSpinner/pleaseWaitSpinner";
import AuthLayout from "@src/layouts/auth/auth";

export default function Home() {
  // root styles until desktop version

  // method to open bottom sheet

  return (
    <AuthLayout>
      {/* Bottom sheet */}

      <PleaseWaitSpinner sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
      <BottomSheet transparent>
        <Box>Test Bottom Sheet</Box>
      </BottomSheet>
    </AuthLayout>
  );
}
