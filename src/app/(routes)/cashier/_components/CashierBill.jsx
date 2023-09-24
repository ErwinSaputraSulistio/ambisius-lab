import rupiahConverter from '@/utils/rupiahConverter'

export default function CashierBill({ seat }) {
  const priceTotal = seat.orders.reduce(
    (accumulator, order) => { 
      return accumulator = accumulator + (order.amount * order.price)
    }, 0
    )

  return(
    <table className='table-auto text-left mt-8'>
      <thead>
        <tr className='h-10 border-b border-slate-200'>
          <th>Amount</th>
          <th>Food</th>
          <th className='text-right'>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          seat.orders.map((order, index) => {
            return(
              <tr className='h-10' key={ index }>
                <td>{ order.amount }</td>
                <td>{ order.name }</td>
                <td className='text-right'>{ rupiahConverter(order.amount * order.price) }</td>
              </tr>
            )
          })
        }
        <tr className='border-t border-slate-200 h-10 text-right'>
          <td></td>
          <td>Total :</td>
          <td className='font-semibold'>{ rupiahConverter(priceTotal) }</td>
        </tr>
      </tbody>
    </table>
  )
}