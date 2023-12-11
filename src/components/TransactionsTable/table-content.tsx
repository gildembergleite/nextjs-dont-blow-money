import { Transaction } from '@/@types/transaction'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { flexRender } from '@tanstack/react-table'
import { columns } from './table-columns'
import { Table as TableType } from '@tanstack/react-table'

interface TableContentProps {
  table: TableType<Transaction>
}

export default function TableContent({ table }: TableContentProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => {
                  console.log(cell)
                  return (
                    <TableCell
                      className={`
                        ${cell.column.id === 'description' || cell.column.id === 'select' ? 'text-left' : 'text-center'}
                        ${cell.column.id === 'amount' && cell.row.original.type === 'income' && 'text-primary'}
                        ${cell.column.id === 'amount' && cell.row.original.type === 'outcome' && 'text-destructive'}
                      `}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                  Sem resultados.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}