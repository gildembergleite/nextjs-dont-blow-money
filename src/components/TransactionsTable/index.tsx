import { useGetApi } from '@/hooks/useGetApi'
import { useTransactions } from '../../hooks/useTransactions'
import SearchTransaction from './search-transaction'
import TableContent from './table-content'
import TableFooter from './table-footer'
import TableRowSkeleton from './table-row-skeleton'

export function TransactionsTable() {
  const { table, transactions } = useTransactions()
  const { isLoading } = useGetApi()
  
  function renderSkeletons() {
    const skeletons = []
    const numberOfSkeletons = 6
    for (let i = 0; i < numberOfSkeletons; i++) {
      skeletons.push(<TableRowSkeleton key={i} />)
    }
    return skeletons
  }
  
  return (
    <div className="w-full px-12 mt-16">
      <SearchTransaction table={table} />
      {isLoading || transactions.length === 0
        ? (
          <div className='space-y-2'>
            {renderSkeletons()}
          </div>
        )
        : (
          <>
            <TableContent table={table} />
            <TableFooter table={table} />
          </>
        )}
    </div>
  )
}
