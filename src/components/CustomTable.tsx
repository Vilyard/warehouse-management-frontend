'use client'
import React, { FC } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableCellProps,
  styled,
} from "@mui/material"

interface CustomTableProps {
  columns: { id: string; label: string }[]
  rows: { [key: string]: any }[]
}

const StyledTableContainer = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(4),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  overflowX: "auto",
}))

const StyledTableCell = styled(TableCell)<TableCellProps>(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor: theme.palette.grey[200],
  textAlign: "center",
}))

export const CustomTable: FC<CustomTableProps> = ({ columns, rows }) => {
  return (
    <StyledTableContainer>
      <Table className="min-w-full">
        <TableHead className="bg-gray-200">
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell
                key={column.id}
                className="text-center font-bold py-2 px-4"
              >
                {column.label}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.id} align="center" className="py-2 px-4">
                  {row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}