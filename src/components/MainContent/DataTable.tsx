import React, { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

// Định nghĩa kiểu dữ liệu cho từng hàng
interface RowData {
  campaign: string;
  status: string;
  budget: string;
  spent: string;
  result: string;
}

// Props cho DataTable
interface DataTableProps {
  rows: RowData[];
}

// DataTable Component
const DataTable: FC<DataTableProps> = ({ rows }) => {
  return (
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
};

export default DataTable;
