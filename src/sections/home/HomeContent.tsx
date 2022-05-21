import { Container, Paper, Typography } from "@mui/material";
import clsx from "clsx";
import { useDarkMode } from "next-dark-mode";
import React from "react";

import { DarkModeButtons } from "§/components";

import Fluff from "./Fluff";
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
      <Fluff />

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
