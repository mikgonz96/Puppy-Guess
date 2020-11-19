import 'react-native-gesture-handler';
import * as React from 'react';
import Inicio from './Componentes/Inicio';
import Camara from './Componentes/Camara';
import { NavigationContainer } from '@react-navigation/native';
import { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  
  render (){
    
    return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen options={{headerShown: false}} name="Inicio" component={Inicio}  />
        <Stack.Screen name="Puppy Guess" component={Camara}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    )
    
  };

}
