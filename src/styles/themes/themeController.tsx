import * as React from "react";

import { ThemeProvider } from "@mui/material/styles";
import mainTheme from "./main/mainTheme";

const ThemeController = ({ children }: { children: JSX.Element }) => {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
};

export default ThemeController;
