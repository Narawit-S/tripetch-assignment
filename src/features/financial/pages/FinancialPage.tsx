import { Button, SimpleGrid, Stack, HStack, Text } from '@chakra-ui/react'

import { buttonStyle, stateTitle, stateDesc } from '../styles'

const FinancialPage = () => {
  return (
    <SimpleGrid columns={2} gap="100px">
      <Stack spacing="32px">
        <Text sx={{ fontSize: '56px', fontWeight: 'bold', lineHeight: '70px' }}>
          Discover Financial Freedom with LegacyLine
        </Text>
        <Text sx={{ color: 'purple.200', fontSize: 'lg', maxW: '586px' }}>
          Welcome to our bank's website, where we provide secure financial
          solutions tailored to meet your unique needs.
        </Text>
        <HStack spacing="32px">
          <Button colorScheme="white" sx={buttonStyle}>
            Open Bank Account
          </Button>
          <Button variant="customOutline" sx={buttonStyle}>
            Learn More
          </Button>
        </HStack>
        <HStack spacing="52px" sx={{ mt: '40px !important' }}>
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
    </SimpleGrid>
  )
}

export default FinancialPage
