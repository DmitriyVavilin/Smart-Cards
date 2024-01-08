import { useState } from 'react'

export const useSort = () => {
  type Sort = {
    direction: 'asc' | 'desc'
    key: string
  } | null

  const [sort, setSort] = useState<Sort>(null)

  const handleSort = (key: string) => {
    if (sort && sort.key === key) {
      setSort({
        direction: sort.direction === 'asc' ? 'desc' : 'asc',
        key,
      })
    } else {
      setSort({
        direction: 'asc',
        key,
      })
    }
  }

  return { handleSort, sort }
}
