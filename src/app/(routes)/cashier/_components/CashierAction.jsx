import useGlobalContext from '@/hooks/useGlobalContext'
import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'

export default function CashierAction({ stateProps }) {
  const { seatsWithOrders } = useGlobalContext()

  return(
    <div className='flex flex-col md:flex-row justify-evenly my-3'>
        <Dropdown 
          options={ seatsWithOrders } 
          select={ stateProps.setSelectedSeat } 
          selected={ stateProps.selectedSeat }
          styles='w-full md:w-2/4'
        />
        <Button 
          click={ 
            stateProps.selectedSeat ?
            () => { stateProps.approveBill() } 
            :
            null
          }
          disabled={ stateProps.selectedSeat ? false : true }
          name='Approve This Bill' 
          styles='bg-green-600 text-white w-full md:w-2/5'
        />
      </div>
  )
}