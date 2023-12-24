import { useState } from 'react'

export function usePostApi<Type>(url: string) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error>()
  
  async function postData(body: Type) {
    setIsLoading(true)
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...body, date: new Date()}),
      })

      const data = await response.json()
      return data
    } catch (err) {
      const error = err as Error
      setError(error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return { postData, isLoading, error }

}