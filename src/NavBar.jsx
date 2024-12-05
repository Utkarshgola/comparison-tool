import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="sticky" >
      <Toolbar >
        <Typography variant="h6">University Comparison Tool</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
