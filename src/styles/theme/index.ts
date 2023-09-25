import { extendTheme } from '@chakra-ui/react'

import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { fontSizes } from './fonts'
import { layerStyles } from './layerStyles'

const theme = extendTheme({
  breakpoints,
  colors,
  fontSizes,
  layerStyles,
})

export default theme
