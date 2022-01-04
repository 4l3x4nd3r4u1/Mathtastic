import React from 'react';
import {Button} from '@chakra-ui/react';
import {motion} from 'framer-motion';

const MotionButton = motion(Button);

const Square = ({value, onClick}) => {
  return (
    <MotionButton
      whileHover={{scale: 1.1}}
      w='50px'
      h='50px'
      colorScheme='teal'
      onClick={onClick}
    >
      {value}
    </MotionButton>
  );
}


export default Square;
