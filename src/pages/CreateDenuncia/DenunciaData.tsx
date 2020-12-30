import React, { useState } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { RectButton, ScrollView, Switch, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'
import { useRoute, useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

import * as ImagePicker from 'expo-image-picker';
import api from '../../services/api';

interface Positions{
    latitude:number;
    longitude:number;
}
interface ParamsPositions{
    position:Positions;
}

const DenunciaData : React.FC = () => {
    

    const route = useRoute();
    const navigation = useNavigation();
    
    const paramsPosition = route.params as ParamsPositions;

    const[tipo_crime, setTipo_crime] = useState('');//OK
    const[descricao, setDescricao] = useState('');//OK
    const[titulo, setTitulo] = useState('');//OK
    const[uf, setUf] = useState('');//OK
    const[bairro, setBairro] = useState('');//OK
    const[rua, setRua] = useState('');//OK
    const[cidade, setCidade] = useState('');//OK
    const[numero, setNumero] = useState('');
    const[usuario_id, setUsuario_id] = useState('');
    const[ong_id, setOng_id] = useState('');
    const[status_denucia, setStatus_denucia] = useState("Enviada");//ok
    const[imagesURI, setImagesURI] = useState<string[]>([]);


    const tipoCrime = [
            {
                label:"Trafico de animais",
                value:"Trafico de animais"
            },
            {
                label:"Cativeiro de animais",
                value:"Cativeiro de animais"
            },
            {
                label:"Pesca predatoria",
                value:"Pesca predatoria"
            },
            {
                label:"Abandono de incapaz",
                value:"Abandono de incapaz"
            },
            {
                label:"Comercialização ilegal",
                value:"Comercialização ilegal"
            },
            {
                label:"Transporte ilegal",
                value:"Transporte ilegal"
            }
        ];

        const estados = [
            {
                label:"Ceará",
                value:"Ceará"
            },
            {
                label:"Paraíba",
                value:"Paraíba"
            },
            {
                label:"Bahia",
                value:"Bahia"
            },
            {
                label:"Pernambuco",
                value:"Pernambuco"
            }
        ];
        
        const cidades = [
            {
                label:"Barro",
                value:"Barro"
            },
            {
                label:"Juaziro do Norte",
                value:"Juaziro do Norte"
            },
            {
                label:"Sobral",
                value:"Sobral"
            },
            {
                label:"Fortaleza",
                value:"Fortaleza"
            },
            {
                label:"Mauriti",
                value:"Mauriti"
            }
        ];


    async function createDenuncia(){

        const {latitude, longitude} = paramsPosition.position;
       
        const data = new FormData();

        data.append("tipo_crime",tipo_crime);
        data.append("descricao",descricao);
        data.append("titulo",titulo);
        data.append("latitude",String(latitude));
        data.append("longitude",String(longitude));
        data.append("uf",uf);
        data.append("bairro",bairro);
        data.append("rua",rua);
        data.append("cidade", cidade);
        data.append("numero",numero);
        data.append("usuario_id",usuario_id);
        data.append("ong_id",ong_id);
        data.append("status",status_denucia);
     

        imagesURI.forEach((imageURI, index) =>{
            data.append('images',{
                name:`image_${index}.jpg`,
                type:'imag/jpg',
                uri:imageURI
            }as any);
        });

        await api.post("/denuncia",data);
        navigation.navigate("Feed");

    }

    async function handleSelectImages(){
    
        const {status} = await ImagePicker.requestCameraPermissionsAsync();
    
        if(status != 'granted'){
            alert('Precisamos de acesso as suas fotos...');
            return;
        }
    
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing:true,
            quality:1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });
    
        if(result.cancelled){
            return;
        }
    
        const  {uri} = result;
        setImagesURI([...imagesURI, uri]);
    
    }

    return(
        <ScrollView style={styles.container}>

            <Text style={styles.title}>Dados</Text>
            <Text style={styles.label}>Nome</Text>
            <TextInput 
            style={styles.input}
            value={titulo}
            onChangeText={text=>setTitulo(text)}/>

            <Text style={styles.label}>Tipo de Crime</Text>
            <DropDownPicker
                items={tipoCrime}
                defaultValue={tipoCrime[0].value}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item =>setTipo_crime(item)}
                
            />
            <Text style={styles.title}>Endereço</Text>
            <Text style={styles.label}>Estado</Text>
            <DropDownPicker
                items={estados}
                defaultValue={estados[0].value}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item =>setUf(item)}
                
            />

            <Text style={styles.label}>Municipio</Text>
            <DropDownPicker
                items={cidades}
                defaultValue={cidades[0].value}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item =>setCidade(item)}
                
            />

            <Text style={styles.label}>Bairro</Text>
            <TextInput 
            style={styles.input}
            value={bairro}
            onChangeText={text=>setBairro(text)}/>

            <Text style={styles.label}>Rua</Text>
            <TextInput 
            style={styles.input}
            value={rua}
            onChangeText={text=>setRua(text)}/>

            <Text style={styles.label}>Numero</Text>
            <TextInput 
            style={styles.input}
            value={numero}
            onChangeText={text=>setNumero(text)}/>


            <Text style={styles.label}>Descrição</Text>
            <TextInput 
            multiline 
            style={[styles.input,{height:110}]}
            value={descricao}
            onChangeText={text=>setDescricao(text)}/>

            <Text style={styles.title}>Imagens</Text>
            <Text style={styles.label}>Fotos</Text>
            {imagesURI.map(imgURI =>{
                return(
                    <Image key={imgURI} 
                    source={{uri:imgURI}} 
                    style={styles.uploadImage}/>
                );
            })}
            <TouchableOpacity style={styles.imagensIput} onPress={handleSelectImages}>
                <Feather name="plus" size={24} color="#15b6d6"/>
            </TouchableOpacity>

            <RectButton style={styles.nextButton} onPress={createDenuncia}>
                <Text>Enviar</Text>
            </RectButton>
           

        </ScrollView>

    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:30,
        marginHorizontal: 12,
        marginBottom: 8
        

    },
    title:{
        color: '#5c8599',
        fontSize: 24,
        marginTop:20,
        marginBottom: 32,
        paddingBottom: 24,
        borderBottomWidth: 0.8,
        borderBottomColor: "#D3E2E6"

    },
    label:{
        color: '#8fa7b3',
        marginBottom: 8,

    },
    input:{
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#D3E2E6',
        borderRadius: 20,
        height: 56,
        paddingVertical:18,
        paddingHorizontal:24,
        marginBottom:8,
        textAlignVertical:"top"

    },
    imagensIput:{
        backgroundColor: 'rgb(255,255,255)',
        borderStyle: 'dashed',
        borderColor: "#96D2F0",
        borderWidth: 1.4,
        borderRadius: 20,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,

    },

    uploadImage:{
        width:64,
        height:64,
        borderRightWidth:20,

    },

    switchContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16
    },
    nextButton:{
        backgroundColor: '#15c3d6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 32,

    },
})

export default DenunciaData;