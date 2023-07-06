import React from "react";
import TabsContent from "./TabsContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccordionContent from "./AccordionContent";
import { tabsAndAccData } from "./data";

const TabComp = () => {
  const isMobile = useMediaQuery("@media (max-width:800px)");

  return isMobile ? (
    <AccordionContent data={tabsAndAccData} />
  ) : (
    <TabsContent data={tabsAndAccData} />
  );
};

export default TabComp;
