import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";

const HeaderMain = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Typography style={{ fontWeight: "bold" }}>Chiến dịch</Typography>
        <Select
          value={"Văn Vinh (280390776326364)"}
          onChange={handleChange}
          sx={{
            width: 300,
            height: 36,
            border: "1px solid #2196f3", // Xanh dương
            borderRadius: "4px",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            backgroundColor: "#ffffff",
          }}
        >
          <MenuItem value="Văn Vinh (280390776326364)">
            Văn Vinh (280390776326364)
          </MenuItem>
        </Select>
      </Box>

      <Box>
        <Typography>Thời gian cập nhật : 17 phút trước</Typography>
      </Box>
    </Box>
  );
};

export default HeaderMain;
