import { motion } from 'framer-motion';
import { Flex, Container, VStack, Stack, Heading, Text, Image } from '@chakra-ui/react';

const MotionContainer = motion(Container);
const MotionImage = motion(Image);

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}


const About = () => {
  return (
    <MotionContainer initial='hidden' animate='enter' exit='exit' variants={variants} transition={{ duration: 0.4, type: 'easeInOut' }}
      maxW='container.lg' h='full'>
      <Flex h='full' align='center'>
        <Stack as='main' align='flex-start' w='full' direction={['column-reverse', 'row']}>
          <VStack pl={[0, 6, 16]} align={['center', 'flex-start']}>
            <Heading my={4} size='xl'>Alrexander Raul</Heading>
            <Text textAlign={['center', 'left']}>Este sitio web está diseñado y desarrollado por Alrex GFR.</Text>
            <Text textAlign={['center', 'left']}>El tech stack es ReactJS (todas las páginas generadas estáticamente),
              Chakra UI y está desplegada en Vercel.</Text>
          </VStack>
          <VStack w='full'>
            <MotionImage
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              rounded='full'
              boxSize='200px'
              objectFit='cover'
              src='./profile.jpg' />
          </VStack>
        </Stack>
      </Flex>
    </MotionContainer>
  );
};

export default About
