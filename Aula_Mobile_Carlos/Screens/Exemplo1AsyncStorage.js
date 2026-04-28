import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Exemplo1AsyncStorage() {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [nomeSalvo, setNomeSalvo] = useState()

    const SalvarPessoa = async () => {
        const pessoa = {
            nome: nome,
            senha: senha
        }
        try {
            const jsonValue = JSON.stringify(pessoa);
            await AsyncStorage.setItem('@pessoa', jsonValue);
            alert('Pessoa Salva!')
        } catch (e) {
            console.log(e)
        }
    };

    const MostrarPessoa = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@pessoa');
            if (jsonValue != null){
                const pessoa = JSON.parse(jsonValue)
                setNomeSalvo(pessoa)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        MostrarPessoa();
    }, [])
    // vai executar assim que entrar na tela
    // se estiver com algo dentro, vai executar quando ouver mudança

    return (
        <View style={styles.container}>

                        <Image style={styles.imagem} 
                        source={require('../Sources/grêmio.jpg')} />
            <TextInput
                style={styles.input} 
                placeholder='nome'
                value={nome}
                onChangeText={setNome}
                placeholderTextColor={'#535353ff'}
            />
            <TextInput
                style={styles.input} 
                placeholder='senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
                placeholderTextColor={'#535353ff'}
            />

            <View>

            <Button 
            style={styles.button} 
            title='Salvar Pessoa' onPress={SalvarPessoa} />

            </View>

            <Text> {nomeSalvo?.nome} </Text>
            <Text> {nomeSalvo?.senha} </Text>
        </View>
    )

};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5efffff',
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