import { Theme } from "@mui/material/styles";

import { makeStyles } from "../../theme/themes";

const useStyles = makeStyles()((theme: Theme) => ({
  mainContainer: {
    minHeight: "100vh",
    paddingTop: theme.spacing(4),

    "& > :not(:last-child)": {
      marginBottom: theme.spacing(2),
    },
  },
  title: {
    textAlign: "center",
  },
  centeredContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    maxWidth: theme.breakpoints.values.sm,
    padding: theme.spacing(2),

    "& > :not(:last-child)": {
      marginBottom: theme.spacing(4),
    },
  },
  label: {
    fontWeight: "bolder",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
  },
  auto: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  dark: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  light: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
}));

export default useStyles;
