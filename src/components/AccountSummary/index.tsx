import { useTransactions } from '@/hooks/useTransactions'
import AccountSummaryCard from './account-summary-card'

export default function AccountSummary() {
  const { transactions } = useTransactions()
  console.log(transactions)
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.outcome += transaction.amount
        acc.total -= transaction.amount
      }
      
      return acc
    },
    {
      income: 0, outcome: 0, total: 0
    }
  )

  return (
    <section className='flex w-full justify-center'>
      <div className='flex w-full max-w-7xl justify-center items-center gap-8 px-12 -mt-20'>
        <AccountSummaryCard type="income" value={summary.income} />
        <AccountSummaryCard type="outcome" value={summary.outcome} />
        <AccountSummaryCard type="total" value={summary.total} />
      </div>
    </section>
  )
}