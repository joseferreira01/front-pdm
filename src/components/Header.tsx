import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

// import { Container } from './styles';

interface HeaderProps{
    title: string,
    showX?: boolean
}

const Header: React.FC<HeaderProps> = ({title, showX=true}) => {
    
  const navigation = useNavigation()
  function goback() {
    navigation.navigate('inicio')
  }
    return (

        <View style={styles.container}>
            <BorderlessButton  onPress={goback}>
                <Feather name='arrow-left' size={ 24 } color='black'></Feather>
            </BorderlessButton>
            <Text style={styles.title}> { title } </Text>

        {showX ? (
            <BorderlessButton>
                <Feather name='x' size={ 24 } color='#ff669d'></Feather>
            </BorderlessButton>
            ):(
                <View/>
            )
        }
        </View>

    );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
       letterSpacing:2,
        color: '#8fa7b3',
        fontSize: 16,
    }
});
=======
  container:{
    backgroundColor:'#101010',
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
    borderWidth:2,
    top:35,
    borderBottomColor: '#FFF'

  },
  title:{

    color:'#FFF',
    fontSize:20,
    fontWeight:'bold',  
    marginRight:100,
    
>>>>>>> 820ea75b92fb7125f7adf478659c912d71479e01

export default Header;