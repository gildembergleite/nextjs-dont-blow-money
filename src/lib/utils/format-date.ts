export function formatDate(data: Date): string {
  try {
    const formatoData = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    return formatoData.format(data)
  } catch (erro) {
    console.error('Erro ao formatar data:', erro)
    return ''
  }
}
