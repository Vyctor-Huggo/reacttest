import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import React from 'react';

// Ajuste de tipo para o global
declare const global: any;

// Polyfill para setImmediate
if (!global.setImmediate) {
  global.setImmediate = (handler: (...args: any[]) => void, ...args: any[]) => {
    const timeoutId = setTimeout(() => handler(...args), 0);
    return timeoutId;
  };
}

// Polyfill para clearImmediate
if (!global.clearImmediate) {
  global.clearImmediate = (timeoutId: any) => {
    clearTimeout(timeoutId);
  };
}

// Silenciar warning do setImmediate se necessário
LogBox.ignoreLogs(['setImmediate']);

// App principal
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
