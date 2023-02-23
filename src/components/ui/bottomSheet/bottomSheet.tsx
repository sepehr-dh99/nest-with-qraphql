import { Box, Slide, Fade, Stack, useTheme } from '@mui/material';
import bottomSheetStyles from './bottomSheet.styles';
import { IBottomSheet } from './bottomSheet.types';

/**
 * TODO:  must be complete this code
 * Handle close  and open
 * Handle animation open and close
 * Check styles and R&D for best implement
 * */
const BottomSheet = ({
  children,
  transparent = false,
  isOpen = false,
  setOpen = () => {},
  sx,
  sxContent,
}: IBottomSheet) => {
  const theme = useTheme();

  return (
    <Slide direction='up' timeout={1000} in={isOpen} mountOnEnter unmountOnExit>
      <Stack sx={bottomSheetStyles.parentSx(theme, sx)}>
        <Stack sx={bottomSheetStyles.containerSx()}>
          {/* Full Screen Background*/}
          <Fade timeout={1000} in={isOpen}>
            <Box sx={bottomSheetStyles.bgSx(theme, transparent)} onClick={() => setOpen(false)} />
          </Fade>

          {/* Content */}
          <Box sx={bottomSheetStyles.contentSx(theme, sxContent)}>{children}</Box>
        </Stack>
      </Stack>
    </Slide>
  );
};

export default BottomSheet;
