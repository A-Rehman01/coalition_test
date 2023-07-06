import React from "react";
import { Box, Tab, Tabs } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

const TabsContent = ({ data }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {data.length ? (
              data.map((obj) => {
                return <Tab label={obj.title} />;
              })
            ) : (
              <></>
            )}
          </Tabs>
        </Box>
        {data.length ? (
          data.map((obj, index) => {
            return (
              <CustomTabPanel value={value} index={index}>
                {obj.content}
              </CustomTabPanel>
            );
          })
        ) : (
          <></>
        )}
      </Box>
    </div>
  );
};

export default TabsContent;
