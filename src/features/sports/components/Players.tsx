import Image from 'next/image'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  AspectRatio,
  Box,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

import { ContentNumber } from './ContentNumber'

import {
  firstContentPadding,
  secondContentPadding,
  thirdContentPadding,
} from '../styles'
import 'swiper/css'
import 'swiper/css/pagination'

export const Players = () => {
  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
  })

  if (isMobile) return <PlayersMobile />

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

const PlayersMobile = () => {
  return (
    <>
      <Flex sx={{ flexDirection: 'column', px: '5.625vw' }}>
        <Text
          sx={{
            color: 'gray.200',
            fontSize: '15.625vw',
            textTransform: 'uppercase',
          }}
        >
          players
        </Text>
        <AspectRatio
          ratio={302 / 250}
          sx={{ alignSelf: 'center', w: '94.375vw', mt: '6.875vw' }}
        >
          <Image src="/sports/basketball.svg" alt="basketball" fill />
        </AspectRatio>
      </Flex>
      <Box layerStyle="swiperContainer">
        <Swiper
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <Stack spacing={5}>
              <ContentNumber count="01" title="connection" />
              <Text fontSize="4.688vw">
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </Text>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={5}>
              <ContentNumber count="02" title="collaboration" />
              <Text fontSize="4.688vw">
                Work with recruiter to increase your chances of findingtalented
                athlete.
              </Text>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={5}>
              <ContentNumber count="03" title="growth" />
              <Text fontSize="4.688vw">
                Save your time, recruit proper athlets for your team.
              </Text>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  )
}
