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

export const Athlets = () => {
  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
  })

  if (isMobile) return <AthletsMobile />

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
      <Box layerStyle="sectionPadding" sx={firstContentPadding}>
        <Stack layerStyle="contentRight" spacing="21px">
          <ContentNumber count="01" title="connection" />
          <Text sx={{ fontSize: 'xl' }}>
            Connect with coaches directly, you can ping coaches to view profile.
          </Text>
        </Stack>
      </Box>
      <Box layerStyle="sectionPadding" sx={secondContentPadding}>
        <Stack layerStyle="contentRight" spacing="21px">
          <ContentNumber count="02" title="collaboration" />
          <Text sx={{ fontSize: 'xl' }}>
            Work with other student athletes to increase visability. When you
            share and like other players videos it will increase your visability
            as a player. This is the team work aspect to Surface 1.
          </Text>
        </Stack>
      </Box>
      <Box layerStyle="sectionPadding" sx={thirdContentPadding}>
        <Stack layerStyle="contentRight" spacing="21px">
          <ContentNumber count="03" underlineColor="white" title="growth" />
          <Text sx={{ color: 'white', fontSize: 'xl' }}>
            Resources and tools for you to get better as a student Athelte.
            Access to training classes, tutor sessions, etc
          </Text>
        </Stack>
      </Box>
    </Box>
  )
}

const AthletsMobile = () => {
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
          athlets
        </Text>
        <AspectRatio
          ratio={218 / 281}
          sx={{ alignSelf: 'center', w: '68.125vw', mt: '3.438vw' }}
        >
          <Image
            src="/sports/american-football.svg"
            alt="american-football-mobile"
            fill
            priority
          />
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
                Connect with coaches directly, you can ping coaches to view
                profile.
              </Text>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={5}>
              <ContentNumber count="02" title="collaboration" />
              <Text fontSize="4.688vw">
                Work with other student athletes to increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </Text>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={5}>
              <ContentNumber count="03" title="growth" />
              <Text fontSize="4.688vw">
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc
              </Text>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  )
}
