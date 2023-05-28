import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import Matter from "./courtCase/index";

const Case = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  return (
    <Box>
      <Box>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Case Category" />
          <Tab label="Court Case" />
          <Tab label="Settlement" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
            <Typography>The first tab</Typography>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Matter />
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <Typography>The third tab</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default Case;
