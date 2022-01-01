import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button
} from '@chakra-ui/react'

const Reference = ({title, value}) => {
  return (
    <Popover placement='top-start'>
      <PopoverTrigger>
        <Button>{title}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>{title}</PopoverHeader>
        <PopoverBody>{value}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Reference;
