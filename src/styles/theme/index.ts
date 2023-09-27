import { extendTheme } from '@chakra-ui/react'

import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { components } from './components'
import { fontSizes } from './fonts'
import { layerStyles } from './layerStyles'

const theme = extendTheme({
  breakpoints,
  colors,
  components,
  fontSizes,
  layerStyles,
})

export default theme
