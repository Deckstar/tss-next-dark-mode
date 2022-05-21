import createCache from "@emotion/cache";
import { EmotionCache } from "@emotion/react";
import { alpha, Theme, ThemeOptions } from "@mui/material";
import { grey, lightBlue, orange } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import { createMakeAndWithStyles } from "tss-react";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    grey: true;
  }
}

declare module "@mui/material" {
  interface Color {
    dark: string;
    light: string;
    main: string;
  }
}

const commonTheme: ThemeOptions = {
  palette: {
    grey: {
      dark: grey[400],
      light: grey[200],
      main: grey[300],
    },
  },
  components: {},
  typography: {},
};

export const lightTheme: ThemeOptions = {
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
    mode: "light",
    primary: {
      main: lightBlue[400],
    },
    secondary: {
      main: orange[400],
    },
  },
};

export const darkTheme: ThemeOptions = {
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
    background: {
      default: "#303030",
      paper: "#424242",
    },
    mode: "dark",
    primary: {
      main: lightBlue[800],
    },
    secondary: {
      main: orange[800],
    },
  },
};

export const makeOverrides = (theme: Theme) => {
  const { palette } = theme;
  const { action, getContrastText, grey: greyColors, mode, text } = palette;

  const themeOverrides: ThemeOptions = {
    components: {
      MuiAppBar: {
        defaultProps: {
          enableColorOnDark: true,
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "contained", color: "grey" },
            style: {
              color: getContrastText(greyColors[300]),
            },
          },
          {
            props: { variant: "outlined", color: "grey" },
            style: {
              color: text.primary,
              borderColor:
                mode === "light"
                  ? "rgba(0, 0, 0, 0.23)"
                  : "rgba(255, 255, 255, 0.23)",
              "&.Mui-disabled": {
                border: `1px solid ${action.disabledBackground}`,
              },
              "&:hover": {
                borderColor:
                  mode === "light"
                    ? "rgba(0, 0, 0, 0.23)"
                    : "rgba(255, 255, 255, 0.23)",
                backgroundColor: alpha(text.primary, action.hoverOpacity),
              },
            },
          },
          {
            props: { variant: "text", color: "grey" },
            style: {
              color: text.primary,
              "&:hover": {
                backgroundColor: alpha(text.primary, action.hoverOpacity),
              },
            },
          },
        ],
      },
    },
  };

  return themeOverrides;
};

export let muiCache: EmotionCache | undefined;

export const makeMuiCache = () => {
  if (!muiCache) {
    muiCache = createCache({
      key: "mui",
      prepend: true,
    });
  }

  return muiCache;
};

export const { makeStyles, withStyles } = createMakeAndWithStyles({
  useTheme,
  /*
  OR, if you have extended the default mui theme adding your own custom properties:
  Let's assume the myTheme object that you provide to the <ThemeProvider /> is of
  type MyTheme then you'll write:
  */
  // "useTheme": useTheme as (()=> MyTheme)
});
