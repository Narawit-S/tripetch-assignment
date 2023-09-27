import { useMemo } from 'react'
import {
  Button,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Link,
  UseDisclosureReturn,
} from '@chakra-ui/react'

type Props = {
  disclosure: UseDisclosureReturn
}

export const Drawer = ({ disclosure }: Props) => {
  const { isOpen, onClose } = disclosure

  const menus = useMemo(() => {
    return [
      {
        href: '#home',
        title: 'Home',
      },
      {
        href: '#services',
        title: 'Services',
      },
      {
        href: '#contact',
        title: 'Contact',
      },
      {
        href: '#about-us',
        title: 'About us',
      },
    ]
  }, [])

  return (
    <ChakraDrawer placement="right" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <VStack spacing={6} sx={{ mt: 12, fontSize: 'xl' }}>
            {menus.map((menu, idx) => (
              <Link key={idx} href={menu.href} onClick={onClose}>
                {menu.title}
              </Link>
            ))}
            <Button size="lg" onClick={onClose}>
              Sign Up
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  )
}
