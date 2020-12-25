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

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [Denuncias, setDenuncias] = useState<Denuncias[]>([]);
  useFocusEffect(()=>{
    api.get('denuncia').then(res=>{
      setDenuncias(res.data);
      console.log(res.data);
      
    })
  });
  function goToPageDenunciaDetalhes(id:number){
    navigation.navigate('DetalhesDenuncia',{id});
  }
  return (
      <ScrollView>
            
      {
        
        Denuncias.map(Denuncias=>
          <View key={Denuncias.id} style={styles.ItemDenunciasContainer}> 
          <Text style={styles.ItemDenunciaTitulo}> {Denuncias.titulo} </Text>
          <Text style={styles.ItemDenunciaDescricao}> {Denuncias.descricao} </Text>
          <Image
       
        source={require(Denuncias.foto)}
      />
          <TouchableOpacity style={styles.goDenunciaDetalhesButton}
           onPress={()=>{goToPageDenunciaDetalhes(Denuncias.id)}}>
              <Feather name="arrow-right" size={18} />
              
          </TouchableOpacity>
      </View>

        )
      }
      </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{

  },
  ItemDenunciasContainer:{

  },
  ItemDenunciaTitulo:{

  },
  ItemDenunciaDescricao:{

  },
  goDenunciaDetalhesButton:{

  }

});

export default Home;