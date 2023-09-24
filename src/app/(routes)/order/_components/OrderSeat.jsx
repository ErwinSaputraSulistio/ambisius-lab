export default function OrderSeat({ seatOrder, selectSeat }) {
  return(
    <div className='bg-white border border-slate-200 inline-flex justify-between rounded-md my-3 text-center truncate w-full'>
      {
        ['Seat 1', 'Seat 2', 'Seat 3'].map((seat, index) => {
          return(
            <span 
              className={
                `cursor-pointer duration-200 hover:bg-slate-100 p-3 transition w-2/6 ${
                seatOrder.name === seat && 'bg-slate-800 hover:bg-slate-800 text-slate-100'}`
              }
              key={ `select-seat-${ index }` }
              onClick={ () => { selectSeat(seat) } }
            >
              { seat }
            </span>
          )
        })
      }
    </div>
  )
}