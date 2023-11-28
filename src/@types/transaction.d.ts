export type Transaction = {
  id: string
  description: string
  amount: number
  category: 'Venda' | 'Alimentação' | 'Casa' | 'Automóvel' | 'Investimentos'
  date: Date
}