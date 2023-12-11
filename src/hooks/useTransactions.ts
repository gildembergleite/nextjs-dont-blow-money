import { TransactionsContext } from '@/context/transactions-context'
import { useContext } from 'react'

export function useTransactions() {
  const contentContext = useContext(TransactionsContext)
  
  if (!contentContext) {
    throw new Error('useContent must be used within a ContentProvider')
  }

  return contentContext
}
  