import React ,{useState,useEffect} from 'react';
import { View, ScrollView, StyleSheet,Text,TouchableOpacity,Image,Dimensions } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api'
import { useFocusEffect,useNavigation } from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import mapMarker from "../../assets/mapMarker/Logo.png";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";

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
              <View>
                   <Image
                     style={styles.ItemDenunciaImage}
                        source={{
                          uri: denuncia.foto,
                       }}
                    />
              </View>
              <View style={styles.detailContainer}>
                <Text style={styles.DataDenuncia}>{denuncia.data}</Text>
             <Text style={styles.titleDenuncia}>{denuncia.titulo}</Text>
                       <View style={ViewMap}>
                       <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -6.726797023982828,
          longitude: -38.44958135713743,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
       
          <Marker
            key={denuncia.id}
            icon={mapMarker}
            coordinate={{
              latitude: denuncia.latitude,
              longitude: denuncia.longitude,
            }}
            calloutAnchor={{
              x: 2.7,
              y: 0.8,
            }}
          >
            <Callout tooltip={true} >
              <View style={styles.calloutContainer}>
               
              </View>
               </Callout>
             </Marker>
        
              </MapView>
          </View>
     
         </View>
         <View style={styles.containerEndereco}>
         <Text style={styles.RuaDenuncia}>{denuncia.rua}</Text> 
         <Text style={styles.BairroDenuncia}>{denuncia.bairro}</Text> 
         <Text style={styles.CidadeDenuncia}>{denuncia.cidade}</Text> 
         <Text style={styles.UfDenuncia}>{denuncia.uf}</Text>       
         </View>
         <Text style={styles.DescricaoDenuncia}>{denuncia.descricao}</Text> 
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

    },
    DataDenuncia:{

    },
    ItemDenunciaImage:{
        width:400,
        height:200,
        padding:19
    },
    containerEndereco:{

    },
    RuaDenuncia:{
        fontSize:25
    },
    BairroDenuncia:{
        fontSize:25
    },
    CidadeDenuncia:{
        fontSize:25
    },
    UfDenuncia:{
        fontSize:25
    },
    DescricaoDenuncia:{

    },
  
    ContainerMap:{

    },
    calloutContainer:{

    },
    map:{

    },
    ViewMap:{

   }
})

export default DetalhesDenuncia;