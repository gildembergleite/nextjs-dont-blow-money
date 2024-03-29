import { Transaction } from '@/@types/transaction'
import { formatDate } from '@/lib/utils/format-date'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '../ui/button'
import { ArrowUpDown } from 'lucide-react'
import formatCurrency from '@/lib/utils/format-currency'

export const columns: ColumnDef<Transaction>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <Button
        className='gap-2 w-full justify-start pl-0'
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Descrição <ArrowUpDown size={16} />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('description')}</div>
    ),
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <Button
          className='gap-2 w-full'
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Valor <ArrowUpDown size={16} />
        </Button>
      )
    },
    cell: ({ row }) => <div>{formatCurrency(row.getValue('amount'))}</div>,
  },
  {
    accessorKey: 'category',
    header: ({ column }) => (
      <Button
        className='gap-2 w-full'
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Categoria <ArrowUpDown size={16} />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('category')}</div>
    ),
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          className='gap-2 w-full'
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Data <ArrowUpDown size={16} />
        </Button>
      )
    },
    cell: ({ row }) => <div>{formatDate(new Date(row.getValue('date')))}</div>,
  },
]