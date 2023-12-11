'use client'

import AccountSummary from '@/components/AccountSummary'
import Header from '@/components/Header'
import { TransactionsTable } from '@/components/TransactionsTable'
import TransactionsProvider from '@/context/transactions-context'

export default function Home() {
  return (
    <TransactionsProvider>
      <Header />
      <AccountSummary />
      <TransactionsTable />
    </TransactionsProvider>
  )
}
