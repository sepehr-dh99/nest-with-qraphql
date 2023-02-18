import { InputBase, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import StyledMainInput from './MainInput.styles';

const MainInput = ({ label, ...params }: TextFieldProps) => {
  return (
    <Stack spacing={1}>
      {label && <Typography variant='label'>{label}</Typography>}
      <StyledMainInput {...params} />
    </Stack>
  );
};

export default MainInput;
