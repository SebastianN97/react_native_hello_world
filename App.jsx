import React from 'react';
import { StyleSheet } from 'react-native';
import MainScreen from './src/components/MainScreen';
import SecondScreen from './src/components/SecondScreen';
import Login from './src/components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="The First Page" component={MainScreen}/>
        <Stack.Screen name="Another Page" component={SecondScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
