import { Box, VStack, Text } from '@chakra-ui/react'

type Props = {
  count: string
  textColor?: string
  underlineColor?: string
}

export const ContentNumber = (props: Props) => {
  const { count, textColor = 'black', underlineColor = 'purple.400' } = props
  return (
    <VStack spacing={1} sx={{ w: 'fit-content' }}>
      <Text sx={{ color: textColor, fontSize: 'lg' }}>{count}</Text>
      <Box
        sx={{ borderRadius: 'full', bg: underlineColor, h: '5px', w: 'full' }}
      />
    </VStack>
  )
}
