'use client'

import { useState } from 'react'
import OrderFood from './_components/OrderFood'
import OrderSeat from './_components/OrderSeat'

export default function Order() {
  const [seatOrder, setSeatOrder] = useState({
    name: null,
    order: null,
    amount: 0
  })
  
  const selectSeat = (name) => {
    setSeatOrder({
      ...seatOrder,
      name
    })
  }

  return(
    <>
      <span>Order Here</span>
      <OrderSeat seatOrder={ seatOrder } selectSeat={ selectSeat }/>
      <OrderFood seatOrder={ seatOrder } setSeatOrder={ setSeatOrder }/>
    </>
  )
}