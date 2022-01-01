import {Text, VStack, Heading, Container} from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack w='full' h='full' justifyContent='center' spacing={15}>
      <Heading fontWeight='500' size='4xl'>MATHTASTIC</Heading>
      <Container>
        <Text fontSize='lg' align='center'>Sit veritatis voluptates asperiores quisquam inventore nam
          eligendi dolorem? Ab ipsa voluptatem culpa rem iste? Expedita odio optio nostrum
          molestias</Text>
      </Container>
    </VStack>
  );
};

export default Home

