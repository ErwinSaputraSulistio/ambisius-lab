import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const currentPathname = usePathname()
  const navigations = [
    { name: 'Menu', path: '/menu' },
    { name: 'Order', path: '/order' },
    { name: 'Kitchen', path: '/kitchen' },
    { name: 'Cashier', path: '/cashier' }
  ]

  return(
    <nav className='bg-slate-100 inline-flex my-3 p-1 rounded-md text-slate-500 w-full'>
      {
        navigations.map((navigation, index) => {
          return(
            <Link 
              className={
                `duration-500 flex items-center justify-center p-2 rounded-md transition w-1/4 
                ${ currentPathname === navigation.path && 'bg-white text-slate-800' }`
              }
              href={ navigation.path }
              key={ index }
            >
              { navigation.name }
            </Link>
          )
        })
      }
    </nav>
  )
}