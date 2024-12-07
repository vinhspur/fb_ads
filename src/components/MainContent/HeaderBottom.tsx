import {
  Box,
  Button,
  Select,
  MenuItem,
  Typography,
  Input,
  TextField,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FolderIcon from "@mui/icons-material/Folder";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

const HeaderBottom = () => {
  const [dateRange, setDateRange] = React.useState(
    "Tháng này: 1 Tháng 12, 2024 – 7 Tháng 12, 2024"
  );

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="4px"
      >
        {/* Bên trái - 5 nút */}
        <Box display="flex" alignItems="center" gap={1.5}>
          <Button
            variant="outlined"
            startIcon={<SearchIcon />}
            sx={{
              height: "37px",
              width: "37px",
              backgroundColor: "#ffffff",
              border: "1px solid #0A78BE",
              textTransform: "none",
              fontSize: "14px",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          ></Button>
          <Button
            variant="contained"
            startIcon={<FolderIcon />}
            sx={{
              height: "36px",
              backgroundColor: "#ffffff",
              color: "#0A78BE",
              textTransform: "none",
              fontSize: "14px",
              border: "1px solid #0A78BE",
              "&:hover": {
                backgroundColor: "#1976d2",
              },
            }}
          >
            Tất cả quảng cáo
          </Button>
          <Button
            variant="outlined"
            startIcon={<FlashOnIcon />}
            sx={{
              height: "36px",
              borderColor: "#ccc",
              color: "#000",
              textTransform: "none",
              fontSize: "14px",
              backgroundColor: "#ffffff",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            Có phân phối
          </Button>
          <Button
            variant="outlined"
            startIcon={<FlashOnIcon />}
            sx={{
              height: "36px",
              borderColor: "#ccc",
              color: "#000",
              textTransform: "none",
              fontSize: "14px",
              backgroundColor: "#ffffff",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            Quảng cáo đang hoạt động
          </Button>
          <Button
            variant="text"
            startIcon={<AddIcon />}
            sx={{
              height: "36px",
              borderColor: "#ccc",
              color: "#000",
              textTransform: "none",
              fontSize: "14px",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            Chế độ xem khác
          </Button>
        </Box>

        {/* Bên phải - Bộ chọn thời gian */}
        <Box display="flex" alignItems="center">
          <Button
            variant="outlined"
            startIcon={<CalendarMonthIcon />}
            sx={{
              height: "36px",
              borderColor: "#ccc",
              color: "#000",
              textTransform: "none",
              fontSize: "14px",
              padding: "0 12px",
              justifyContent: "space-between",
              width: "400px",
            }}
          >
            {dateRange}
          </Button>
        </Box>
      </Box>
      <Box mt={1}>
        <InputBase
          placeholder="Tìm kiếm theo tên, ID hoặc số liệu"
          fullWidth
          sx={{
            height: "36px",
            backgroundColor: "#ffffff",
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "0 12px",
            fontSize: "14px",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeaderBottom;
