export default function formatCurrency(value: number): string {
  const formattedNumber = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formattedNumber
}
