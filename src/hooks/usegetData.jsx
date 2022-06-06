import { useEffect, useState } from 'react'
import { getItems } from '../services'

const useGetData = () => {
  const [itemss, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    const setData = async () => {
      try {
        const { data: items } = await getItems()
        setItems(items)
      } catch ({ message }) {
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    setData()
  }, [])

  return { itemss, loading, error }
}

export default useGetData
