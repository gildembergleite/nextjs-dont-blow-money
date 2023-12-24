import { useEffect, useState } from 'react'

export function useGetApi<Type>(url: string) {
  const [data , setData] = useState<Type[]>([])
  const [isLoading , setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  
  async function getData() {
    setIsLoading(true)

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      } 
      const data = await response.json()
      setData(data)
    } catch (err) {
      const error = err as Error
      setError(error)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return { data , isLoading , error }

}