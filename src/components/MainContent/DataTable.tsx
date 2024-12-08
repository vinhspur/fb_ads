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
        overflowX: "auto",
        overflowY: "auto",
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {/* Checkbox "Chọn tất cả" */}
            <StickyTableCell style={{ zIndex: 3, minWidth: 50 }}>
              <Checkbox checked={isAllChecked} onChange={handleSelectAll} />
            </StickyTableCell>

            {/* Toggle */}
            <StickyTableCell style={{ zIndex: 3, minWidth: 100 }}>
              Tắt/Bật
            </StickyTableCell>

            {/* Cột Chiến dịch */}
            <StickyTableCell style={{ zIndex: 3, minWidth: 376 }}>
              Chiến dịch
            </StickyTableCell>

            {/* Các cột còn lại */}
            <TableCell sx={{ minWidth: 137 }}>Phân phối</TableCell>
            <TableCell sx={{ minWidth: 137 }}>Ngân sách</TableCell>
            <TableCell sx={{ minWidth: 137 }}>Số tiền đã chi tiêu</TableCell>
            <TableCell sx={{ minWidth: 137 }}>
              Chi phí trên mỗi kết quả
            </TableCell>
            <TableCell sx={{ minWidth: 137 }}>Kết quả</TableCell>
            <TableCell sx={{ minWidth: 137 }}>Bình luận về bài viết</TableCell>
            <TableCell sx={{ minWidth: 137 }}>Người tiếp cận</TableCell>
            <TableCell sx={{ minWidth: 137 }}>Lượt hiển thị</TableCell>
            <TableCell sx={{ minWidth: 137 }}>CPC (Tất cả)</TableCell>
            <TableCell sx={{ minWidth: 137 }}>CTP (Tất cả)</TableCell>
            <TableCell sx={{ minWidth: 137 }}>
              CPM (Chi phí mỗi 1000 lần hiển thị)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {/* Checkbox cho từng hàng */}
              <StickyTableCell style={{ minWidth: 50 }}>
                <Checkbox
                  checked={selectedRows[index]}
                  onChange={() => handleRowCheckbox(index)}
                />
              </StickyTableCell>

              {/* Toggle cho từng hàng */}
              <StickyTableCell style={{ minWidth: 100 }}>
                <Switch
                  size="medium"
                  sx={{ height: 40 }}
                  checked={toggleStates[index]}
                  onChange={() => handleToggleChange(index)}
                />
              </StickyTableCell>

              {/* Cột Chiến dịch */}
              <StickyTableCell style={{ minWidth: 376 }}>
                <Typography color="#4985D4" fontSize={"14px"}>
                  {row.campaign}
                </Typography>
              </StickyTableCell>

              {/* Các cột còn lại */}
              <TableCell sx={{ minWidth: 137 }}>{row.budget}</TableCell>
              <TableCell sx={{ minWidth: 137 }}>{row.spent}</TableCell>
              <TableCell sx={{ minWidth: 137 }}>{row.result}</TableCell>
              <TableCell sx={{ minWidth: 137 }}>{row.impressions}</TableCell>
              <TableCell sx={{ minWidth: 137 }}>{row.reach}</TableCell>
              <TableCell sx={{ minWidth: 137 }}>{row.ctr}</TableCell>
              <TableCell sx={{ minWidth: 137 }}>{row.cpc}</TableCell>
              <TableCell sx={{ minWidth: 137 }}>{row.cpm}</TableCell>
              <TableCell sx={{ minWidth: 137 }}>{row.frequency}</TableCell>
              <TableCell sx={{ minWidth: 137 }}>{row.clicks}</TableCell>
              <TableCell sx={{ minWidth: 137 }}>{row.conversions}</TableCell>
              <TableCell sx={{ minWidth: 137 }}>
                {row.costPerConversion}
              </TableCell>
              <TableCell sx={{ minWidth: 137 }}>{row.conversionRate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
