
import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import { BorderlessButton} from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

  export default function App(){
    const navigation = useNavigation()
    
    return (
       
      <View style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = "white"
    translucent = {true} networkActivityIndicatorVisible = {false}/>
      <Text style={styles.frase}>     JÁ OUVIU FALAR QUE SE UMA BORBOLETA 
      BATE AS ASSAS NA HORA E NO LUGAR CERTO, 
        PODE ACONTECER UM FURACÃO A MILHARES DE QUILÔMETROS!</Text>
      <Image source={require('../../assets/borboleta.gif')} style={styles.img}/>
      <View style={styles.container2}>
      <BorderlessButton style={styles.btn} onPress={() => navigation.navigate('entar')}>
        <Text style={styles.label}>ENTAR</Text>
      </BorderlessButton>
      <BorderlessButton style={styles.btn} onPress={() => navigation.navigate('registrar')}>
        <Text style={styles.label}>REGISTRAR</Text>
      </BorderlessButton>
      </View>
    </View>
    
    )
}

const styles = StyleSheet.create({
  frase:{
    elevation:4,
    position:'absolute',
    top:130,
    left:40,
    letterSpacing:3,
    textAlign:'left',
    width:300,
    lineHeight:40,
    color:'white',
  },
  container:{
    flex:100,
    backgroundColor:'black',
    justifyContent:'flex-end'
  },
  label:{
    color:'black',
    letterSpacing:2
  },
  btn:{
    height:50,
    width:170,
    backgroundColor:'white',
    margin:5,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
  },
  container2:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:20
  },
  img:{
    alignSelf:'flex-end'
  }
})