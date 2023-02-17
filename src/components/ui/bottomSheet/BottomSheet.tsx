import { alpha, Box, Stack, useTheme } from "@mui/material";
import { IBottomSheet } from "./BottomSheet.types";

/**
 * TODO:  must be completed this code
 * Handle close  and open
 * Handle animation open and close
 * Check styles and R&D for best implement
 * Create BottomSheet.styles.ts
 * */
const BottomSheet = ({ children, transparent = false, open = false, setOpen }: IBottomSheet) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        bgcolor: alpha(theme.palette.common.black, transparent ? 0 : 0.4),
        zIndex: theme.zIndex.appBar,
        position: "absolute",
        inset: 0
      }}
      justifyContent="flex-end"
    >
      <Box sx={{ bgcolor: theme.palette.background.paper, borderRadius: "20px 20px 0 0", py: 4, px: 3 }}>{children}</Box>

      {/* <Parent>{children}</Parent> */}
    </Stack>
  );
};

export default BottomSheet;
