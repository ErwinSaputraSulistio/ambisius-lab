'use client'

import useGlobalContext from '@/hooks/useGlobalContext'
import KitchenSkeleton from './_components/KitchenSkeleton'

export default function Kitchen() {
  const { seats, isSeatsReady } = useGlobalContext()

  return(
    <section className='items-center md:items-start flex flex-col md:flex-row justify-between'>
      {
        isSeatsReady ?
        seats.map((seat, seatIndex) => {
          return(
            <div className='text-center w-full md:w-1/4' key={ `seat-${ seatIndex }` }>
              <span className='font-semibold text-lg'>{ seat.name }</span>
              <ul className='mb-5 md:mb-0 mt-1 md:mt-3 md:text-left text-slate-500 text-xs'>
                {
                  seat.orders.length > 0 ?
                  seat.orders.map((order, orderIndex) => {
                    return(
                      <li key={ `seat-${ seatIndex }-order-${ orderIndex }` }>
                        { `${ order.name } x ${ order.amount }` }
                      </li>
                    )
                  })
                  :
                  '(No orders right now)'
                }
              </ul>
            </div>
          )
        })
        :
        <KitchenSkeleton/>
      }
    </section>
  )
}