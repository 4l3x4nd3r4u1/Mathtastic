import {Container,VStack, Heading, Text, Flex, useColorModeValue, Box} from '@chakra-ui/react';
import React from 'react';
import MagicGame from '../components/magicGame';
import Reference from '../components/references'
import {motion} from 'framer-motion';

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const variants = { 
  hidden: { opacity: 0, x: 0, y: 20 }, 
  enter: { opacity: 1, x: 0, y: 0 }, 
  exit: { opacity: 0, x: 0, y: 20 }
}

const target = '| ? | + | ? | + | ? | = 15';

const MagicSquare = () => {
  return (
    <MotionFlex
      initial='hidden' animate='enter' exit='exit' variants={variants} transition={{duration: 0.4, type: 'easeInOut'}}
      h='full' w='full' direction={{base: 'column', md: 'row'}} overflowY='auto'
    >
      <VStack pl={[0, 6, 16]} w='full' h='full' alignItems='flex-start' justify='center' spacing={5}>
        <MotionBox
          initial={{y: 10, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.8, delay: 0.1}}
        >
          <Heading as='h1' variant='page-title'>Magic Square 15</Heading>
        </MotionBox>
        <Heading as='h2' variant='section-title'>Puzzle:</Heading>
        <Container p={0}>
          <Text >Ordena la cuadrícula de manera que los números de todas las fila, columnas y diagonal sumen 15.</Text>
        </Container>
        <Flex  flexWrap='wrap' gap={2}>
          <Reference title='Fila ~>' value={target} />
          <Reference title='Columna ↓' value={target} />
          <Reference title='Diagonal ↘' value={target} />
        </Flex>
      </VStack>

      <VStack
        pt={[4, 0, 0]}
        w='full'
        h='full'
        justify='center'
      >
        <Box
          p={10}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          borderRadius='3xl'
        >
          <MagicGame />
        </Box>
      </VStack>
    </MotionFlex>
  );
}

export default MagicSquare
