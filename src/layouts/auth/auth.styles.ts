import { styled } from "@mui/system";

const AuthLayoutStyle = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  maxWidth: "480px",
  margin: "0 auto",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "space-around",
  backgroundColor: theme.palette.primary.main,
}));

export default AuthLayoutStyle;
