import {View, Text, Image, StyleSheet} from 'react-native';
import { Button, TextInput } from 'react-native';


export default function Login({navigation}){
    
    return(
        
        <View style={styles.container}>

            <Image style={styles.imagem} 
            source={require('../Sources/avatar.jpg')} />

            <Text style={styles.txt_title}>

            Faça seu <Text style={styles.txt_title_vermelho}>
            Login</Text>:</Text>

            <TextInput style={styles.input} placeholder='Usuário' placeholderTextColor={'#535353ff'}/>
            <TextInput style={styles.input} placeholder='Senha' placeholderTextColor={'#535353ff'}/>

            <View style={styles.row}>
            <Button title="Enviar" color="#ff0000ff"
            onPress={() => navigation.navigate('Home Screen')}/>

                        <Button title="Pessoas" color="#00b7ffff"
            onPress={() => navigation.navigate('Pessoas Tela')}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
    },
    view_image :{
        flexDirection: 'row',
        alignContent: 'space-around',
        gap: 30,
    },
    imagem:{
        height: 180,
        width: 180,
        borderRadius: 50,
    },
    txt_title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000ff',
    },
    txt_title_vermelho: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ff0000ff'
    },
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
    },
     row:{
        
        padding: 10,
        gap: 43,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})