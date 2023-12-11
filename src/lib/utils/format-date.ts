export function formatDate(date: Date): string {
  try {
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    return formattedDate.format(date)
  } catch (erro) {
    console.error('Erro ao formatar data:', erro)
    return ''
  }
}
