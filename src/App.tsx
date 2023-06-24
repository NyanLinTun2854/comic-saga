import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { match } from "assert";
import React from "react";
import PCRouter from "./pc/PCRouter";
import MobileRouter from "./mobile/router/MobileRouter";
import useMediaQuery from "@mui/material/useMediaQuery";

const MyComponent = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  if (isMdUp) {
    return <PCRouter />;
  } else {
    return <MobileRouter />;
  }
};

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyComponent />
    </ThemeProvider>
  );
}
