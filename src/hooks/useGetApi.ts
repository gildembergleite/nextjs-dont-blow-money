import { useEffect, useState } from 'react'

export function useGetApi<Type>(url?: string) {
  const [isLoading , setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  
  async function getData() {
    setIsLoading(true)

    try {
      const queryParams = new URLSearchParams({
        _sort: 'date',
        _order: 'desc'
      }).toString()
      const response = await fetch(url + '?' + queryParams)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      } 
      const data: Type[] = await response.json()
      return data
    } catch (err) {
      const error = err as Error
      setError(error)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return { getData , isLoading , error }

}