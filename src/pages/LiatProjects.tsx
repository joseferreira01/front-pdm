import React ,{useState} from 'react';
import { View, ScrollView, StyleSheet,Text,TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api'
import { useFocusEffect,useNavigation } from '@react-navigation/native';
interface Project{
  id: number;
  title: string;
  url:string
}

const ListProjects: React.FC = () => {
  const navigation = useNavigation();
  const [projects, setProjects] = useState<Project[]>([]);
  useFocusEffect(()=>{
    api.get('projetos').then(res=>{
      setProjects(res.data);
      
    })
  });
  function goToPageProjectRegiste(){
    navigation.navigate('ProjectsRegister');
  };
  function goToPageProjectDetalhes(id:number){
    navigation.navigate('ProjectsDetales',{id});
  };
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.IntenProjectsTitle}>projetinhos para 21</Text>
      {
        projects.map(project=>
          <View key={project.id} style={styles.ItemProjectContainer}> 
          <Text style={styles.ItemProjectTitle}> {project.title} </Text>
          <TouchableOpacity style={styles.goProjectsDetalhesButton}
           onPress={()=>{goToPageProjectDetalhes(project.id)}}>
              <Feather name="arrow-right" size={18} />
              
          </TouchableOpacity>
      </View>

        )
      }


      <View  style={styles.ItemProjectContainer}>
        <Text  style={styles.createProjectText}> Cadastrar Projects </Text>
        <RectButton style={styles.createProjectButton}
          onPress={goToPageProjectRegiste}
        >
        <Feather name="plus" size={18} />
        </RectButton>
      </View>
    </ScrollView>
  );
};


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
  IntenProjectsTitle:{
    color:'blue',
    marginTop:30,
    fontSize:20,
    height:100,
    fontWeight:'bold',
    
    textAlign:'center'
  },
  ItemProjectContainer:{
     alignSelf:'center',
     width:430,
     marginTop:5,
     borderBottomColor:'black',
     borderBottomWidth:1,
     padding: 20,
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems:'flex-end',

  },
  ItemProjectTitle:{
    color:'#8889a5',
    fontSize:10,
    fontWeight:'100',
    width:200,


  },
  createProjectButton:{
    backgroundColor:"orange",
    borderRadius:28,
    height:30,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:20,
    flexDirection:'row',
    elevation:3

  },
  goProjectsDetalhesButton:{
    width:100,
    height:30,
    backgroundColor: "orange",
    borderRadius:24,
    justifyContent: 'center',
    alignItems:'center',
  },
  createProjectText:{
    color:'black',
    fontSize:9,
    fontWeight:'bold',
    marginLeft:10
  },
  
  
});

export default ListProjects;