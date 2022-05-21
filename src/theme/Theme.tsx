import { CacheProvider } from "@emotion/react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useDarkMode } from "next-dark-mode";
import React, { ReactNode, useMemo } from "react";

import {
  darkTheme,
  lightTheme,
  makeMuiCache,
  makeOverrides,
  muiCache,
} from "./themes";

const Theme = (props: { children: ReactNode }) => {
  const { children } = props;

  const { darkModeActive } = useDarkMode();

  const activeTheme = useMemo(() => {
    const colorTheme = darkModeActive ? darkTheme : lightTheme;

    const generatedTheme = createTheme(colorTheme);
    const themeOverrides = makeOverrides(generatedTheme);

    const combinedTheme = createTheme(generatedTheme, themeOverrides);

    return combinedTheme;
  }, [darkModeActive]);

  return (
    <CacheProvider value={muiCache ?? makeMuiCache()}>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Theme;
