import { useTransactions } from '../hooks/useTransactions'
import SearchTransaction from './search-transaction'
import TableContent from './table-content'
import TableFooter from './table-footer'

export function TransactionsTable() {
  const { table } = useTransactions()
  return (
    <div className="w-full px-12 mt-16">
      <SearchTransaction table={table} />
      <TableContent table={table} />
      <TableFooter table={table} />
    </div>
  )
}
