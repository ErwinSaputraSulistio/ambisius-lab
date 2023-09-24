export default function KitchenSkeleton() {
  return(
    // Dummy three seats for seat skeleton loading
    ['Seat 1', 'Seat 2', 'Seat 3'].map((seat, seatIndex) => {
      return(
        <div className='text-center w-full md:w-1/4' key={ `seat-${ seatIndex }` }>
          <span className='font-semibold text-lg'>{ seat }</span>
          <ul className='animate-pulse mb-5 md:mb-0 mt-1 md:mt-3 md:text-left text-slate-500 text-xs'>
            {
              // Dummy five orders for order skeleton loading
              [1, 2, 3, 4, 5].map((item) => {
                return(
                  <li 
                    className='bg-slate-300 h-3 my-2 rounded-md w-full'
                    key={ `kitchen-skeleton-${ item }` }
                  />
                )
              })
            }
          </ul>
        </div>
      )
    })
  )
}