import React, { FC } from "react";
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign"; // Icon for "Chiến dịch"
import GroupIcon from "@mui/icons-material/Group"; // Icon for "Nhóm quảng cáo"
import AdUnitsIcon from "@mui/icons-material/AdUnits"; // Icon for "Quảng cáo"

// Định nghĩa kiểu dữ liệu cho từng hàng
interface RowData {
  campaign: string;
  status: string;
  budget: string;
  spent: string;
  result: string;
}

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
      sx={{ p: 2 }}
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
    },
    {
      campaign: "Chiến dịch 2",
      status: "Hoàn tất",
      budget: "200.000đ",
      spent: "200.000đ",
      result: "Đạt mục tiêu",
    },
  ];

  const rowsTab2: RowData[] = [
    {
      campaign: "Quảng cáo 1",
      status: "Đang chạy",
      budget: "150.000đ",
      spent: "70.000đ",
      result: "Tương tác tốt",
    },
    {
      campaign: "Quảng cáo 2",
      status: "Dừng",
      budget: "300.000đ",
      spent: "150.000đ",
      result: "Trung bình",
    },
  ];

  const rowsTab3: RowData[] = [
    {
      campaign: "Nhóm 1",
      status: "Đang chạy",
      budget: "400.000đ",
      spent: "250.000đ",
      result: "Rất tốt",
    },
    {
      campaign: "Nhóm 2",
      status: "Hoàn tất",
      budget: "500.000đ",
      spent: "500.000đ",
      result: "Hoàn thành xuất sắc",
    },
  ];

  // Hàm render bảng với kiểu `RowData[]`
  const renderTable = (rows: RowData[]) => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tên chiến dịch</TableCell>
            <TableCell>Trạng thái</TableCell>
            <TableCell>Ngân sách</TableCell>
            <TableCell>Chi tiêu</TableCell>
            <TableCell>Kết quả</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.campaign}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.budget}</TableCell>
              <TableCell>{row.spent}</TableCell>
              <TableCell>{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box sx={{ maxWidth: "100%", margin: "0 auto", paddingRight: "16px" }}>
      {/* Tabs */}
      <AppBar
        position="static"
        color="default"
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
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
              gap: "16px",
            },
          }}
        >
          <Tab
            label={
              <Box display="flex" alignItems="start" gap="8px">
                <CampaignIcon /> Chiến dịch
              </Box>
            }
            id="tab-0"
            sx={{
              textTransform: "none",
              borderRadius: "4px",
              backgroundColor: "#ffffff",
              width: "18vw",
              borderTopRightRadius: "8px",
              borderTopLeftRadius: "8px",
            }}
          />
          <Tab
            label={
              <Box display="flex" alignItems="start" gap="8px">
                <GroupIcon /> Nhóm quảng cáo
              </Box>
            }
            id="tab-1"
            sx={{
              textTransform: "none",
              borderRadius: "4px",
              backgroundColor: "#F9F8FB",
              width: "18vw",
              borderTopRightRadius: "8px",
              borderTopLeftRadius: "8px",
            }}
          />
          <Tab
            label={
              <Box display="flex" alignItems="start" gap="8px">
                <AdUnitsIcon /> Quảng cáo
              </Box>
            }
            id="tab-2"
            sx={{
              textTransform: "none",
              backgroundColor: "#F9F8FB",
              width: "18vw",
              borderTopRightRadius: "8px",
              borderTopLeftRadius: "8px",
            }}
          />
        </Tabs>
      </AppBar>

      {/* Tab Panels */}
      <TabPanel value={value} index={0}>
        {renderTable(rowsTab1)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {renderTable(rowsTab2)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {renderTable(rowsTab3)}
      </TabPanel>
    </Box>
  );
};

export default HeaderWithTabs;
