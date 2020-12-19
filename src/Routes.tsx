import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import ListProjects from './pages/LiatProjects'
import ProjectsRegister from './pages/ProjectsRegister'
import ProductsDetales from './pages/ProjectsDetalhes';
import Header from  './components/Header';

// import { Container } from './styles';
const {Navigator, Screen} = createStackNavigator();
const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      
        <Navigator screenOptions={{headerShown:false}}>
          <Screen 
            name='ListProjects' component={ListProjects}  options={{
            headerShown:true, 
            header:()=><Header titulo='Lista Projetos'/>}}
          />
          <Screen
           name='ProjectsDetales' component={ProductsDetales}  options={{
            headerShown:true, 
            header:()=><Header titulo='Detalhes Projetos'/>}}
           />
          <Screen name='ProjectsRegister' component={ProjectsRegister}  options={{
            headerShown:true, 
            header:()=><Header titulo='Tela de Cadastro'/>}}/>
        </Navigator>
        
       


    </NavigationContainer>
  );
}

export default Routes;