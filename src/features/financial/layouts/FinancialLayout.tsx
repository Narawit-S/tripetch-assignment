'use client'

import { PropsWithChildren } from 'react'
import {
  Button,
  Box,
  Flex,
  HStack,
  Text,
  Link,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react'

import { plusJakartaSans, poppins } from '@/styles/fonts'

import { Burger } from '@/icons'
import { Drawer } from '../components'

const FinancialLayout = ({ children }: PropsWithChildren) => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  })
  const menuDisclosure = useDisclosure()

  return (
    <Box
      className={plusJakartaSans.className}
      sx={{
        bg: 'var(--ffffff-2-paints, linear-gradient(65deg, #362FCC 31.84%, #5D55FF 68.16%), #FFF)',
        color: 'white',
        minH: '100vh',
        px: { base: 6, sm: 9 },
      }}
    >
      <Box sx={{ maxW: '1408px', margin: '0 auto', pt: 9 }}>
        <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Text
            className={poppins.className}
            sx={{
              fontSize: { base: '4.651vw', md: 'xl', llg: '3xl' },
              fontWeight: 'semibold',
            }}
          >
            LegacyLine.
          </Text>
          {isMobile ? (
            <Burger
              boxSize="5.581vw"
              cursor="pointer"
              onClick={menuDisclosure.onOpen}
            />
          ) : (
            <HStack
              spacing={8}
              color="purple.200"
              sx={{ color: 'purple.200', fontSize: { base: 'sm', llg: 'md' } }}
            >
              <Link href="#home" color="white">
                Home
              </Link>
              <Link href="#services">Services</Link>
              <Link href="#contact">Contact</Link>
              <Link href="#about-us">About us</Link>
              <Button
                sx={{
                  borderRadius: '8px',
                  bg: '#FFFFFF10',
                  color: 'white',
                  fontWeight: 'medium',
                  h: { base: '36px', llg: '44px' },
                  w: { base: '91px', llg: '107px' },
                  _hover: {
                    bg: '#FFFFFF20',
                  },
                }}
              >
                Sign Up
              </Button>
            </HStack>
          )}
        </Flex>
        <Box mt={{ base: '8.140vw', md: '85px' }}>{children}</Box>
      </Box>
      {isMobile && <Drawer disclosure={menuDisclosure} />}
    </Box>
  )
}

export default FinancialLayout
