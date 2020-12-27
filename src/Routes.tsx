import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import inicio from './pages/inicio'
import entar from './pages/entrar'
import registrar from './pages/registrar'
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
            name='inicio' component={inicio}  options={{
            headerShown:false, 
            }}
          />
          <Screen
           name='entar' component={entar}  options={{
            headerShown:true, 
            header:()=><Header title ='ENTAR' showX={false}/>}}
           />
           <Screen
           name='registrar' component={registrar}  options={{
            headerShown:true,
            header:()=><Header title ='REGISTRAR' showX={false}/>}}
           />
          <Screen
           name='ProjectsDetales' component={ProductsDetales}  options={{
            headerShown:true, 
            header:()=><Header title ='Detalhes Projetos'/>}}
           />

          <Screen name='ProjectsRegister' component={ProjectsRegister}  options={{
            headerShown:true, 
            header:()=><Header title='Tela de Cadastro'/>}}/>
        </Navigator>
        
       


    </NavigationContainer>
  );
}

export default Routes;