'use client'

import { useRouter } from 'next/navigation'
import { Button, Center, VStack } from '@chakra-ui/react'

const HomePage = () => {
  const router = useRouter()

  return (
    <Center sx={{ minH: '100vh' }}>
      <VStack spacing={4}>
        <Button minW="160px" onClick={() => router.push('/sports')}>
          Sport Page
        </Button>
        <Button
          variant="outline"
          minW="160px"
          onClick={() => router.push('/financial')}
        >
          Financial Page
        </Button>
      </VStack>
    </Center>
  )
}

export default HomePage
