import useGlobalContext from '@/hooks/useGlobalContext'
import rupiahConverter from '@/utils/rupiahConverter'
import MenuSkeleton from './MenuSkeleton'

export default function MenuTable() {
  const { foods, isFoodsReady, deleteFood } = useGlobalContext()

  return(
    isFoodsReady ?
    (
      foods.length > 0 ?
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
            foods.map((food, index) => {
              return(
                <tr className='h-10' key={ index }>
                  <td className='w-1/6'>{ food.id }</td>
                  <td className='w-3/6'>{ food.name }</td>
                  <td className='w-1/6'>{ rupiahConverter(food.price) }</td>
                  <td className='text-right w-1/6'>
                    <span 
                      className='duration-250 cursor-pointer hover:opacity-50 text-red-600 transition'
                      onClick={ () => { deleteFood(food.id) } }
                    >
                      Remove
                    </span>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      :
      <span className='mt-5 text-center text-slate-500 text-xs'>(No menu available for now)</span>
    )
    :
    <MenuSkeleton/>
  )
}