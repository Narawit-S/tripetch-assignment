import { Box, VStack, HStack, Text } from '@chakra-ui/react'

type Props = {
  count: string
  textColor?: string
  underlineColor?: string
  title: string
}

export const ContentNumber = (props: Props) => {
  const {
    count,
    textColor = 'black',
    underlineColor = 'purple.400',
    title,
  } = props
  return (
    <HStack spacing="10px">
      <VStack spacing={1} sx={{ w: 'fit-content' }}>
        <Text sx={{ color: textColor, fontSize: 'lg' }}>{count}</Text>
        <Box
          sx={{ borderRadius: 'full', bg: underlineColor, h: '5px', w: 'full' }}
        />
      </VStack>
      <Text
        sx={{
          color: 'gray.300',
          fontSize: '6xl',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Text>
    </HStack>
  )
}
