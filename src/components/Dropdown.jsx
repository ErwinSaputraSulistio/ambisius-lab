import { useState } from 'react'

export default function Dropdown({ options, select, selected, styles }) {
  const [showDropdown, setShowDropdown] = useState(false)

  return(
    <div className={`inline-block relative text-left w-full ${ styles }`}>
      <div className='w-full'>
        <button 
          aria-expanded="true" 
          aria-haspopup="true"
          className="inline-flex justify-between w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" 
          id="menu-button"
          onClick={ () => { setShowDropdown(!showDropdown) } } 
        >
          {
            selected ?
            selected.name
            :
            'Select one'
          }
          <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {
        showDropdown &&
        <div className="absolute z-10 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            {
              options.length > 0 ?
              options.map((option, index) => {
                return(
                  <a 
                    className="cursor-pointer hover:bg-slate-100 text-gray-700 block px-4 py-2 text-sm" 
                    role="menuitem" 
                    tabIndex="-1" 
                    id={`menu-item-${ index }`}
                    key={ `option-${ index }` }
                    onClick={ 
                      () => { 
                        select(option)
                        setShowDropdown(false)
                      } 
                    }
                  >
                      { option.name }
                  </a>
                )
              })
              :
              <a className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Nothing to select</a>
            }
          </div>
        </div>
      }
    </div>
  )
}