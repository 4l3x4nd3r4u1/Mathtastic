import React from 'react';
import {Button} from '@chakra-ui/react'

const Square = ({value, onClick}) => {
  return (
    <Button
      w='50px'
      h='50px'
      colorScheme='teal'
      variant='outline'
      onClick={onClick}
    >
      {value}
    </Button>
  );
}

export default Square;
