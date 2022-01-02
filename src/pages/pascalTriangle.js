import React, {useState} from 'react'
import {Container, VStack, Heading, Text, Input, Flex, HStack } from '@chakra-ui/react';
import intToRoman from '../logic/intToRoman'
import romanToInt from '../logic/romanToInt'
import Hexagon from '../components/hexagon';

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
    <Flex h='full' w='full' direction={{base: 'column', md: 'row'}}>
      <VStack w='full' h='full' padding={5} justifyContent='center' alignItems='center' spacing={5} overflowY='auto'>
        <Heading as='h1' fontWeight='500' size='2xl'>PΔSCΔL TRIΔNGLE</Heading>
        <Container textAlign='center' maxW='container.md'>
          <Text fontSize='lg'>En el triangulo de Pascal, cada número es la suma de los dos números que
            estan directamente encima, como se muestra hasta el nivel 3</Text>
          <Text mt={5}>Calcula el nivel: {randomRow}, escribe la respueta en numeros romanos.</Text>
          <Text>Value: {romanToInt(value.toUpperCase())}</Text>
        </Container>
        <Input value={value} onChange={handleChage} placeholder='Respuesta: VII' variant='filled' />
      </VStack>
      <VStack w='full' h='full' p={5} alignItems='center' spacing={0} justify='center'>
        <HStack >
          <Hexagon delay={1000}/>
        </HStack>

        <HStack spacing={0}>
          <Hexagon delay={2000}/>
          <Hexagon delay={2000}/>
        </HStack>

        <HStack spacing={0}>
          <Hexagon delay={3000}/>
          <Hexagon delay={4000}/>
          <Hexagon delay={3000}/>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default PascalTriangle;
