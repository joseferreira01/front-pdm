import React ,{useState,useEffect} from 'react';
import { View, ScrollView, StyleSheet,Text,TouchableOpacity,Image } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api'
import { useFocusEffect,useNavigation } from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

interface Denuncias {
    id: number;
    titulo: string;
    tipo_crime:string;
    descricao: string;
    status:string;
    latitude:number;
    longitude:number;
    uf:string;
    cidade:string;
    bairro:string;
    rua:string;
    foto:string;
    numero:number;
    usuario_id:number;
    ong_id:number;
    data:string

  }
  interface propsId{
    id:number;
  }

const DetalhesDenuncia: React.FC = () => {
    const route = useRoute();

    const [denuncia,setDenuncias]= useState<Denuncias>();
    const {id} = route.params as propsId;
  
    useEffect(()=>{
      api.get(`denuncia/${id}`).then(response=>{
        setDenuncias(response.data);
        console.log('detale ',response.data)
        
      })
    },[id]);
  
    if(!denuncia){
      return (
        <View style={styles.container}>
          <Text style={styles.CarregandoText}> Carregando ...</Text>
        </View>
      )
    }
  return (
      <ScrollView>
          <View style={styles.container}>
      <View style={styles.detailContainer}>
      <Text style={styles.titleDenuncia}>{denuncia.titulo}</Text>
      <Text style={styles.titleDenuncia}>{denuncia.data}</Text>
      
     
      </View>
    </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    CarregandoText:{
        fontSize:20,
        color:'#000000'
    },
    detailContainer:{
        flex:1

    },
    titleDenuncia:{
        fontSize:34,
        color:'#000',
        padding:20,
        backgroundColor:'#808000'

    }
})

export default DetalhesDenuncia;