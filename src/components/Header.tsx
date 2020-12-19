import React from 'react';
import { View, Text,StyleSheet} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native'
// import { Container } from './styles';
interface propHeader{
  titulo:string;
}
const Header: React.FC<propHeader> = ({titulo}) => {
  const navigation = useNavigation()
  function goBackToListProducts(){
    navigation.navigate('ListProducts');
  }
  
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBackToListProducts}>
        <Feather name="arrow-left" size={24} color="blue" />
      </BorderlessButton>
      <Text style={styles.title}> {titulo} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#101010',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
    borderWidth:2,
    borderBottomColor: '#FFF'

  },
  title:{

    color:'#FFF',
    fontSize:20,
    fontWeight:'bold',  
    marginRight:100,
    

  }
})
export default Header;