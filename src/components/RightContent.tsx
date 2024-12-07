import { Box, List, ListItem, Tooltip } from "@mui/material";
import React from "react";

const RightContent = () => {
  return (
    <Box
      bgcolor="#1C2B33"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* Menu chính */}
      <List>
        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
            marginTop: "12px",
          }}
        >
          <Tooltip title="Báo cáo quảng cáo" arrow placement="right">
            <img
              src={"/bar-chart.svg"}
              alt="Logo Meta"
              style={{ width: "18px", height: "18px" }}
            />
          </Tooltip>
        </ListItem>

        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
            marginTop: "12px",
          }}
        >
          <Tooltip title="Báo cáo quảng cáo" arrow placement="right">
            <img
              src={"/pen.svg"}
              alt="Logo Meta"
              style={{ width: "18px", height: "18px" }}
            />
          </Tooltip>
        </ListItem>

        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
            marginTop: "12px",
          }}
        >
          <Tooltip title="Đối tượng" arrow placement="right">
            <img
              src={"/clock.svg"}
              alt="Logo Meta"
              style={{ width: "18px", height: "18px" }}
            />
          </Tooltip>
        </ListItem>
      </List>
    </Box>
  );
};

export default RightContent;
