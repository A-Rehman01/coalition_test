import { Alert, Grid } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <header>
      <Grid container>
        <Grid item xs={12}>
          <Alert icon={false}>Welcome to the Coalition Technologies</Alert>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
