import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
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
            border: "1px solid #2196f3",
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

      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Typography fontSize={"14px"}>
          Thời gian cập nhật : 17 phút trước
        </Typography>
        <Button
          variant="outlined"
          startIcon={<SyncIcon />}
          sx={{
            width: "40px",
            height: "36px",
            borderColor: "#ccc",
            color: "#000",
            minWidth: "unset", // Ghi đè giá trị mặc định
            padding: 0, // Đảm bảo padding không làm tăng kích thước
            "& .MuiButton-startIcon": {
              margin: 0, // Loại bỏ khoảng cách giữa icon và nút
            },
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        />
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          sx={{
            height: "36px",
            borderColor: "#ccc",
            color: "#000",
            minWidth: "unset",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          Bỏ bản nháp
        </Button>
        <Button
          variant="contained"
          sx={{
            height: "36px",
            backgroundColor: "#2196f3",
            color: "#fff",
            minWidth: "unset",
            "&:hover": {
              backgroundColor: "#1976d2",
            },
          }}
        >
          Xem lại và đăng (6)
        </Button>
        <Button
          variant="outlined"
          startIcon={<MoreHorizIcon style={{ marginLeft: "12px" }} />}
          sx={{
            width: "40px",
            height: "36px",
            borderColor: "#ccc",
            color: "#000",
            minWidth: "unset",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        ></Button>
      </Box>
    </Box>
  );
};

export default HeaderMain;
