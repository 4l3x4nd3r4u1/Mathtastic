import {AiFillHome, AiFillBook} from 'react-icons/ai'
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {useColorMode, HStack, Tooltip, IconButton} from '@chakra-ui/react'
import {MdDarkMode} from 'react-icons/md'
import {GiBallPyramid} from 'react-icons/gi'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
  const {toggleColorMode} = useColorMode();
  return (
    <HStack justifyContent='space-evenly' w='full'>
      <NavLink to='/'>
        <Tooltip label='Home' placement='top'>
          <IconButton color='gray.500' icon={<AiFillHome />} aria-label='home' />
        </Tooltip>
      </NavLink>
      <NavLink to='/introduction'>
        <Tooltip label='Introduction' placement='top'>
          <IconButton color='gray.500' icon={<AiFillBook />} aria-label='Introduction' />
        </Tooltip>
      </NavLink>
      <NavLink to='magic'>
        <Tooltip label='Magic Square' placement='top'>
          <IconButton color='gray.500' icon={<BsFillGrid3X3GapFill/>} aria-label='Magic Square' />
        </Tooltip>
      </NavLink>
      <NavLink to='/pascal'>
        <Tooltip label='Pascal Triangle' placement='top'>
          <IconButton color='gray.500' icon={<GiBallPyramid />} aria-label='Pascal Triangle' />
        </Tooltip>
      </NavLink>
      <Tooltip label='Settings' placement='top'>
        <IconButton onClick={toggleColorMode} color='gray.500' icon={<MdDarkMode />} aria-label='Settings' />
      </Tooltip>
    </HStack>
  );
}

export default Navigation;
