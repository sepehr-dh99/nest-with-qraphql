import { SxProps, Theme } from '@mui/material';

export type TInlineStyles<T = void> = (theme?: Theme, extra?: T) => SxProps<Theme>;
