import { Transaction } from '@/@types/transaction'

export class RequestsHandler {
  private baseUrl: string

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL
  }

  async get() {
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

  async post(body: Transaction) {
    try {
      const response = await fetch(`${this.baseUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...body, date: new Date()}),
      })

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Erro na requisição POST:', error)
      throw error
    }
  }
}