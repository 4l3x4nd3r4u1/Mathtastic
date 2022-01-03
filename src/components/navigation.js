import {AiFillHome, AiFillBook} from 'react-icons/ai';
import {BsFillGrid3X3GapFill} from 'react-icons/bs';
import {useColorMode, HStack, Tooltip, IconButton, useColorModeValue} from '@chakra-ui/react';
import {SunIcon, MoonIcon} from '@chakra-ui/icons';
import {GiBallPyramid} from 'react-icons/gi';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  const {toggleColorMode} = useColorMode();

  return (
    <HStack justifyContent='space-between' alignItems='center' w='full' paddingTop={2}>
      <NavLink to='/'>
        <Tooltip label='Home' placement='top'>
          <IconButton
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            color='gray.500' icon={<AiFillHome />} aria-label='home' size='sm' />
        </Tooltip>
      </NavLink>
      <HStack>
        <NavLink to='/introduction'>
          <Tooltip label='Introduction' placement='top'>
            <IconButton
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              color='gray.500' icon={<AiFillBook />} aria-label='Introduction' size='sm' />
          </Tooltip>
        </NavLink>
        <NavLink to='magic'>
          <Tooltip label='Magic Square' placement='top'>
            <IconButton
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              color='gray.500' icon={<BsFillGrid3X3GapFill />} aria-label='Magic Square' size='sm' />
          </Tooltip>
        </NavLink>
        <NavLink to='/pascal'>
          <Tooltip label='Pascal Triangle' placement='top'>
            <IconButton
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              color='gray.500' icon={<GiBallPyramid />} aria-label='Pascal Triangle' size='sm' />
          </Tooltip>
        </NavLink>
      </HStack>
      <Tooltip label='Color Mode' placement='top'>
        <IconButton
          colorScheme={useColorModeValue('purple', 'orange')}
          onClick={toggleColorMode} icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)} aria-label='Toggle theme' size='sm' />
      </Tooltip>
    </HStack>
  );
}

export default Navigation;
