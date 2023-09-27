import type { Metadata } from 'next'

import { ChakraProvider } from '@/styles/provider'
import { roboto } from '@/styles/fonts'

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
