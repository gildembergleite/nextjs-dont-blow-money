import AccountSummary from '@/components/AccountSummary'
import Header from '@/components/Header'
import { TransactionsTable } from '@/components/TransactionsTable'

export default function Home() {
  return (
    <>
      <Header />
      <AccountSummary />
      <TransactionsTable />
    </>
  )
}
