import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,ScrollView,Image,TextInput } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'

import api from '../services/api';

interface Usuario{
  nome:string;
  email:string;
  telefone:string;
  senha:string
}
interface propsId{
  id:number;
}
 
const EditeUser: React.FC = () => {
  const navigation = useNavigation();

  
  const [nome, setNome]= useState('');
  const [email,setEmail] = useState('');
  const [telefone, setTelefone]= useState('');
  const [senha, setSenha] = useState('');

  async function saveEditeProfile(){
    const usuario = {
      id: id,
      nome,
      email,
      telefone,
      senha

    }

    
    await api.post(`usuario/editar/${id}`,usuario);
    navigation.navigate('Home');
  }
  async function cancelar(){
    navigation.navigate('Home');
  }
    
  const route = useRoute();

  const [usuario,setUser]= useState<Usuario>();
  const id = route.params as propsId;

  useEffect(()=>{

    api.get(`usuario/${id}`).then(response=>{
      setUser(response.data);
      console.log(response.data);
    })
  },[id]);
  

  if(!usuario){
    return (
      <View style={styles.container}>
        <Text style={styles.carregando}> Carregando ...</Text>
      </View>
    )
  }
  return (

    <ScrollView style={styles.container}>
      
      

      <View style={styles.box}>
        <Text style={styles.label}>Nome</Text>
        <TextInput  style={ styles.input }  onChangeText={setNome}>{usuario.nome}</TextInput>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>Email</Text>
        <TextInput  style={ styles.input }  onChangeText={setEmail}>{usuario.email}</TextInput>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>Telefone</Text>
        <TextInput  style={ styles.input }  onChangeText={setTelefone}>{usuario.telefone}</TextInput>
                            
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>Senha</Text>
        <TextInput  style={ styles.input }   onChangeText={setSenha}>{usuario.senha}</TextInput>
      </View>
      
      <RectButton onPress={saveEditeProfile} style={styles.btnsingnin}>
                        <Text style={styles.textButton}>Savar Alterações</Text>
      </RectButton>

      <RectButton onPress = {cancelar} style={styles.btnsingnout}>
        <Text style={styles.textButton}>Cancelar</Text>
      </RectButton>      
      
    

    </ScrollView>
    
    
  )
    
  };
  const styles = StyleSheet.create({
    container:{
      marginTop: 30,
      marginLeft: 24,
      marginRight: 24,
      marginBottom: 70

  },
  edit:{
      color: "black",
      fontSize: 22,
      marginLeft: 110,
      marginTop: 20,
      marginBottom: 70

  },
  image:{
      width: 138,
      height: 127,
      borderColor: '#0EBFF6',
      borderWidth: 1.4,
      marginVertical: 10,
      marginHorizontal: 5,
  },
  
  label:{
      fontSize: 20,
      color: "black",
      marginBottom: 8,
      marginLeft: 14,
      
  },
  input:{
      backgroundColor: '#fff',
      borderWidth:1.4,
      borderColor: '#d3e2e6',
      borderRadius:20,
      height:56,
      paddingVertical:18,
      paddingHorizontal: 24,
      marginBottom: 16,
      textAlignVertical: 'top',

  },
  box:{
      marginBottom: 16

  },
  mainbody:{
      marginBottom: 70,
      marginTop: 24,
      marginLeft: 24,
      marginRight: 24

  },
  
  textButton:{
      color: "#0EBFF6",
      fontSize: 20,
      fontWeight:'bold',


  },
  btnsingnin:{
      
      backgroundColor: "#FFFFFF",
      borderRadius: 40,      
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      marginVertical: 30,
      marginHorizontal: 30

  },
  btnsingnout:{
      
      height: 56,
     
      
      backgroundColor: "#FFFFFF",
      borderColor: "#0EBFF6",
      borderRadius: 40,      
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
      marginHorizontal: 30
  },
  carregando:{

  }
    
  });

  export default EditeUser;


// import { Container } from './styles';

