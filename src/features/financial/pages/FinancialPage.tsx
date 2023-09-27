import Image from 'next/image'
import {
  AspectRatio,
  Button,
  Box,
  SimpleGrid,
  Stack,
  HStack,
  Text,
} from '@chakra-ui/react'

import { buttonStyle, stateTitle, stateDesc } from '../styles'

const FinancialPage = () => {
  return (
    <SimpleGrid columns={2} gap={{ base: '62px', lg: '100px' }}>
      <Stack spacing="32px">
        <Text
          sx={{
            fontSize: { base: '36px', llg: '44px', xl: '56px' },
            fontWeight: 'bold',
            lineHeight: { base: '50px', llg: '70px' },
            maxW: { base: '385px', llg: '440', xl: 'unset' },
          }}
        >
          Discover Financial Freedom with LegacyLine
        </Text>
        <Text
          sx={{
            color: 'purple.200',
            fontSize: { base: 'sm', llg: 'lg' },
            maxW: { base: '412px', llg: '586px' },
          }}
        >
          Welcome to our bank&apos;s website, where we provide secure financial
          solutions tailored to meet your unique needs.
        </Text>
        <HStack spacing={{ base: '13px', llg: '32px' }}>
          <Button colorScheme="white" sx={buttonStyle}>
            Open Bank Account
          </Button>
          <Button variant="customOutline" sx={buttonStyle}>
            Learn More
          </Button>
        </HStack>
        <HStack
          spacing={{ base: '32px', llg: '52px' }}
          sx={{ mt: '40px !important' }}
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
        <AspectRatio ratio={583 / 543} sx={{ w: '583px' }}>
          <Image src="/financial/desktop.svg" alt="financial" fill priority />
        </AspectRatio>
      </Box>
    </SimpleGrid>
  )
}

export default FinancialPage
