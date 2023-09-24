import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [foods, setFoods] = useState([])
  const [isFoodsReady, setIsFoodsReady] = useState(false)
  const [seats, setSeats] = useState([])
  const [isSeatsReady, setIsSeatsReady] = useState(false)

  const { getFromLocalStorage } = useLocalStorage()

  const getFoodsFromStorage = () => {
    const foodsFromStorage = getFromLocalStorage('foods')
    if(foodsFromStorage) {
      setFoods(foodsFromStorage)
    }
    else {
      setFoods([])
    }
    setIsFoodsReady(true)
  }
  const getSeatsFromStorage = () => {
    const seatsFromStorage = getFromLocalStorage('seats')
    if(seatsFromStorage) {
      setSeats(seatsFromStorage)
    }
    else {
      // For now, I set the seats array statically, only three seats available
      setSeats([
        { name: 'Seat 1', orders: [] },
        { name: 'Seat 2', orders: [] },
        { name: 'Seat 3', orders: [] }
      ])
    }
    setIsSeatsReady(true)
  }

  useEffect(() => {
    // react
    // Simulation, as if the data were really called from the API calls (remove this setTimeout later)
    setTimeout(() => {
      getFoodsFromStorage()
      getSeatsFromStorage()
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <GlobalContext.Provider value={{
      foods, setFoods, isFoodsReady,
      seats, setSeats, isSeatsReady
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

export {
  GlobalContext,
  GlobalContextProvider
}