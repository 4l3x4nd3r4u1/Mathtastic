import React from 'react';
import {Container, VStack} from '@chakra-ui/react'
import Navigation from './components/navigation'
import Home from './pages/home'
import Introduction from './pages/introduction'
import PascalTriangle  from './pages/pascalTriangle'
import MagicSquare from './pages/magicSquare'
import { Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const routes = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/introduction', name: 'Introduccion', Component: Introduction},
  {path: '/magic', name: 'Magic', Component: MagicSquare},
  {path: '/pascal', name: 'Pascal', Component: PascalTriangle},
];


function App() {
  const location = useLocation();

  return (
    <Container maxW='container.lg'>
      <VStack  py={[2, 4, 6]} h='100vh'>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Routes location={location} key={location.pathname}>
            {
              routes.map(({path, name, Component}) => (
                <Route key={name} path={path} element={<Component />} />))
            }
          </Routes>
        </AnimatePresence>
        <Navigation />
      </VStack>
    </Container>
  );
}

export default App;
