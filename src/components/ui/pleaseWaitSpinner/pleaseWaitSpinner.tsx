import { Stack, Typography, useTheme } from "@mui/material";
import Loading from "../loading/loading";
import { IPleaseWaitSpinner } from "./pleaseWaitSpinner.types";

const PleaseWaitSpinner = ({ sx }: Partial<IPleaseWaitSpinner>) => {
  const theme = useTheme();

  return (
    <Stack alignItems="center" justifyContent="center" sx={sx}>
      <Typography variant="PlgLight" sx={{ color: theme.palette.common.white }}>
        لطفا شکیبا باشید
      </Typography>
      <Loading />
    </Stack>
  );
};

export default PleaseWaitSpinner;
