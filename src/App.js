import React from 'react';
import {Flex, Container, VStack} from '@chakra-ui/react'
import Navigation from './components/navigation'
import Home from './pages/home'
import Introduction from './pages/introduction'
import PascalTriangle  from './pages/pascalTriangle'
import MagicSquare from './pages/magicSquare'
import { Route, Routes, } from 'react-router-dom';

const routes = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/introduction', name: 'Introduccion', Component: Introduction},
  {path: '/magic', name: 'Magic', Component: MagicSquare},
  {path: '/pascal', name: 'Pascal', Component: PascalTriangle},
];

function App() {
  return (
    <Container maxW='container.lg'>
      <VStack p={0} py={[0, 10, 20]} h='100vh' w='full'>
        <Routes>
          {
            routes.map(({path, name, Component}) => (
              <Route key={name} path={path} element={<Component />} />))
          }
        </Routes>
        <Navigation />
      </VStack>
    </Container>
  );
}

export default App;
