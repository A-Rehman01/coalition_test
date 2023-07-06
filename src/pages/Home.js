import React from "react";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import style from "../css/homepage.module.css";
import Grid from "@mui/material/Grid";

const Home = () => {
  const navigate = useNavigate();
  const navigateToPage = (url) => {
    navigate(url);
  };

  return (
    <div className={style.root}>
      <Grid  container  justifyContent="center" >
      <Grid container    item xs={10} md={5} className={style.card}>
        <Grid item xs={12} >
          <Alert icon={false} severity="success">
            This is a home page — please clicks the below buttons to view the
            pages
          </Alert>
        </Grid>
        <Grid  item xs={12} >
          <Stack spacing={2} direction="row" justifyContent="center" >
            <Button
              onClick={() => navigateToPage("/carousel")}
              variant="outlined"
            >
              Carousel Page
            </Button>
            <Button onClick={() => navigateToPage("/tabs")} variant="outlined">
              Tabs Page
            </Button>
          </Stack>
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
