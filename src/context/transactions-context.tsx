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
import { RequestsHandler } from '@/lib/utils/requests-handler'

interface TransactionsContextTypes {
  table: Table<Transaction>
  transactions: Transaction[]
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

  useEffect(() => {
    loadTransactions()
  }, [])

  async function loadTransactions() {
    const request = new RequestsHandler()
    const data = await request.get()
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
    table
  }

  return (
    <TransactionsContext.Provider value={initialContent}>
      { children }
    </TransactionsContext.Provider>
  )
}