import { Container, Link as MuiLink, Paper, Typography } from "@mui/material";
import clsx from "clsx";
import { useDarkMode } from "next-dark-mode";
import React from "react";

import { DarkModeButtons } from "§/components";

import useStyles from "./HomeContent.styles";

const HomeContent = () => {
  const { classes } = useStyles();
  const { autoModeActive, darkModeActive } = useDarkMode();

  const currentMode = autoModeActive
    ? "auto"
    : darkModeActive
    ? "dark"
    : "light";

  return (
    <Container component="main" className={classes.mainContainer}>
      <Typography variant="h1" className={classes.title}>
        TSS and Next-Dark-Mode
      </Typography>

      <Typography>Welcome! 🙂</Typography>

      <Typography>
        This is an example of how to use{" "}
        <MuiLink href="https://docs.tss-react.dev" target="_blank">
          tss-react
        </MuiLink>{" "}
        with{" "}
        <MuiLink
          href="https://github.com/xeoneux/next-dark-mode"
          target="_blank"
        >
          next-dark-mode
        </MuiLink>{" "}
        and{" "}
        <MuiLink href="https://mui.com" target="_blank">
          Material UI
        </MuiLink>
        .
      </Typography>

      <div className={classes.centeredContainer}>
        <Paper className={classes.paper}>
          <Typography>
            Does it work for you? Have you tried refreshing the page?
          </Typography>

          <DarkModeButtons />

          <Typography>
            Should currently show{" "}
            <Paper
              component="span"
              className={clsx(classes.label, classes[currentMode])}
            >
              {currentMode}
            </Paper>{" "}
            mode.
          </Typography>
        </Paper>
      </div>
    </Container>
  );
};

export default HomeContent;
