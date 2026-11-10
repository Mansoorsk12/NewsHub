import {createContext, useEffect, useContext, useState} from 'react'

const ReadLaterContext = createContext(null)

export function ReadLaterProvider({children}) {
  const [readLater, setReadLater] = useState(() => {
    const saved = localStorage.getItem('readLater')
    try {
      return saved ? JSON.parse(saved) : []
    } catch  {
      return []
    }
  })
  useEffect(() => {
    localStorage.setItem('readLater', JSON.stringify(readLater))
  }, [readLater])

  function addToReadLater(article) {
    setReadLater(prev => prev.includes(article) ? prev.filter(a => a !== article) : [...prev, article])
  }

  return (
    <ReadLaterContext.Provider
      value={{readLater, addToReadLater }}
    >
      {children}
    </ReadLaterContext.Provider>
  )
}
export function useReadLaterContext() {
  const context = useContext(ReadLaterContext)
  if (!context) {
    throw new Error('useReadLaterContext must be used within a ReadLaterProvider')
  }
  return context
}
