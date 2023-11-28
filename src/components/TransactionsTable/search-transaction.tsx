import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Transaction } from '@/@types/transaction'
import { Table } from '@tanstack/react-table'

interface SearchTableProps {
  table: Table<Transaction>
}

export default function SearchTransaction({ table }: SearchTableProps) {
  return (
    <div className="flex items-center py-4 gap-4">
      <Input
        placeholder="Busque uma transação..."
        value={(table.getColumn('description')?.getFilterValue() as string) ?? ''}
        onChange={(event) =>
          table.getColumn('description')?.setFilterValue(event.target.value)
        }
        className="w-full"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className='max-h-min py-6 px-8 border-primary text-primary rounded-[6px] font-bold gap-3 hover:bg-primary hover:text-white transition-all duration-500'
            variant={'outline'}>
              Colunas
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) =>
                    column.toggleVisibility(!!value)
                  }
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              )
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}