import { Padding } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import HeaderMain from "./HeaderMain";
import HeaderBottom from "./HeaderBottom";
import HeaderWithTabs from "./TabPanel";

const MainContent = () => {
  return (
    <Box
      style={{
        background: "linear-gradient(to right, #FAF1F1, #E6F0FA)",
        height: "100vh", // Chiều cao đầy đủ cho thấy rõ hiệu ứng gradient
        padding: "12px",
      }}
    >
      <HeaderMain></HeaderMain>
      <Box mt={2} mb={1}>
        <HeaderBottom></HeaderBottom>
      </Box>
      <HeaderWithTabs></HeaderWithTabs>
    </Box>
  );
};

export default MainContent;
