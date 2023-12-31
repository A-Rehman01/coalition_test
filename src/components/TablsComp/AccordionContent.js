import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionContent = ({ data }) => {
  return (
    <div>
      {data.length ? (
        data.map((obj) => {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{obj.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {obj.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default AccordionContent;
