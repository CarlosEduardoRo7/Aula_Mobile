import {View, Text, TextInput, Button} from 'react-native'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ExemploAsyncStorage(){

    const [nome, setNome] = useState('')
    const [nomeSalvo, setNomeSalvo] = useState('')


    const SalvarNome = async () => {
        try {
            await AsyncStorage.setItem('@nomePessoa', nome);
            alert('nome salvo!')
            setNome('')
            } catch (e) {
                console.log(e)
            }
        };

        const MostrarNome = async () => {
            try {
                const value = await AsyncStorage.getItem('@nomePessoa');
                if (value !== null) {
                    setNomeSalvo(value)
                }
                    } catch (e) {
                        console.log(e)
                    }
        };

        const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('my-key');
            if (value !== null) {
                // value previously stored
            }
            } catch (e) {
                // error reading value
            }
};

        useEffect(() => {
            MostrarNome();
        }, [])
        // vai executar assim que entrar na tela
        // se estiver com algo dentro, vai executar quando ouver mudança

    return(
        <View>
            <TextInput
            placeholder='nome'
            value= {nome}
            onChangeText={setNome}
            />
            <Button title='Salvar Pessoa' onPress={SalvarNome}/>
            <text> {nomeSalvo} </text>
        </View>
    )

};