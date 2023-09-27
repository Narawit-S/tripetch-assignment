'use client'

import Image from 'next/image'
import {
  AspectRatio,
  Button,
  Box,
  Flex,
  SimpleGrid,
  Stack,
  HStack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

import { buttonStyle, stateTitle, stateDesc } from '../styles'

const FinancialPage = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  })

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      gap={{ base: '25px', md: '62px', lg: '100px' }}
      pb={{ base: '5.581vw', md: 0 }}
    >
      <Stack
        spacing={{ base: '24px', md: '32px' }}
        alignItems={{ base: 'center', md: 'start' }}
      >
        <Text
          sx={{
            fontSize: { base: '5.581vw', md: '36px', llg: '44px', xl: '56px' },
            fontWeight: 'bold',
            lineHeight: { base: '8.837vw', md: '50px', llg: '70px' },
            maxW: { base: '81.860vw', md: '385px', llg: '440', xl: 'unset' },
            textAlign: { base: 'center', md: 'unset' },
          }}
        >
          Discover Financial Freedom with LegacyLine
        </Text>
        <Text
          sx={{
            color: 'purple.200',
            fontSize: { base: '3.256vw', md: 'sm', llg: 'lg' },
            maxW: { base: '412px', llg: '586px' },
            textAlign: { base: 'center', md: 'unset' },
          }}
        >
          Welcome to our bank&apos;s website, where we provide secure financial
          solutions tailored to meet your unique needs.
        </Text>
        <Flex
          sx={{
            flexDirection: { base: 'column', md: 'row' },
            gap: { base: '16px', md: '13px', llg: '32px' },
          }}
        >
          <Button colorScheme="white" sx={buttonStyle}>
            Open Bank Account
          </Button>
          <Button variant="customOutline" sx={buttonStyle}>
            Learn More
          </Button>
        </Flex>
        <HStack
          spacing={{ base: '32px', llg: '52px' }}
          sx={{ mt: { base: 'unset', md: '40px !important' } }}
        >
          <Stack spacing={2}>
            <Text sx={stateTitle}>{`<0.1%`}</Text>
            <Text sx={stateDesc}>Transaction Fees</Text>
          </Stack>
          <Stack spacing={2}>
            <Text sx={stateTitle}>+14%</Text>
            <Text sx={stateDesc}>Savings Percentage</Text>
          </Stack>
          <Stack spacing={2}>
            <Text sx={stateTitle}>+2.9M</Text>
            <Text sx={stateDesc}>Buisness Owner</Text>
          </Stack>
        </HStack>
      </Stack>
      <Box sx={{ overflow: 'hidden', w: 'full' }}>
        <AspectRatio
          ratio={{ base: 383 / 370, md: 583 / 543 }}
          sx={{ w: { base: 'full', md: '583px' } }}
        >
          {isMobile ? (
            <Image
              src="/financial/mobile.svg"
              alt="financial-mobile"
              fill
              priority
            />
          ) : (
            <Image src="/financial/desktop.svg" alt="financial" fill priority />
          )}
        </AspectRatio>
      </Box>
    </SimpleGrid>
  )
}

export default FinancialPage
