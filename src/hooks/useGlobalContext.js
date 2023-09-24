import { useContext } from 'react'
import { GlobalContext } from '@/context/store'
import useLocalStorage from './useLocalStorage'

export default function useGlobalContext() {
  const { 
    foods, setFoods, isFoodsReady, 
    seats, setSeats, isSeatsReady
  } = useContext(GlobalContext)
  const { saveToLocalStorage } = useLocalStorage()

  const createFood = (newFood) => {
    const randomNumber = Math.floor(111 + Math.random() * 888)
    const updatedFoods = [
      ...foods,
      {
        id: randomNumber,
        ...newFood
      }
    ]
    setFoods(updatedFoods)
    saveToLocalStorage('foods', updatedFoods)
  }
  const deleteFood = (id) => {
    // Delete food by ID
    const filteredFoods = foods.filter((food) => {
      return food.id !== id
    })
    setFoods(filteredFoods)
    saveToLocalStorage('foods', filteredFoods)
    // Then, remove this food orders from all seats
    const updatedSeats = []
    seats.map((seat, index) => {
      const filteredOrders = seat.orders.filter((order) => {
        return order.id !== id
      })
      updatedSeats.push({
        ...seat,
        orders: filteredOrders
      })

      if((seats.length - 1) === index) {
        setSeats(updatedSeats)
        saveToLocalStorage('seats', updatedSeats)
      }
    })
  }

  const seatsWithOrders = seats.filter((seat) => {
    return seat.orders.length > 0
  })
  const manageSeatOrders = (action, data) => {
    const seatIndex = seats.findIndex((seat) => { return seat.name === data.name })
    if(seatIndex !== -1) {
      const updatedSeats = seats
      if(action === 'create') {
        updatedSeats[seatIndex].orders = [
          ...updatedSeats[seatIndex].orders,
          data.order
        ]
      }
      else if(action === 'delete') {
        updatedSeats[seatIndex].orders = []
      }
      setSeats(updatedSeats)
      saveToLocalStorage('seats', updatedSeats)
    }
  }
  const createSeatOrder = (data) => {
    manageSeatOrders('create', data)
  }
  const clearSeatOrders = (name) => {
    manageSeatOrders('delete', { name })
  }

  return {
    foods, isFoodsReady, createFood, deleteFood,
    seats, isSeatsReady, seatsWithOrders, createSeatOrder, clearSeatOrders
  }
}