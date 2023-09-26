import Image from 'next/image'
import { AspectRatio, Box, HStack, Stack, Text } from '@chakra-ui/react'

import { ContentNumber } from './ContentNumber'

export const Athlets = () => {
  return (
    <Box position="relative">
      <AspectRatio
        sx={{
          w: { base: '498px', lg: '678px' },
          h: { base: '699px', lg: '950px' },
          position: 'absolute',
          top: { base: '121px', lg: '35px' },
          right: { base: '446px', lg: '520px', xl: '710px', '2xl': '1067px' },
        }}
      >
        <Image
          src="/sports/american-football.svg"
          alt="american-football"
          fill
          priority
        />
      </AspectRatio>
      <Box
        layerStyle="sectionPadding"
        sx={{ pt: { base: '40px', lg: 'unset' } }}
      >
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
      <Box
        layerStyle="sectionPadding"
        sx={{
          pt: { base: '42px', lg: '59px' },
          pb: { base: '30px', lg: '56px' },
        }}
      >
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
        sx={{
          bg: 'gray.100',
          pt: { base: '30px', lg: '53px' },
          pb: { base: '30px', lg: '56px' },
        }}
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
        sx={{
          bg: 'purple.500',
          pt: { base: '30px', lg: '80px' },
          pb: { base: '58px', lg: '98px' },
        }}
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
