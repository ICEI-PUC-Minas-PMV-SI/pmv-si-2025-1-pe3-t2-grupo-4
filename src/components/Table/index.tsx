import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export interface ColumnConfig<T> {
  id: keyof T;
  label: string;
  minWidth?: number;
  align?: "left" | "right" | "center" | "justify";
  renderCell?: (row: T) => React.ReactNode;
}

interface DynamicTableProps<T extends Record<string, any>> {
  data: T[];
  columns: ColumnConfig<T>[];
  uniqueKey: keyof T;
  onEdit?: (row: T) => void;
  onDelete?: (rowId: T[keyof T]) => void;
  title?: string;
}

function DynamicTable<T extends Record<string, any>>({
  data,
  columns,
  uniqueKey,
  onEdit,
  onDelete,
  title,
}: DynamicTableProps<T>) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
        bgcolor: "transparent",
        border: "1px solid #fff",
        borderRadius: 2,
        p: 2,
      }}
    >
      {title && (
        <Typography
          variant="h6"
          component="div"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          {title}
        </Typography>
      )}
      <Table sx={{ minWidth: 650 }} aria-label="dynamic data table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id as string}
                align={column.align}
                style={{ minWidth: column.minWidth }}
                sx={{ fontWeight: "bold", borderBottom: "none" }}
              >
                {column.label}
              </TableCell>
            ))}
            {(onEdit || onDelete) && (
              <TableCell
                align="right"
                sx={{ fontWeight: "bold", borderBottom: "none" }}
              >
                Ações
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row[uniqueKey] as React.Key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns.map((column) => (
                <TableCell key={column.id as string} align={column.align}>
                  {column.renderCell ? column.renderCell(row) : row[column.id]}
                </TableCell>
              ))}
              {(onEdit || onDelete) && (
                <TableCell align="right">
                  {onEdit && (
                    <IconButton
                      aria-label="edit"
                      size="small"
                      onClick={() => onEdit(row)}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  )}
                  {onDelete && (
                    <IconButton
                      aria-label="delete"
                      size="small"
                      onClick={() => onDelete(row[uniqueKey])}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  )}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DynamicTable;
