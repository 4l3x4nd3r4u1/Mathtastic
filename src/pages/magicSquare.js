import {Container, HStack, VStack, Heading, Text, Flex} from '@chakra-ui/react';
import React from 'react';
import MagicGame from '../components/magicGame';
import Reference from '../components/references'
import {motion} from 'framer-motion';

const MotionFlex = motion(Flex);
const variants = { 
  hidden: { opacity: 0, x: 0, y: 20 }, 
  enter: { opacity: 1, x: 0, y: 0 }, 
  exit: { opacity: 0, x: 0, y: 20 }
}

const rowContent = '| ? | + | ? | + | ? | = 15';
const columnContent = '| ? | + | ? | + | ? | = 15'

const MagicSquare = () => {
  return (
    <MotionFlex initial='hidden' animate='enter' exit='exit' variants={variants} transition={{duration: 0.4, type: 'easeInOut'}} h='full' w='full' direction={{base: 'column', md: 'row'}}>
        <VStack w='full' h='full' alignItems='center' justify='center' spacing={10} p={5}>
          <Heading as='h1' fontWeight='500' size='2xl'>Magic Square 15</Heading>
          
        <Container textAlign='center'>
          <Text fontSize='lg'>
            Ordena la cuadrícula de manera que los números de todas las fila, columnas y diagonal sumen 15.
          </Text>
        </Container>
          <HStack>
            <Reference title='Fila =  >' value={rowContent} />
            <Reference title='Columna =  v' value={columnContent} />
          </HStack>
        </VStack>
        <VStack w='full' h='full' justify='center'>
          <MagicGame />
        </VStack>
      </MotionFlex>
  );
}

export default MagicSquare
