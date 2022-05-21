import { Link as MuiLink, Typography } from "@mui/material";
import React from "react";

import useStyles from "./HomeContent.styles";

const Fluff = () => {
  const { classes } = useStyles();
  return (
    <>
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
    </>
  );
};

export default Fluff;
