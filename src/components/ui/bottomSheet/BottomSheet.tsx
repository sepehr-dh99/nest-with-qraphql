import { alpha, Box, Slide, Fade, Stack, useTheme } from "@mui/material";
import { IBottomSheet } from "./BottomSheet.types";

/**
 * TODO:  must be complete this code
 * Handle close  and open
 * Handle animation open and close
 * Check styles and R&D for best implement
 * Create BottomSheet.styles.ts
 * */
const BottomSheet = ({
  children,
  transparent = false,
  open = false,
  setOpen = () => {},
  sx
}: IBottomSheet) => {
  const theme = useTheme();

  return (
    <Slide direction="up" timeout={1000} in={open} mountOnEnter unmountOnExit>
      <Stack
        sx={{
          zIndex: theme.zIndex.appBar,
          position: "absolute",
          inset: 0
        }}
        justifyContent="flex-end"
      >
        <Stack
          sx={{ position: "relative", height: "100%" }}
          justifyContent="flex-end"
        >
          {/* Full Screen Background*/}
          <Fade timeout={1000} in={open}>
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: alpha(
                  theme.palette.common.black,
                  transparent ? 0 : 0.4
                )
              }}
              onClick={() => setOpen(false)}
            />
          </Fade>

          {/* Content */}
          <Box
            sx={{
              bgcolor: theme.palette.background.paper,
              borderRadius: "20px 20px 0 0",
              position: "relative",
              transition: "0.5s",
              maxHeight: "100vh",
              zIndex: 5,
              py: 4,
              px: 3
            }}
          >
            {children}
          </Box>
        </Stack>
      </Stack>
    </Slide>
  );

  return <></>;
};

export default BottomSheet;
