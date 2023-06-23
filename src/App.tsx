import { useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { match } from "assert";
import React from "react";
import PCRouter from "./pc/PCRouter";
import MobileRouter from "./mobile/MobileRouter";

const MyComponent = () => {
  // function useIsWidthUp(breakpoint) {
  //   const theme = useTheme();
  //   return useMediaQuery(theme.breakpoints.up(breakpoint));
  // }
  // function useIsWidthDown(breakpoint: string) {
  //   const theme = useTheme();
  //   return useMediaQuery(theme.breakpoints.down(breakpoint));
  // // }
  // const isMdUp = useIsWidthUp("md");
  // const isMdDown = useIsWidthDown("md");

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
