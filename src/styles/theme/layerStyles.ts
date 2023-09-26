export const layerStyles = {
  sectionPadding: {
    pl: { base: '30px', xl: '321px' },
    pr: { base: '30px', xl: '90px', '2xl': '195px' },
  },
  sectionPadding2: {
    pr: { base: '30px', xl: '321px' },
    pl: { base: '30px', xl: '90px', '2xl': '195px' },
  },
  content: {
    w: { base: '446px', xl: '560px', '2xl': '717px' },
  },
  contentRight: {
    w: { base: '446px', xl: '560px', '2xl': '717px' },
    ml: 'auto',
  },
  swiperContainer: {
    bg: 'purple.100',
    pt: '22.500vw',
    pb: '9.375vw',
    px: '5.625vw',
    mt: '-15.625vw',
    '.swiper-slide': {
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
    },
    '.swiper-pagination': {
      position: 'relative',
      mt: '9.375vw',
    },
    '.swiper-pagination-bullet': {
      backgroundColor: 'purple.400',
    },
  },
}
