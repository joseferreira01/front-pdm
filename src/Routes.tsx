import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import Header from  './components/Header';
import EditeUser from './pages/EditeUser';
import Feed from './pages/Feed';

// import { Container } from './styles';
const {Navigator, Screen} = createStackNavigator();
const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      
        <Navigator screenOptions={{headerShown:false}}>
          <Screen 
            name='EditeUser' component={EditeUser}  options={{
            headerShown:true, 
            header:()=><Header titulo='Editar Usuario'/>}}
          />
          <Screen 
            name='Feed' component={Feed}  options={{
            headerShown:true, 
            header:()=><Header titulo='Feed'/>}}
          />
          
        
          
          
        </Navigator>
        
       


    </NavigationContainer>
  );
}

export default Routes;