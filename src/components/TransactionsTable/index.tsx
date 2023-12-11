'use client'

import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'


import TableFooter from './table-footer'
import SearchTransaction from './search-transaction'

import { columns } from './table-columns'
import { useEffect, useState } from 'react'
import TableContent from './table-content'
import fetchData from '@/lib/utils/fetch-data'
import { Transaction } from '@/@types/transaction'

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  useEffect(() => {
    loadTransactions()
  }, [])

  async function loadTransactions() {
    const data = await fetchData()
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

  return (
    <div className="w-full px-12 mt-16">
      <SearchTransaction table={table} />
      <TableContent table={table} />
      <TableFooter table={table} />
    </div>
  )
}
