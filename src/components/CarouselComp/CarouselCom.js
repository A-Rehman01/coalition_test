import React, { useState } from "react";
import { carImagesData } from "./data";
import { Grid } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import useMediaQuery from "@mui/material/useMediaQuery";
import style from "../../css/carousel.module.css";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const ACTIONS = {
  ADD: "add",
  MIN: "min",
};
const CarouselCom = () => {
  const isMobile = useMediaQuery("@media (max-width:800px)");
  let [carIndex, setCarIndex] = useState(0);

  const callbackCarIndex = (action) => {
    if (action === ACTIONS.ADD) {
      if (carIndex === carImagesData.length - 1) {
        setCarIndex(0);
      } else {
        setCarIndex(++carIndex);
      }
    } else {
      if (carIndex === 0) {
        setCarIndex(carImagesData.length - 1);
      } else {
        setCarIndex(--carIndex);
      }
    }
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={style.container}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        item
        xs={8}
        md={6}
        textAlign="center"
        wrap="nowrap"
      >
        <KeyboardDoubleArrowLeftIcon
          onClick={() => callbackCarIndex(ACTIONS.MIN)}
        />
        <img
          src={carImagesData[carIndex].imageUrl}
          alt="carImage"
          className={style.carImage}
          width="100%"
        />
        <KeyboardDoubleArrowRightIcon
          onClick={() => callbackCarIndex(ACTIONS.ADD)}
        />
      </Grid>

      <Grid
        gap={2}
        container
        alignItems="center"
        justifyContent="center"
        item
        xs={10}
        md={8}
        textAlign="center"
      >
        {carImagesData.map((carObj, index) => {
          return isMobile ? (
            <Grid
              onClick={() => setCarIndex(index)}
              item
              xs={1}
              md={2}
              className={style.carImageThumb}
            >
              {carIndex === index ? (
                <FiberManualRecordIcon />
              ) : (
                <FiberManualRecordOutlinedIcon />
              )}
            </Grid>
          ) : (
            <Grid onClick={() => setCarIndex(index)} item xs={6} md={2}>
              <img
                height="100px"
                width="100%"
                src={carObj.imageUrl}
                alt="carImage"
                className={style.carImageThumb}
                style={{ border: carIndex === index && "2px solid black" }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default CarouselCom;
