'use client'

import { Transaction } from '@/@types/transaction'
import { ReactNode, createContext, useEffect, useState } from 'react'

import {
  ColumnFiltersState,
  SortingState,
  Table,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { columns } from '../components/TransactionsTable/table-columns'
import { useGetApi } from '@/hooks/useGetApi'

interface TransactionsContextTypes {
  table: Table<Transaction>
  transactions: Transaction[]
  loadTransactions: () => void
}

export const TransactionsContext = createContext({} as TransactionsContextTypes)

export default function TransactionsProvider({ children }: {
  children: ReactNode
}) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const { data } = useGetApi<Transaction>(process.env.NEXT_PUBLIC_API_URL)

  useEffect(() => {
    loadTransactions()
  }, [data])

  async function loadTransactions() {
    setTransactions(data)
  }

  const table = useReactTable({
    data: transactions,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const initialContent = {
    transactions,
    table,
    loadTransactions
  }

  return (
    <TransactionsContext.Provider value={initialContent}>
      { children }
    </TransactionsContext.Provider>
  )
}