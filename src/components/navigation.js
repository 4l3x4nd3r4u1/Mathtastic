import {AiFillHome, AiFillBook} from 'react-icons/ai';
import {BsFillGrid3X3GapFill} from 'react-icons/bs';
import {SunIcon, MoonIcon} from '@chakra-ui/icons';
import {GiBallPyramid} from 'react-icons/gi';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion'
import { useState } from 'react';
import {
  useColorMode,
  HStack,
  Tooltip,
  IconButton,
  useColorModeValue,
  Box
} from '@chakra-ui/react';

const MotionBox = motion(Box);

const Navigation = () => {
  const {toggleColorMode} = useColorMode();
  const [rotation, setRotaton] = useState(0);

  return (
    <HStack justifyContent='space-between' alignItems='center' w='full' paddingTop={2}>
      <NavLink to='/'>
        <Tooltip label='Home' placement='top'>
          <IconButton
            bg={useColorModeValue('whitealpha.500', 'whitealpha.200')}
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
        <MotionBox 
          animate={{rotate: rotation}}
          onClick={() => setRotaton(rotation + 90)}
        >
          <IconButton
            colorScheme={useColorModeValue('purple', 'orange')}
            onClick={toggleColorMode} icon={useColorModeValue(<MoonIcon />, <SunIcon />)} aria-label='Toggle theme' size='sm' />
        </MotionBox>
      </Tooltip>
    </HStack>
  );
}

export default Navigation;
