import {HStack, VStack, Heading, Text} from '@chakra-ui/react';
import React from 'react';
import MagicGame from '../components/magicGame';
import Reference from '../components/references'

const rowContent = "|?| + |?| + |?| = 15";
const columnContent = 'put column reference here';

const MagicSquare = () => {
  return (
    <HStack h='full' w='full'>
      <VStack w='full' h='full' alignItems='flex-start' justify='center' spacing={10} p={5}>
        <Heading as='h1' fontWeight='500' size='2xl'>Magic Square 15</Heading>
        <Text fontSize='lg'>
          Ordena la cuadrícula de manera que los números de todas las fila, columnas y diagonal sumen 15.
        </Text>
        <HStack>
          <Reference title='Fila' value={rowContent}/>
          <Reference title='Columna' value={columnContent}/>
        </HStack>
      </VStack>
      <VStack w='full' h='full' justify='center'>
        <MagicGame />
      </VStack>
    </HStack>
  );
}

export default MagicSquare
