import React, {useState} from 'react'
import {Container, VStack, Heading, Text, Input, Flex, HStack, Box, useColorModeValue} from '@chakra-ui/react';
import intToRoman from '../logic/intToRoman'
import romanToInt from '../logic/romanToInt'
import Hexagon from '../components/hexagon';
import {motion} from 'framer-motion';

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const variants = { 
  hidden: { opacity: 0, x: 0, y: 20 }, 
  enter: { opacity: 1, x: 0, y: 0 }, 
  exit: { opacity: 0, x: 0, y: 20 }
}

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
    console.log('answer',intToRoman(answer));
    console.log('evenet', event.target.value);
    setValue(event.target.value);
    if (event.target.value.toLowerCase() === intToRoman(answer).toLowerCase())
      alert('puzzle resuelto');
  };

  return (
    <MotionFlex
      initial='hidden' animate='enter' exit='exit' variants={variants} transition={{duration: 0.4, type: 'easeInOut'}}
      h='full' w='full' direction={{base: 'column', md: 'row'}} overflowY='auto'
    >
      <VStack w='full' h='full'  justify='center' alignItems='flex-start' spacing={2} pl={[0, 6, 16]}>
        <MotionBox
            initial={{y: 10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.1}}
        >
          <Heading as='h1' variant='page-title'>Pascal Triangle</Heading>
        </MotionBox>
        <Heading as='h2' variant='section-title'>Puzzle:</Heading>
        <Container p={0}>
          <Text>En el triangulo de Pascal, cada número es la suma de los dos números que
            estan directamente encima, como se muestra hasta el nivel 3.
          </Text>
          <Text>Calcula el nivel: {randomRow}, escribe la respueta en numeros romanos.</Text>
          <Text>Value: {romanToInt(value.toUpperCase())}</Text>
        <Input mt={2} value={value} onChange={handleChage} placeholder='Respuesta: VII' variant='filled' />
        </Container>
      </VStack>

      <VStack w='full' h='full' justify='center' p={2}>
        <Flex
          flexDir='column'
          justifyContent='center'
          flexWrap='wrap'
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          borderRadius='3xl'
          p={10}
        >

        <HStack w='full' justify='center'>
          <Hexagon delay={1000}/>
        </HStack>

        <HStack  justify='center'>
          <Hexagon delay={2000}/>
          <Hexagon delay={2000}/>
        </HStack>

        <HStack spacing={0}>
          <Hexagon delay={3000}/>
          <Hexagon delay={4000}/>
          <Hexagon delay={3000}/>
        </HStack>
        </Flex>
      </VStack>
    </MotionFlex>
  );
};

export default PascalTriangle;
