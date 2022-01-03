import React from 'react'
import {motion} from 'framer-motion';
import {
  Box,
  Heading,
  useColorModeValue,
  Container,
  Text,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';

const MotionContainer = motion(Container);
const MotionBox = motion(Box);

const variants = { 
  hidden: { opacity: 0, x: 0, y: 20 }, 
  enter: { opacity: 1, x: 0, y: 0 }, 
  exit: { opacity: 0, x: 0, y: 20 }
}

const Introduction = () => {
  return (
    <MotionContainer alignItems='flex-start' paddingTop={4} px={0} overflowY='auto' maxW='container.md'
      initial='hidden' animate='enter' exit='exit' variants={variants} transition={{duration: 0.4, type: 'easeInOut'}} h='full' w='full'>
      <MotionBox
        initial={{y: 10, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.1}}

        borderRadius='lg'
        w='full'
        p={3}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        align='center'
      >
        NUMEROS ROMANOS
      </MotionBox>

      <Heading as='h3' variant='section-title'>Introducción</Heading>
      <Text fontSize='md' fontWeight='200' overflowY='auto'>
        Los numeros romanos se representan con siete simbolos diferentes:
        [I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000].<br />
        Por ejemplo, 2 se escribe como II en numeros romano, simplemente dos unos sumados.<br />
        El 18 se escribe como XVIII, que es simplemente X + V + I + I + I.<br />
        Sin embargo el numero 4 no es IIII. En su lugar, el numero 4 se escribe como IV. Como el uno esta
        antes del 5, lo restamos haciendo el 4. El mismo principio se aplica al numero 9, que se escribe como
        IX. <br />
      </Text>
      <Heading as='h3' variant='section-title'>Sustracción</Heading>
      <UnorderedList>
        <ListItem>I (1) puede colocarse antes de la V (5) para hacer 4.</ListItem>
        <ListItem>I (1) puede colocarse antes de la X (10) para hacer 9.</ListItem>
        <ListItem>X (10) puede colocarse antes de la L (50) para obtener 40.</ListItem>
        <ListItem>X (10) puede colocarse antes de la C (100) para obtener 90.</ListItem>
        <ListItem>C (100) puede colocarse antes de D (500) para hacer 400.</ListItem>
        <ListItem>C (100) puede colocarse antes de M (1000) para obtener 900.</ListItem>
      </UnorderedList>
    </MotionContainer>
  );
}

export default Introduction;
