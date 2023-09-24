'use client'

import Navbar from './Navbar'

export default function Container({ children }) {
  return(
    <main className='container flex flex-col h-screen items-center md:w-6/12 mx-auto p-3 text-sm'>
      <h1 className='font-semibold my-3 text-3xl'>
        Ciwin Restaurant
      </h1>
      <Navbar/>
      <section className='bg-slate-100 flex flex-col p-5 rounded-md w-full'>
        { children }
      </section>
    </main>
  )
}