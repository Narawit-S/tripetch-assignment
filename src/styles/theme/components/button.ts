import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const solid = defineStyle((props) => {
  const { colorScheme } = props

  switch (colorScheme) {
    case 'white':
      return {
        bg: 'white',
        color: 'purple.700',
        _hover: {
          bg: 'white',
        },
        _active: {
          bg: 'white',
        },
      }
    default:
      return {}
  }
})

const customOutline = defineStyle({
  color: 'white',
  bg: 'none',
  border: '1px solid',
  borderColor: '#FFFFFF20',
})

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: '8px',
  },
  variants: { solid, customOutline },
})
