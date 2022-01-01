import React from 'react'
import {HStack, VStack, Heading, Text, Container, ListItem, UnorderedList} from '@chakra-ui/react';

const Introduction = () => {
  return (
    <HStack h='full' w='full'>
      <VStack w='full' h='full' p={5} overflowY='auto'>
        <Heading  as='h1' fontWeight='500' size='2xl'>Introduction</Heading>
        <Container maxW='container.md' py={10} overflowY='auto'>
          <Text mt={5}>Los numeros romanos se representan con siete simbolos diferentes:
            [I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000].<br />
            Por ejemplo, 2 se escribe como II en numeros romano, simplemente dos unos sumados.<br />
            El 18 se escribe como XVIII, que es simplemente X + V + I + I + I.<br />
            Sin embargo el numero 4 no es IIII. En su lugar, el numero 4 se escribe como IV. Como el uno esta
            antes del 5, lo restamos haciendo el 4. El mismo principio se aplica al numero 9, que se escribe como
            IX. <br /> Hay seis casos en los que se utiliza la sustraccion:
          </Text>
          <UnorderedList mt={5}>
            <ListItem>I (1) puede colocarse antes de la V (5) para hacer 4</ListItem>
            <ListItem>I (1) puede colocarse antes de la X (10) para hacer 9</ListItem>
            <ListItem>X (10) puede colocarse antes de la L (50) para obtener 40</ListItem>
            <ListItem>X (10) puede colocarse antes de la C (100) para obtener 90</ListItem>
            <ListItem>C (100) puede colocarse antes de D (500) para hacer 400</ListItem>
            <ListItem>C (100) puede colocarse antes de M (1000) para obtener 900</ListItem>
          </UnorderedList>

        </Container>
      </VStack>
    </HStack>
  );
}

export default Introduction;
