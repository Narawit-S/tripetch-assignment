import Image from 'next/image'
import { AspectRatio, Box, Stack, Text } from '@chakra-ui/react'

import { ContentNumber } from './ContentNumber'
import {
  firstContentPadding,
  secondContentPadding,
  thirdContentPadding,
} from '../styles'

export const Players = () => {
  return (
    <Box position="relative" overflow="hidden">
      <AspectRatio
        sx={{
          w: { base: '691px', lg: '991px' },
          h: { base: '568px', lg: '815px' },
          position: 'absolute',
          left: { base: '380px', xl: '560px', '2xl': '717px' },
          top: { base: '100px', lg: 0 },
        }}
      >
        <Image src="/sports/basketball.svg" alt="basketball" fill />
      </AspectRatio>
      <Box
        layerStyle="sectionPadding2"
        sx={{ pt: { base: '40px', lg: 'unset' } }}
      >
        <Text
          layerStyle="content"
          sx={{
            color: 'gray.200',
            fontSize: '90px',
            pt: { base: '51px', lg: '124px' },
            textTransform: 'uppercase',
          }}
        >
          players
        </Text>
      </Box>
      <Box layerStyle="sectionPadding2" sx={firstContentPadding}>
        <Stack layerStyle="content" spacing="21px">
          <ContentNumber count="01" title="connection" />
          <Text sx={{ fontSize: 'xl' }}>
            Connect with talented athlete directly, you can watch their skills
            through video showreels directly from Surface 1.
          </Text>
        </Stack>
      </Box>
      <Box layerStyle="sectionPadding2" sx={secondContentPadding}>
        <Stack layerStyle="content" spacing="21px">
          <ContentNumber count="02" title="collaboration" />
          <Text sx={{ fontSize: 'xl' }}>
            Work with recruiter to increase your chances of finding talented
            athlete.
          </Text>
        </Stack>
      </Box>
      <Box
        layerStyle="sectionPadding2"
        sx={{
          ...thirdContentPadding,
          bg: 'purple.800',
        }}
      >
        <Stack layerStyle="content" spacing="21px">
          <ContentNumber
            count="03"
            underlineColor="white"
            textColor="purple.600"
            title="growth"
          />
          <Text sx={{ color: 'white', fontSize: 'xl' }}>
            Save your time, recruit proper athlets for your team.
          </Text>
        </Stack>
      </Box>
    </Box>
  )
}
