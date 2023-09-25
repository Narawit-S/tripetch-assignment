'use client'

import { PropsWithChildren } from 'react'
import { ChakraProvider as ThemeProvider } from '@chakra-ui/react'

import theme from '../theme'

export const ChakraProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider resetCSS theme={theme}>
      {children}
    </ThemeProvider>
  )
}
