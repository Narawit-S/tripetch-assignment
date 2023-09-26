import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { ChakraProvider } from '@/styles/provider'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tri Petch Assignment - Narawit',
  description:
    'Tri Petch Assignment for Front-end Devloper by Narawit Sukwattanajaroon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  )
}
