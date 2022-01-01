import React, {useState} from 'react'
import {VStack, Heading, Text, Input, Flex } from '@chakra-ui/react';
import intToRoman from '../logic/intToRoman'
import romanToInt from '../logic/romanToInt'

const randomRow = Math.ceil((Math.random() * 5) + 3);
const pascalRow = [];
let answer = 0;

const computePascalRow = () => {
  for (let i = 0; i < randomRow + 1; i++)
    pascalRow.push(1);

  for (let i = 1; i < randomRow; i++)
    for (let j = i; j > 0; j--)
      pascalRow[j] = pascalRow[j] + pascalRow[j - 1];

  for (let i = 0; i < pascalRow.length; i++)
    answer += pascalRow[i];
};

computePascalRow();

const PascalTriangle = () => {
  const [value, setValue] = useState('');

  const handleChage = (event) => {
    setValue(event.target.value);
    if (event.target.value.toLowerCase() === intToRoman(answer).toLowerCase())
      setTimeout(() => alert('gaa'), 300);
  };

  return (
    <Flex h='full' w='full' direction={{base: 'column-reverse', md: 'row'}}>
      <VStack w='full' h='full' padding={5} justifyContent='center' alignItems='center' spacing={10}>
        <Heading as='h1' fontWeight='500' size='2xl'>PΔSCΔL TRIΔNGLE</Heading>
        <Text fontSize='lg'>Amet rerum dolores harum architecto debitis Quidem a ut quia repellat lorem Vitae
          quis totam rem corrupti culpa aspernatur libero.</Text>
        <Text>Calcula el nivel: {randomRow}, escribe la respueta en numeros romanos</Text>
        <Text>Value: {romanToInt(value.toUpperCase())}</Text>
        <Input value={value} onChange={handleChage} placeholder='Respuesta' variant='filled' />
      </VStack>
      <VStack w='full' h='full' p={5} justifyContent='center' alignItems='center' spacing={10}>
      </VStack>
    </Flex>
  );
};

export default PascalTriangle;
