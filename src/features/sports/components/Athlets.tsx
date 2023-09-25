import Image from 'next/image'
import { AspectRatio, Box, HStack, Stack, Text } from '@chakra-ui/react'

import { ContentNumber } from './ContentNumber'

export const Athlets = () => {
  return (
    <Box position="relative">
      <AspectRatio
        sx={{
          w: '678px',
          h: '950px',
          position: 'absolute',
          top: '35px',
          left: '175px',
        }}
      >
        <Image
          src="/sports/american-football.svg"
          alt="american-football"
          fill
          priority
        />
      </AspectRatio>
      <Box layerStyle="sectionPadding">
        <Text
          layerStyle="contentRight"
          sx={{
            color: 'gray.200',
            fontSize: '90px',
            textTransform: 'uppercase',
          }}
        >
          athlets
        </Text>
      </Box>
      <Box layerStyle="sectionPadding" sx={{ pt: '59px', pb: '56px' }}>
        <Stack layerStyle="contentRight" spacing="21px">
          <HStack spacing="10px">
            <ContentNumber count="01" />
            <Text
              sx={{
                color: 'gray.300',
                fontSize: '6xl',
                textTransform: 'uppercase',
              }}
            >
              connection
            </Text>
          </HStack>
          <Text sx={{ fontSize: 'xl' }}>
            Connect with coaches directly, you can ping coaches to view profile.
          </Text>
        </Stack>
      </Box>
      <Box
        layerStyle="sectionPadding"
        sx={{ bg: 'gray.100', pt: '53px', pb: '56px' }}
      >
        <Stack layerStyle="contentRight" spacing="21px">
          <HStack spacing="10px">
            <ContentNumber count="02" />
            <Text
              sx={{
                color: 'gray.300',
                fontSize: '6xl',
                textTransform: 'uppercase',
              }}
            >
              collaboration
            </Text>
          </HStack>
          <Text sx={{ fontSize: 'xl' }}>
            Work with other student athletes to increase visability. When you
            share and like other players videos it will increase your visability
            as a player. This is the team work aspect to Surface 1.
          </Text>
        </Stack>
      </Box>
      <Box
        layerStyle="sectionPadding"
        sx={{ bg: 'purple.500', pt: '80px', pb: '98px' }}
      >
        <Stack layerStyle="contentRight" spacing="21px">
          <HStack spacing="10px">
            <ContentNumber count="03" underlineColor="white" />
            <Text
              sx={{
                color: 'gray.300',
                fontSize: '6xl',
                textTransform: 'uppercase',
              }}
            >
              growth
            </Text>
          </HStack>
          <Text sx={{ color: 'white', fontSize: 'xl' }}>
            Resources and tools for you to get better as a student Athelte.
            Access to training classes, tutor sessions, etc
          </Text>
        </Stack>
      </Box>
    </Box>
  )
}
