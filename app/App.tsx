// app/App.tsx
import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './(tabs)/index'; // Ajuste o caminho conforme sua estrutura

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

// Registrando o componente principal
registerRootComponent(App);
