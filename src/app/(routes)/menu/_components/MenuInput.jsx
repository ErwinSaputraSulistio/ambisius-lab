import { useRef, useEffect } from 'react'
import useGlobalContext from '@/hooks/useGlobalContext'
import Button from '@/components/Button'

export default function MenuInput() {
  const nameRef = useRef()
  const priceRef = useRef()
  const { createFood } = useGlobalContext()

  const addNewFood = (e) => {
    e.preventDefault()
    createFood({
      name: nameRef.current.value,
      price: parseInt(priceRef.current.value)
    })
    nameRef.current.value = null
    priceRef.current.value = null
  }

  return(
    <form className='flex flex-row justify-between mt-2' onSubmit={ addNewFood }>
      <input 
        className='border border-slate-300 p-2 rounded-md w-2/4' 
        placeholder='Name'
        ref={ nameRef }
        required
        type='text'
      />
      <input 
        className='border border-slate-300 p-2 rounded-md w-1/4' 
        placeholder='Price'
        ref={ priceRef }
        required
        type='number'
      />
      <Button
        name='Add' 
        styles='bg-slate-800 text-white w-1/5'
      />
    </form>
  )
}