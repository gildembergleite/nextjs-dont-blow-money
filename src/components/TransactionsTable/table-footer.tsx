import { Button } from '../ui/button'
import { Transaction } from '@/@types/transaction'
import { Table } from '@tanstack/react-table'

interface TableFooterProps {
  table: Table<Transaction>
}

export default function TableFooter({ table }: TableFooterProps) {
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{' '}
        {table.getFilteredRowModel().rows.length} linha(s) selecionada(s).
      </div>
      <div className="space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
            Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
            Próximo
        </Button>
      </div>
    </div>
  )
}