export default function formatCurrency(value: number): string {
  try {
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    return formattedValue.format(value)
  } catch (erro) {
    console.error('Erro ao formatar data:', erro)
    return ''
  }
}

