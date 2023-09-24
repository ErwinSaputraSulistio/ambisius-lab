import useGlobalContext from '@/hooks/useGlobalContext'
import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'

export default function OrderFood({ seatOrder, setSeatOrder }) {
  const { foods, createSeatOrder } = useGlobalContext()

  const selectFood = (order) => {
    setSeatOrder({
      ...seatOrder,
      order
    })
  }
  const changeAmount = (amount) => {
    setSeatOrder({
      ...seatOrder,
      amount
    })
  }
  const newSeatOrder = (e) => {
    e.preventDefault()
    const seatOrderData = {
      name: seatOrder.name,
      order: {
        ...seatOrder.order,
        amount: parseInt(seatOrder.amount)
      }
    }
    createSeatOrder(seatOrderData)
    setSeatOrder({
      name: null,
      order: null,
      amount: 0
    })
  }

  return(
    <div className='inline-flex justify-between mt-5'>
      <div className='flex flex-col w-3/5'>
        <span>Food</span>
        <Dropdown 
          options={ foods }
          select={ selectFood } 
          selected={ seatOrder.order }
          styles='my-2 w-full'
        />
      </div>
      <form className='flex flex-col w-2/6' onSubmit={ newSeatOrder }>
        <span>Amount</span>
        <input 
          className='border border-slate-300 my-2 p-2 rounded-md w-full' 
          onChange={ (e) => { changeAmount(e.target.value) } }
          placeholder='Amount'
          required
          type='number'
          value={ seatOrder.amount }
        />
        <Button
          disabled={ 
            (
              seatOrder.name && 
              seatOrder.order && 
              seatOrder.amount && 
              seatOrder.amount != 0
            ) ?
            false
            :
            true
          }
          name='Order' 
          styles='bg-slate-800 ml-auto text-white w-2/4'
        />
      </form>
    </div>
  )
}