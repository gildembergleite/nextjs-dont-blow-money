export type Transaction = {
  id: string
  description: string
  amount: number
  type: 'income' | 'outcome'
  category: 'Venda' | 'Alimentação' | 'Casa' | 'Automóvel' | 'Investimentos'
  date: Date
}