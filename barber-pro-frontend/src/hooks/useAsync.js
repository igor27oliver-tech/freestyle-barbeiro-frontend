import { useCallback, useState } from 'react'

export function useAsync(asyncFunction) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const execute = useCallback(async (...args) => {
    setLoading(true)
    setError('')
    try {
      const result = await asyncFunction(...args)
      setData(result)
      return result
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data ||
        error?.message ||
        'Não foi possível concluir a operação.'
      setError(String(message))
      throw error
    } finally {
      setLoading(false)
    }
  }, [asyncFunction])

  return { data, loading, error, execute, setData }
}
