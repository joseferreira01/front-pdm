
import React, { useState } from 'react'; 
import {StyleSheet,View,StatusBar,TextInput,Text} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation} from '@react-navigation/native';
import api from '../services/api';

export default function App(){


  const navigation = useNavigation();

  const [email1, setEmail1] = useState('');
  const [senha1, setSenha1] = useState('');

  async function handleLoginUser() {

   const login = {
      email: email1,
      senha: senha1
   }
   try {
    const result = await api.post('/usuario/login',login)
    console.log(result.data)
    const {id} = result.data
    navigation.navigate('Home',{id});
  } catch (error) {
    alert("dados incorretos")
    navigation.navigate('inicio')
  }
    
  }
    return (
        
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white"
             translucent = {true} networkActivityIndicatorVisible = {true}/>
             <TextInput 
             style={styles.t1} placeholderTextColor='#A9A9A9' 
             placeholder='Ex: aras.strong8@gmail.com'
             value={email1}
             onChangeText={text=>setEmail1(text)}
             ></TextInput>
             
             <TextInput 
             style={styles.t1} 
             secureTextEntry={true}  
             placeholderTextColor='#A9A9A9' 
             placeholder='Ex: Digite uma senha'
             value={senha1}
             onChangeText={text=>setSenha1(text)}
             ></TextInput>
             <BorderlessButton style={styles.btn}
              onPress={handleLoginUser}
             >
                <Text style={styles.txtbtn}>ok</Text>
            </BorderlessButton>
        </View>
        
    
    )
}

const styles = StyleSheet.create({
  container:{
    flex:100,
    backgroundColor: '#f9fafc',
    alignItems:'center',
    justifyContent:'center'
  },
  btn:{
    width:150,
    marginTop:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    height:60,
    backgroundColor:'black'
  },
  txtbtn:{
    color:'white',
    letterSpacing:2
  },
  t1:{
    width:300,
    padding:10,
    borderColor:'black',
    borderWidth:3,
    borderRadius:10,
    height:50,
    margin:10,
    backgroundColor:'white'
  }
})