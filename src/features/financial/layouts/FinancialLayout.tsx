'use client'

import { PropsWithChildren } from 'react'
import { Box } from '@chakra-ui/react'

import { plusJakartaSans } from '@/styles/fonts'

const FinancialLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      className={plusJakartaSans.className}
      sx={{
        bg: 'var(--ffffff-2-paints, linear-gradient(65deg, #362FCC 31.84%, #5D55FF 68.16%), #FFF)',
        color: 'white',
        minH: '100vh',
      }}
    >
      <Box sx={{ maxW: '1408px', margin: '0 auto', pt: 9 }}>{children}</Box>
    </Box>
  )
}

export default FinancialLayout
