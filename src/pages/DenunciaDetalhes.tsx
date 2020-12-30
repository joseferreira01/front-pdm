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

    const [denuncia,setDenuncia]= useState<Denuncias>();
    const {id} = route.params as propsId;
  
    useEffect(()=>{
      api.get(`denuncia/${id}`).then(response=>{
        setDenuncia(response.data);
        console.log('detale ',response.data);
        console.log(denuncia)
        
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
              
                <Text style={styles.nome}>Nome denúncia:</Text>  
                <Text style={styles.title}>{denuncia.titulo}</Text>
                
               
             
             <Text style={styles.label}>Data:</Text> 
             <Text style={styles.titleDenuncia}>{denuncia.data}</Text>
             
                       <View>
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
            style={styles.marker}
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
           <View style={styles.box}>
               <Text style={styles.label}>Rua:</Text>
               <Text style={styles.rua}>{denuncia.rua}</Text> 

           
           </View>
           <View style={styles.box}>
              <Text style={styles.label}>Bairro:</Text>
              <Text style={styles.input}>{denuncia.bairro}</Text>
           </View>
           <View style={styles.box}>
              <Text style={styles.label}>Cidade:</Text>
              <Text style={styles.input}>{denuncia.cidade}</Text>
           </View>
           <View style={styles.box}>
              <Text style={styles.label}>UF:</Text>
              <Text style={styles.input}>{denuncia.uf}</Text>
           </View>
         
         
         
               
         </View>
         <View style={styles.containerDenuncia}>
             <Text style={styles.DescricaoDenuncia}>{denuncia.descricao}</Text>

         
         </View>
         
          
    </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 10

    },
    nome:{
      color: '#000',      
      fontSize: 30,  
    },

    label:{
      color: '#000',      
      fontSize: 25,  
      

    },
    box:{
      flexDirection:'row',
    },
    rua:{
      fontSize: 20,
      color:'#000',
      marginBottom:1,
      marginLeft: 5,
      marginTop: 5,
    },
    CarregandoText:{
        fontSize:20,
        color: '#000'
    },
    detailContainer:{
        flex:1

    },
    title:{
      fontSize: 30,
      color:'#00008B'
    },
    titleDenuncia:{
        fontSize: 25,
        color:'#00008B',
       
        marginBottom:1
        

    },
    DataDenuncia:{
      
      width: 96,
      height: 21,
      
      marginLeft: 90

    },
    ItemDenunciaImage:{
      resizeMode: "cover",
      height:200,
      padding:19,
      width: Dimensions.get("screen").width,
    },
    containerEndereco:{
      marginTop: 10,

    },
    input:{
        fontSize:20,
        marginTop: 5,
        marginLeft: 5
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
      fontSize:35,
      alignItems: 'center',
      marginLeft: 10

    },
    containerDenuncia:{
      marginTop: 25,
      borderColor: '#000',
      borderRadius:20,
      borderWidth:1.4,
      height: 150,

      
    },
  
    ContainerMap:{
      width:400

    },
    calloutContainer:{

    },
    map:{
      width: 350,
      height:200,
      backgroundColor:'#6A5ACD',
      borderRadius: 20,
      overflow: "hidden",
      borderWidth: 1.2,
      borderColor: "#b3dae2",
      marginTop: 40,
      marginLeft: 10,
      justifyContent: 'center',
       alignItems: 'center',

    },
    ViewMap:{

   },
   marker:{
    width: 400,
    height:300,
    backgroundColor:'#6A5ACD'

   }
})

export default DetalhesDenuncia;