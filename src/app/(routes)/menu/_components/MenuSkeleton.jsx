export default function MenuSkeleton() {
  return(
    <table className='table-auto text-left mt-8'>
        <thead>
          <tr className='h-10 border-b border-slate-200'>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th className='text-right'>Setting</th>
          </tr>
        </thead>
        <tbody>
          {
            // Dummy five foods for menu skeleton loading
            [1, 2, 3, 4, 5].map((item) => {
              return(
                <tr className='animate-pulse h-10' key={ `menu-skeleton-${item}` }>
                  <td className='w-1/6'><div className='bg-slate-300 h-3 rounded-md w-4/5'/></td>
                  <td className='w-3/6'><div className='bg-slate-300 h-3 rounded-md w-4/5'/></td>
                  <td className='w-1/6'><div className='bg-slate-300 h-3 rounded-md w-4/5'/></td>
                  <td className='text-right w-1/6'><div className='bg-slate-300 h-3 ml-auto rounded-md w-4/5'/></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
  )
}