import {ChevronRightIcon} from '@chakra-ui/icons'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom';
import {
  useColorModeValue,
  Heading,
  Divider,
  Button,
  VStack,
  Badge,
  Stack,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react';

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionText = motion(Text);

const variants = { 
  hidden: { opacity: 0, x: 0, y: 20 }, 
  enter: { opacity: 1, x: 0, y: 0 }, 
  exit: { opacity: 0, x: 0, y: 20 }
}

const Home = () => {
  return (
    <MotionFlex
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{duration: 0.4, type: 'easeInOut'}}
      direction={{base: 'column', md: 'row'}}
      w='full' h='full' 
    >
      <VStack
        pl={[0, 6, 16]}
        w='full' h='full' align='flex-start' justify='center' spacing={10}
      >
        <MotionBox
          initial={{y: 10, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.8, delay: 0.1}}
        >
          <Heading fontWeight='bold' size='3xl'>MATHTASTIC</Heading>
          <Text fontWeight='thin' >Prueba algunos puzzles matemáticos gratuitos</Text>
        </MotionBox>
        <Stack
          direction={['column', 'row']}
          w={['full', '70%']}
          p={5}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          borderRadius='lg'
          align='center'
          spacing={4}
        >
          <Link to='/introduction'>
            <Button
              fontWeight='thin'
              borderRadius='full'
              colorScheme='teal'
              rightIcon={<ChevronRightIcon />}
            >
              Empezar
            </Button>
          </Link>
          <Divider orientation='vertical' />
          <VStack align='flex-start'>
            <MotionText
              initial={{y: 10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.8, delay: 0.5}}
              fontSize='sm'
            >
              Magic Square 15
              <Badge ml='4' colorScheme='green' variant='outline'>New</Badge>
            </MotionText>
            <MotionText
              initial={{y: 10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.8, delay: 0.8}}
              fontSize='sm'
            >
              Pascal Triangle
              <Badge ml='4' colorScheme='green' variant='outline'>New</Badge>
            </MotionText>
            <Text fontSize='xs' opacity='0.5'>4 de Enero, 2022</Text>
          </VStack>
        </Stack>
      </VStack>
    </MotionFlex>
  );
};

export default Home;
