import { Padding } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import HeaderMain from "./HeaderMain";

const MainContent = () => {
  return (
    <Box
      style={{
        background: "linear-gradient(to right, #FAF1F1, #E9F7EF)",
        height: "100vh", // Chiều cao đầy đủ cho thấy rõ hiệu ứng gradient
        padding: "12px",
      }}
    >
      <HeaderMain></HeaderMain>
    </Box>
  );
};

export default MainContent;
