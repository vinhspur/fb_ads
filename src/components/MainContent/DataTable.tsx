import React, { FC, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Switch,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Định nghĩa kiểu dữ liệu cho từng hàng
export interface RowData {
  campaign: string;
  status: string;
  budget: string;
  spent: string;
  result: string;
  impressions: string;
  reach: string;
  ctr: string;
  cpc: string;
  cpm: string;
  frequency: string;
  clicks: string;
  conversions: string;
  costPerConversion: string;
  conversionRate: string;
}

// Props cho DataTable
interface DataTableProps {
  rows: RowData[];
}

// Styled component cho ô cố định
const StickyTableCell = styled(TableCell)(({ theme }) => ({
  position: "sticky",
  background: theme.palette.background.paper,
  zIndex: 2,
}));

const DataTable: FC<DataTableProps> = ({ rows }) => {
  const [selectedRows, setSelectedRows] = useState<boolean[]>(
    rows.map(() => false)
  );
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsAllChecked(checked);
    setSelectedRows(rows.map(() => checked));
  };

  const handleRowCheckbox = (index: number) => {
    const updatedSelectedRows = [...selectedRows];
    updatedSelectedRows[index] = !updatedSelectedRows[index];
    setSelectedRows(updatedSelectedRows);

    const allChecked = updatedSelectedRows.every((isChecked) => isChecked);
    setIsAllChecked(allChecked);
  };

  const [toggleStates, setToggleStates] = useState<boolean[]>(
    rows.map(() => false)
  );

  const handleToggleChange = (index: number) => {
    setToggleStates((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <TableContainer
      component={Paper}
      style={{
        borderTop: "0.5px solid #ddd",
        overflowX: "auto",
        overflowY: "auto",
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {/* Checkbox "Chọn tất cả" */}
            <StickyTableCell
              style={{
                zIndex: 3,
                minWidth: 50,
                borderRight: "0.5px solid #ddd",
                fontWeight: "bold",
                padding: "0px 0px 0px 12px",
              }}
            >
              <Checkbox
                checked={isAllChecked}
                onChange={handleSelectAll}
                sx={{
                  backgroundColor: "#ffffff",
                  transform: "scale(1.2)", // Tăng kích thước của checkbox
                  "& .MuiSvgIcon-root": {
                    fontSize: 20, // Điều chỉnh kích thước biểu tượng
                    borderRadius: "4px",
                    border: "0.5px solid #ddd",
                  },
                  "& .MuiSvgIcon-root path": {
                    display: "none",
                  },
                }}
              />
            </StickyTableCell>

            {/* Toggle */}
            <StickyTableCell
              style={{
                zIndex: 3,
                minWidth: 100,
                borderRight: "0.5px solid #ddd",
                fontWeight: "bold",
                padding: "0px 0px 0px 12px",
              }}
            >
              Tắt/Bật
            </StickyTableCell>

            {/* Cột Chiến dịch */}
            <StickyTableCell
              style={{
                zIndex: 3,
                minWidth: 376,
                borderRight: "0.5px solid #ddd",
                fontWeight: "bold",
                padding: "0px 0px 0px 12px",
              }}
            >
              Chiến dịch
            </StickyTableCell>

            {/* Các cột còn lại */}
            <TableCell
              sx={{
                minWidth: 137,
                borderRight: "0.5px solid #ddd",
                fontWeight: "bold",
                padding: "0px 0px 0px 12px",
              }}
            >
              Phân phối
            </TableCell>
            <TableCell
              sx={{
                minWidth: 137,
                borderRight: "0.5px solid #ddd",
                fontWeight: "bold",
                padding: "0px 0px 0px 12px",
              }}
            >
              Ngân sách
            </TableCell>
            <TableCell
              sx={{
                minWidth: 137,
                borderRight: "0.5px solid #ddd",
                fontWeight: "bold",
                padding: "0px 0px 0px 12px",
              }}
            >
              Số tiền đã chi tiêu
            </TableCell>
            <TableCell
              sx={{
                minWidth: 137,
                borderRight: "0.5px solid #ddd",
                fontWeight: "bold",
                padding: "0px 0px 0px 12px",
              }}
            >
              Chi phí trên mỗi kết quả
            </TableCell>
            <TableCell
              sx={{
                minWidth: 137,
                borderRight: "0.5px solid #ddd",
                fontWeight: "bold",
                padding: "0px 0px 0px 12px",
              }}
            >
              Kết quả
            </TableCell>
            <TableCell
              sx={{
                minWidth: 137,
                borderRight: "0.5px solid #ddd",
                fontWeight: "bold",
                padding: "0px 0px 0px 12px",
              }}
            >
              Bình luận về bài viết
            </TableCell>
            <TableCell
              sx={{
                minWidth: 137,
                borderRight: "0.5px solid #ddd",
                fontWeight: "bold",
                padding: "0px 0px 0px 12px",
              }}
            >
              Người tiếp cận
            </TableCell>
            <TableCell
              sx={{
                minWidth: 137,
                borderRight: "0.5px solid #ddd",
                fontWeight: "bold",
                padding: "0px 0px 0px 12px",
              }}
            >
              Lượt hiển thị
            </TableCell>
            <TableCell
              sx={{
                minWidth: 137,
                borderRight: "0.5px solid #ddd",
                fontWeight: "bold",
                padding: "0px 0px 0px 12px",
              }}
            >
              CPC (Tất cả)
            </TableCell>
            <TableCell
              sx={{
                minWidth: 137,
                borderRight: "0.5px solid #ddd",
                fontWeight: "bold",
                padding: "0px 0px 0px 12px",
              }}
            >
              CTP (Tất cả)
            </TableCell>
            <TableCell sx={{ minWidth: 137, fontWeight: "bold", padding: 0 }}>
              CPM (Chi phí mỗi 1000 lần hiển thị)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff", // Màu nền xen kẽ
                height: 50,
              }}
            >
              {/* Checkbox cho từng hàng */}
              <StickyTableCell
                style={{
                  minWidth: 50,
                  borderRight: "0.5px solid #ddd",
                  padding: "0px 0px 0px 12px",
                }}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#F5F6F7" : "#ffffff", // màu xám cho hàng chẵn, trắng cho hàng lẻ
                }}
              >
                <Checkbox
                  checked={selectedRows[index]}
                  onChange={() => handleRowCheckbox(index)}
                  sx={{
                    transform: "scale(1.2)", // Tăng kích thước của checkbox
                    "& .MuiSvgIcon-root": {
                      fontSize: 20, // Điều chỉnh kích thước biểu tượng
                      borderRadius: "4px",
                      border: "0.5px solid #ddd",
                      backgroundColor: "#ffffff",
                    },
                    "& .MuiSvgIcon-root path": {
                      display: "none",
                    },
                  }}
                />
              </StickyTableCell>

              {/* Toggle cho từng hàng */}
              <StickyTableCell
                style={{
                  minWidth: 100,
                  borderRight: "0.5px solid #ddd",
                  padding: "0px 0px 0px 12px",
                }}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#F5F6F7" : "#ffffff", // màu xám cho hàng chẵn, trắng cho hàng lẻ
                }}
              >
                <Switch
                  size="medium"
                  checked={toggleStates[index]}
                  onChange={() => handleToggleChange(index)}
                  sx={{
                    "& .MuiSwitch-thumb": {
                      width: 22, // Kích thước của nút gạt
                      height: 22,
                      marginTop: "3px",
                    },
                    "& .MuiSwitch-track": {
                      width: 38,
                      maxHeight: 22,
                      height: 22,
                      borderRadius: "30px",
                    },
                  }}
                />
              </StickyTableCell>

              {/* Cột Chiến dịch */}
              <StickyTableCell
                style={{
                  minWidth: 376,
                  borderRight: "0.5px solid #ddd",
                  padding: "0px 0px 0px 12px",
                }}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#F5F6F7" : "#ffffff", // màu xám cho hàng chẵn, trắng cho hàng lẻ
                }}
              >
                <Typography color="#4985D4" fontSize={"14px"}>
                  {row.campaign}
                </Typography>
              </StickyTableCell>

              {/* Các cột còn lại */}
              <TableCell
                sx={{
                  minWidth: 137,
                  borderRight: "0.5px solid #ddd",
                  padding: "0px 0px 0px 12px",
                }}
              >
                {row.budget}
              </TableCell>
              <TableCell
                sx={{
                  minWidth: 137,
                  borderRight: "0.5px solid #ddd",
                  padding: "0px 0px 0px 12px",
                }}
              >
                {row.spent}
              </TableCell>
              <TableCell
                sx={{
                  minWidth: 137,
                  borderRight: "0.5px solid #ddd",
                  padding: "0px 0px 0px 12px",
                }}
              >
                {row.result}
              </TableCell>
              <TableCell
                sx={{
                  minWidth: 137,
                  borderRight: "0.5px solid #ddd",
                  padding: "0px 0px 0px 12px",
                }}
              >
                {row.impressions}
              </TableCell>
              <TableCell
                sx={{
                  minWidth: 137,
                  borderRight: "0.5px solid #ddd",
                  padding: "0px 0px 0px 12px",
                }}
              >
                {row.reach}
              </TableCell>
              <TableCell
                sx={{
                  minWidth: 137,
                  borderRight: "0.5px solid #ddd",
                  padding: "0px 0px 0px 12px",
                }}
              >
                {row.ctr}
              </TableCell>
              <TableCell
                sx={{
                  minWidth: 137,
                  borderRight: "0.5px solid #ddd",
                  padding: "0px 0px 0px 12px",
                }}
              >
                {row.cpc}
              </TableCell>
              <TableCell
                sx={{
                  minWidth: 137,
                  borderRight: "0.5px solid #ddd",
                  padding: "0px 0px 0px 12px",
                }}
              >
                {row.cpm}
              </TableCell>
              <TableCell
                sx={{
                  minWidth: 137,
                  borderRight: "0.5px solid #ddd",
                  padding: "0px 0px 0px 12px",
                }}
              >
                {row.frequency}
              </TableCell>
              <TableCell
                sx={{
                  minWidth: 137,
                  borderRight: "0.5px solid #ddd",
                  padding: "0px 0px 0px 12px",
                }}
              >
                {row.clicks}
              </TableCell>
              <TableCell sx={{ minWidth: 137, padding: "0px 0px 0px 12px" }}>
                {row.conversions}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
