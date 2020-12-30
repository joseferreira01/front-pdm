import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import inicio from './pages/inicio'
import entar from './pages/entrar'
import registrar from './pages/registrar'
import Header from  './components/Header';
import home from './pages/Home';
import selectPosition from './pages/CreateDenuncia/SelectMapPosition';
import denunciaData from './pages/CreateDenuncia/DenunciaData';
import  DenunciaDetalhes from "./pages/DenunciaDetalhes";


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
            name='selectPosition' component={selectPosition}  options={{
            headerShown:true, 
            header:()=><Header title='Marcar Denuncia'/> 
            }}
          />

        <Screen 
            name='denunciaData' component={denunciaData}  options={{
            headerShown:true,
            header:()=><Header title='Denunciar'/> 
            }}
          />
          
          <Screen 
            name='Home' component={home}  options={{
            headerShown:true 
            }}
          />
          
           <Screen 
            name='DenunciaDetalhes' component={DenunciaDetalhes}  options={{
            headerShown:true, 
            header:()=><Header title='Detalhes denuncia'/>}}
          />
        </Navigator>
    </NavigationContainer>
  );
}

export default Routes;