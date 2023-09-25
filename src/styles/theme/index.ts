import { extendTheme } from '@chakra-ui/react'

import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { fontSizes } from './fonts'

const theme = extendTheme({
  breakpoints,
  colors,
  fontSizes,
})

export default theme
