'use client'

import TransactionsProvider from '@/context/transactions-context'
import { ReactNode } from 'react'

export default function GlobalProvider({ children }: { children: ReactNode }) {
  return (
    <TransactionsProvider>
      {children}
    </TransactionsProvider>
  )
}
