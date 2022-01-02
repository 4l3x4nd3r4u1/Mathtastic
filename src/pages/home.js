import {Text, VStack, Heading, Container} from '@chakra-ui/react';
import {motion} from 'framer-motion'

const MotionContainer = motion(Container);
const MotionVStack = motion(VStack);

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 }, 
  enter: { opacity: 1, x: 0, y: 0 }, 
  exit: { opacity: 0, x: 0, y: 20 }
}

const intros = [
  'Los juegos de rompecabezas matemáticos son una excelente manera de desarrollar las habilidades matemáticas de tus hijos ',
  'Si quieres que tu hijo destaque, es importante que empiece a trabajar con los números desde el principio, eso significa que ' +
  'es hora de coger un lápiz y hacer algunos puzzles. '
];

const Home = () => {
  return (
    <MotionVStack initial='hidden' animate='enter' exit='exit' variants={variants} transition={{duration: 0.4, type: 'easeInOut'}} w='full' h='full' justify='space-around'>
      <MotionContainer
        textAlign='center'
      >
        <Heading fontWeight='500' size='4xl'>MATHTASTIC</Heading>
        <Text fontSize='lg' mt={6}>Prueba algunos puzzles matemáticos gratuitos</Text>
      </MotionContainer>

      <MotionContainer
        initial={{y: 10, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.1}}
        textAlign='center'
      >
        <Text fontSize='lg'>{intros[Math.floor(Math.random() * intros.length)]}</Text>
      </MotionContainer>
    </MotionVStack>
  );
};

export default Home

