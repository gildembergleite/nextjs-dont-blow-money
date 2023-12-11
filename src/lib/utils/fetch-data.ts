export default async function fetchData() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL)
    
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`)
    }

    const data = await response.json()
    
    return data
  } catch (err) {
    const error = err as Error
    console.error('Erro ao buscar dados:', error.message)
    throw error
  }
}