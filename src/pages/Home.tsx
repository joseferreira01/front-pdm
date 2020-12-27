import React ,{useState} from 'react';
import { View, ScrollView, StyleSheet,Text,TouchableOpacity,Image } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api'
import { useFocusEffect,useNavigation } from '@react-navigation/native';

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
    ong_id:number

  }
interface PropesId{
  id:number;
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
  function goToPageDenunciaRegiste(){
    //Nome da tela de cadastro de denuncias
    navigation.navigate('nomeDaTela');
  };
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
       <View  style={styles.ItemDenunciasContainer}>
        <Text  style={styles.createDenunciaText}> Faça uma denuncia </Text>
        <RectButton style={styles.createDenunciaButton}
          onPress={goToPageDenunciaRegiste}
        >
        <Feather name="plus" size={18} />
        </RectButton>
      </View>
      <View  style={styles.ItemDenunciasContainer}>
        <Text  style={styles.ToPageProfileText}> Ir para meu perfil </Text>
        <RectButton style={styles.ToPageProfileDenunciaButton}
          onPress={goToPageDenunciaRegiste}
        >
        <Feather name="arrow-down-circle" size={18} />
        </RectButton>
      </View>

      </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{
    width: 420,
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    backgroundColor:'pink',
    display: 'flex'
  },
  ItemDenunciasContainer:{

  },
  ItemDenunciaTitulo:{
     fontSize:24
  },
  ItemDenunciaDescricao:{
fontSize:20
  },
  goDenunciaDetalhesButton:{
    width:200,
    height:230,
    padding:20,
    color:'#DAA520'
    

  },
  ItemDenunciaImage:{
    width:150,
    height:180,
    padding:30,
    borderRadius:5,
    marginLeft:50
  },
  createDenunciaText:{
    fontSize:25,
    padding:20

  },
  createDenunciaButton:{
    width:200,
    height:230,
    padding:20,
    color:'#8B4513'

  },
  ToPageProfileText:{
    width:30,
    height:30,
    padding:20
  },
  ToPageProfileDenunciaButton:{
    width:200,
    height:230,
    padding:20,
    color:'#8B4513'
    
  }

});

export default Home;