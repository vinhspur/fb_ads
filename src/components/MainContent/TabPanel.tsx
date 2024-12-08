import React, { FC } from "react";
import { AppBar, Box, Tab, Tabs, Typography } from "@mui/material";
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
      campaign: "Chiến dịch 1",
      status: "Hoạt động",
      budget: "100.000đ",
      spent: "50.000đ",
      result: "Hiệu quả",
      impressions: "10,000",
      reach: "8,000",
      ctr: "2.5%",
      cpc: "1,000đ",
      cpm: "500,000đ",
      frequency: "1.2",
      clicks: "250",
      conversions: "50",
      costPerConversion: "2,000đ",
      conversionRate: "20%",
    },
    {
      campaign: "Chiến dịch 2",
      status: "Hoàn tất",
      budget: "200.000đ",
      spent: "200.000đ",
      result: "Đạt mục tiêu",
      impressions: "20,000",
      reach: "15,000",
      ctr: "3.0%",
      cpc: "1,500đ",
      cpm: "600,000đ",
      frequency: "1.5",
      clicks: "300",
      conversions: "75",
      costPerConversion: "2,667đ",
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
            <button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              <span style={{ marginRight: "8px" }}>+</span> Tạo
            </button>

            {/* Sao chép */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                color: "#343a40",
                border: "1px solid #ced4da",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <span style={{ marginRight: "8px" }}>📋</span> Sao chép
            </button>

            {/* Chỉnh sửa */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                color: "#343a40",
                border: "1px solid #ced4da",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <span style={{ marginRight: "8px" }}>✏️</span> Chỉnh sửa
            </button>

            {/* Thử nghiệm A/B */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                color: "#343a40",
                border: "1px solid #ced4da",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <span style={{ marginRight: "8px" }}>⚗️</span> Thử nghiệm A/B
            </button>

            {/* Xem thêm */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                color: "#343a40",
                border: "1px solid #ced4da",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Xem thêm ▼
            </button>
          </Box>

          {/* Nút bên phải */}
          <Box display="flex" gap="8px">
            {/* Cột */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                color: "#343a40",
                border: "1px solid #ced4da",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <span style={{ marginRight: "8px" }}>⏸️</span> Cột: 1 ▼
            </button>

            {/* Số liệu chia nhỏ */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                color: "#343a40",
                border: "1px solid #ced4da",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <span style={{ marginRight: "8px" }}>📊</span> Số liệu chia nhỏ
            </button>

            {/* Báo cáo */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                color: "#343a40",
                border: "1px solid #ced4da",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <span style={{ marginRight: "8px" }}>📄</span> Báo cáo
            </button>

            {/* Xuất */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                color: "#343a40",
                border: "1px solid #ced4da",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <span style={{ marginRight: "8px" }}>📤</span> Xuất
            </button>
          </Box>
        </Box>
        <DataTable rows={rowsTab1} />
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        <DataTable rows={rowsTab2} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DataTable rows={rowsTab3} />
      </TabPanel> */}
    </Box>
  );
};

export default HeaderWithTabs;
