'use client'

import { useState } from 'react'
import useGlobalContext from '@/hooks/useGlobalContext'
import CashierAction from './_components/CashierAction'
import CashierBill from './_components/CashierBill'

export default function Cashier() {
  const [selectedSeat, setSelectedSeat] = useState(null)
  const { clearSeatOrders } = useGlobalContext()

  const approveBill = () => {
    clearSeatOrders(selectedSeat.name)
    setSelectedSeat(null)
  }

  const getStateProps = () => {
    return {
      selectedSeat,
      setSelectedSeat,
      approveBill
    }
  }
  
  return(
    <>
      <span>Cashier</span>
      <CashierAction stateProps={ getStateProps() }/>
      { selectedSeat && <CashierBill seat={ selectedSeat }/> }
    </>
  )
}