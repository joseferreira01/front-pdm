import React ,{useState} from 'react';
import { View, ScrollView, StyleSheet,Text,TouchableOpacity,Image } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api'
import { useFocusEffect,useNavigation } from '@react-navigation/native';


//seja profissional
// import { Container } from './styles';
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
const Home: React.FC = () => {
  const navigation = useNavigation();
  const [denuncias, setDenuncias] = useState<Denuncias[]>([]);
  useFocusEffect(()=>{
    api.get('denuncia').then(res=>{
      setDenuncias(res.data);
      console.log(res.data);
      
    })
  });
  function goToPageDenunciaDetalhes(id:number){
    // 
    navigation.navigate('DenunciaDetalhes',{id});
  };
  function denunciar(){
    //Nome da tela de cadastro de denuncias
    navigation.navigate('EditeUser');

  }
  return (
      <ScrollView>
         
         {
        
        denuncias.map(Denuncias=>
          <View key={Denuncias.id} style={styles.ItemDenunciasContainer}>
       
          <Text style={styles.ItemDenunciaTitulo}> {Denuncias.titulo} </Text>
          <Image
        style={styles.ItemDenunciaImage}
        source={{
          uri: Denuncias.foto,
        }}

          />

      <Text style={styles.ItemDenunciaDescricao}> {Denuncias.descricao} </Text>
        
          <TouchableOpacity style={styles.goDenunciaDetalhesButton}
           onPress={()=>{goToPageDenunciaDetalhes(Denuncias.id)}}>
              <Feather name="arrow-right" size={18} /> 
          </TouchableOpacity>
      </View>
          
          )       
      }
         
           
    <View style={styles.menubar}>

    
       <View  style={styles.ItemDenunciasContainer1}>
        <Text  style={styles.createDenunciaText}> denunciar </Text>
        <RectButton style={styles.createDenunciaButton}
          onPress={denunciar}
        >
        <Feather name="plus" size={18} />
        </RectButton>
      </View>
      <View  style={styles.ItemDenunciasContainer1}>
        <Text  style={styles.ToPageProfileText}> Perfil </Text>
        <RectButton style={styles.ToPageProfileDenunciaButton}
          onPress={denunciar}
        >
        <Feather name="arrow-down-circle" size={18} />
        </RectButton>
      </View>
      </View>
      </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{
    margin:20,
  } ,
  ItemDenunciasContainer1:{
    flexDirection:'row',
    margin:20,
    alignItems:'center',
    borderWidth:1,
    borderRadius:20,
    width:180,
    justifyContent:'center'
  },
  menubar:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    height:100,
  },
  ItemDenunciasContainer:{
    
  },
  createDenunciaText:{
    fontSize:20,
  },
  createDenunciaButton:{
    justifyContent:'center',
    margin:20
  },
  ToPageProfileText:{
    fontSize:20,
    alignItems:'center',
    justifyContent:'center'
  },
  ToPageProfileDenunciaButton:{
    justifyContent:'center',
    margin:20
  },
  goDenunciaDetalhesButton:{
    alignSelf:'flex-end',
    margin:30,
  },
  ItemDenunciaTitulo:{
    margin:20,
    fontSize:20
  },
  ItemDenunciaImage:{
    width:350,
    margin:20,
    height:300
  },
  ItemDenunciaDescricao:{
    letterSpacing:2,
    
    width:360,
    flex:1,
    justifyContent:'center',
    alignSelf:'center'
  }
});

export default Home;