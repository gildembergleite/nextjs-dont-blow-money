export type Transaction = {
  id: string
  description: string
  amount: number
  type: 'income' | 'outcome'
  category: string
  date: Date
}