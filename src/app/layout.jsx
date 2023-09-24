'use client'

import './globals.css'
import { GlobalContextProvider } from '@/context/store'
import Container from '@/components/Container'

import { Mooli } from 'next/font/google'
const defaultFont = Mooli({ subsets: ['latin'], weight: '400' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Erwin Saputra Sulistio</title>
      </head>
      <body style={{ fontFamily: defaultFont.style.fontFamily }}>
        <GlobalContextProvider>
          <Container>
            { children }
          </Container>
        </GlobalContextProvider>
      </body>
    </html>
  )
}
