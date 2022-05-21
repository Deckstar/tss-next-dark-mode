import {
  Brightness4 as DarkModeIcon,
  Brightness6 as AutoModeIcon,
  Brightness7 as LightModeIcon,
} from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";
import { useDarkMode } from "next-dark-mode";
import React from "react";

const DarkModeButtons = () => {
  const {
    darkModeActive,
    autoModeActive,
    switchToDarkMode,
    switchToLightMode,
    switchToAutoMode,
  } = useDarkMode();

  return (
    <ButtonGroup variant="contained">
      <Button
        disabled={darkModeActive && !autoModeActive}
        startIcon={<DarkModeIcon />}
        onClick={switchToDarkMode}
      >
        Dark
      </Button>

      <Button
        disabled={autoModeActive}
        startIcon={<AutoModeIcon />}
        onClick={switchToAutoMode}
      >
        Auto
      </Button>

      <Button
        disabled={!darkModeActive && !autoModeActive}
        startIcon={<LightModeIcon />}
        onClick={switchToLightMode}
      >
        Light
      </Button>
    </ButtonGroup>
  );
};

export default DarkModeButtons;
