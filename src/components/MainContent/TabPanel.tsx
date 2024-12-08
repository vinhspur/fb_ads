import React, { FC } from "react";
import { AppBar, Box, Tab, Tabs, Typography, Button } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign"; // Icon for "Chiến dịch"
import GroupIcon from "@mui/icons-material/Group"; // Icon for "Nhóm quảng cáo"
import AdUnitsIcon from "@mui/icons-material/AdUnits"; // Icon for "Quảng cáo"
import DataTable, { RowData } from "./DataTable";

// Định nghĩa kiểu cho TabPanel
interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

// TabPanel component
const TabPanel: FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

// HeaderWithTabs component
const HeaderWithTabs: FC = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Dữ liệu giả cho bảng (kiểu `RowData[]`)

  const rowsTab1: RowData[] = [
    {
      campaign: "Chiến dịch A",
      status: "Đang chạy",
      budget: "150.000đ",
      spent: "80.000đ",
      result: "Tiềm năng",
      impressions: "12,000",
      reach: "9,500",
      ctr: "2.8%",
      cpc: "1,200đ",
      cpm: "450,000đ",
      frequency: "1.3",
      clicks: "280",
      conversions: "70",
      costPerConversion: "2,000đ",
      conversionRate: "25%",
    },
    {
      campaign: "Chiến dịch B",
      status: "Hoàn thành",
      budget: "250.000đ",
      spent: "250.000đ",
      result: "Đạt mục tiêu",
      impressions: "30,000",
      reach: "22,000",
      ctr: "3.5%",
      cpc: "1,400đ",
      cpm: "700,000đ",
      frequency: "1.6",
      clicks: "350",
      conversions: "90",
      costPerConversion: "2,778đ",
      conversionRate: "28%",
    },
    {
      campaign: "Chiến dịch C",
      status: "Đang chạy",
      budget: "100.000đ",
      spent: "40.000đ",
      result: "Tiềm năng",
      impressions: "8,000",
      reach: "7,000",
      ctr: "2.5%",
      cpc: "1,000đ",
      cpm: "400,000đ",
      frequency: "1.1",
      clicks: "200",
      conversions: "40",
      costPerConversion: "1,000đ",
      conversionRate: "20%",
    },
    {
      campaign: "Chiến dịch D",
      status: "Hoàn thành",
      budget: "300.000đ",
      spent: "300.000đ",
      result: "Đạt mục tiêu",
      impressions: "40,000",
      reach: "30,000",
      ctr: "4.0%",
      cpc: "1,200đ",
      cpm: "800,000đ",
      frequency: "1.8",
      clicks: "480",
      conversions: "120",
      costPerConversion: "2,500đ",
      conversionRate: "25%",
    },
    {
      campaign: "Chiến dịch E",
      status: "Đang chạy",
      budget: "200.000đ",
      spent: "100.000đ",
      result: "Hiệu quả",
      impressions: "15,000",
      reach: "13,000",
      ctr: "3.0%",
      cpc: "1,500đ",
      cpm: "600,000đ",
      frequency: "1.4",
      clicks: "300",
      conversions: "75",
      costPerConversion: "1,333đ",
      conversionRate: "25%",
    },
  ];

  return (
    <Box sx={{ maxWidth: "100%", margin: "0 auto", paddingRight: "16px" }}>
      {/* Tabs */}
      <AppBar
        position="static"
        color="default"
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent", // Loại bỏ màu nền
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTabs-flexContainer": {
              gap: "8px",
            },
            "& .MuiTabs-indicator": {
              display: "none", // Ẩn chỉ báo mặc định
            },
            minHeight: "40px",
            height: "40px",
          }}
        >
          <Tab
            label={
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                gap="8px"
                width={"100%"}
              >
                <CampaignIcon />
                <Typography fontWeight={"bold"}>Chiến dịch</Typography>
              </Box>
            }
            id="tab-0"
            sx={{
              textTransform: "none",
              backgroundColor: "#ffffff",
              width: "18vw",
              borderTopRightRadius: "8px",
              borderTopLeftRadius: "8px",
              minHeight: "40px",
              height: "40px",
            }}
          />
          <Tab
            label={
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                gap="8px"
                width={"100%"}
              >
                <GroupIcon style={{ color: "#1C2B33" }} />{" "}
                <Typography fontWeight={"bold"} style={{ color: "#1C2B33" }}>
                  Nhóm quảng cáo
                </Typography>
              </Box>
            }
            id="tab-1"
            sx={{
              textTransform: "none",
              backgroundColor: "#F9F8FB",
              width: "18vw",
              borderTopRightRadius: "8px",
              borderTopLeftRadius: "8px",
              minHeight: "40px",
              height: "40px",
            }}
          />
          <Tab
            label={
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                gap="8px"
                width={"100%"}
              >
                <AdUnitsIcon style={{ color: "#1C2B33" }} />
                <Typography fontWeight={"bold"} style={{ color: "#1C2B33" }}>
                  Quảng cáo
                </Typography>
              </Box>
            }
            id="tab-2"
            sx={{
              textTransform: "none",
              backgroundColor: "#F9F8FB",
              width: "18vw",
              borderTopRightRadius: "8px",
              borderTopLeftRadius: "8px",
              minHeight: "40px",
              height: "40px",
            }}
          />
        </Tabs>
      </AppBar>

      {/* Tab Panels */}
      <TabPanel value={value} index={0}>
        {/* Hàng nút */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#ffffff", // Nền trắng
            padding: "16px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Đổ bóng nhẹ
          }}
        >
          {/* Nút bên trái */}
          <Box display="flex" gap="8px">
            {/* Tạo */}
            <Button
              variant="contained"
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                textTransform: "none",
                backgroundColor: "#007E59",
              }}
            >
              <span style={{ marginRight: "8px" }}>+</span> Tạo
            </Button>

            {/* Sao chép */}
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#343a40",
                borderColor: "#ced4da",
              }}
            >
              <span style={{ marginRight: "8px" }}>📋</span> Sao chép
            </Button>

            {/* Chỉnh sửa */}
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#343a40",
                borderColor: "#ced4da",
              }}
            >
              Chỉnh sửa
              <span style={{ marginLeft: "8px" }}>▼</span>
            </Button>

            {/* Thử nghiệm A/B */}
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#343a40",
                borderColor: "#ced4da",
              }}
            >
              <span style={{ marginRight: "8px" }}>⚗️</span> Thử nghiệm A/B
            </Button>

            {/* Xem thêm */}
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#343a40",
                borderColor: "#ced4da",
              }}
            >
              Xem thêm
              <span style={{ marginLeft: "8px" }}>▼</span>
            </Button>
          </Box>

          {/* Nút bên phải */}
          <Box display="flex" gap="8px" justifyContent="flex-end">
            {/* Nút bên phải thêm */}
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#343a40",
                borderColor: "#ced4da",
              }}
            >
              Nút 1
            </Button>
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#343a40",
                borderColor: "#ced4da",
              }}
            >
              Nút 2
            </Button>
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#343a40",
                borderColor: "#ced4da",
              }}
            >
              Nút 3
            </Button>
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#343a40",
                borderColor: "#ced4da",
              }}
            >
              Nút 4
            </Button>
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#343a40",
                borderColor: "#ced4da",
              }}
            >
              Nút 5
            </Button>
          </Box>
        </Box>

        {/* Bảng dữ liệu */}
        <Box sx={{ maxWidth: "calc(91vw + 12px)" }}>
          <DataTable rows={rowsTab1} />
        </Box>
      </TabPanel>
    </Box>
  );
};

export default HeaderWithTabs;
