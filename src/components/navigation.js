import { NavLink } from 'react-router-dom';
import { IoSunny, IoMoon } from 'react-icons/io5'
import { useRef } from 'react'
import { FiCommand } from 'react-icons/fi';
import {
  HStack,
  Heading,
  VStack,
  Divider,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  IconButton
} from '@chakra-ui/react'


const Palette = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <IconButton icon={<FiCommand />} ref={btnRef} variant='ghost' onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Content</DrawerHeader>

          <DrawerBody>
            <VStack align='flex-start' p={2}>
              <Heading size='sm' fontWeight='thin' opacity={0.6}>pages</Heading>
              <NavLink to='/'>
                <Button variant='ghost'>Home</Button>
              </NavLink>
              <NavLink to='/introduction'>
                <Button variant='ghost'>Intruoduction</Button>
              </NavLink>
              <NavLink to='/about'>
                <Button variant='ghost'>Colophon</Button>
              </NavLink>
            </VStack>
            <Divider />
            <VStack p={2} align='flex-start'>
              <Heading size='sm' fontWeight='thin' opacity={0.6}>puzzles</Heading>
              <NavLink to='/magic'>
                <Button variant='ghost'>Magic Square 15</Button>
              </NavLink>

              <NavLink to='/pascal'>
                <Button variant='ghost'>Pascal Triangle</Button>
              </NavLink>
            </VStack>
            <Divider />
            <VStack p={2} align='flex-start'>
              <Heading size='sm' opacity={0.6} >theme</Heading>
              <Button leftIcon={<IoMoon />} onClick={colorMode === 'light' ? toggleColorMode : null} variant='ghost'>set theme to dark</Button>
              <Button leftIcon={<IoSunny />} onClick={colorMode === 'dark' ? toggleColorMode : null} variant='ghost'>set theme to light</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const Navigation = () => {

  return (
    <HStack justify='space-between' w='full' pt={1}>
      <NavLink to='/'>
        <Heading size='sm'>Mathtastic.</Heading>
      </NavLink>
      <Palette />
    </HStack>
  );
}

export default Navigation;
