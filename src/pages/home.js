import {Text, VStack, Heading, Container} from '@chakra-ui/react';

const intros = [
  'Los juegos de rompecabezas matemáticos son una excelente manera de desarrollar las habilidades matemáticas de tus hijos ',
  'Si quieres que tu hijo destaque, es importante que empiece a trabajar con los números desde el principio, eso significa que ' +
  'es hora de coger un lápiz y hacer algunos puzzles. '
];

const Home = () => {
  return (
    <VStack w='full' h='full' justify='space-around'>
      <Container textAlign='center'>
        <Heading fontWeight='500' size='4xl'>MATHTASTIC</Heading>
        <Text fontSize='lg' mt={6}>Prueba algunos puzzles matemáticos gratuitos</Text>
      </Container>

      <Container textAlign='center'>
        <Text fontSize='lg'>{intros[Math.floor(Math.random() * intros.length)]}</Text>
      </Container>
    </VStack>
  );
};

export default Home

