import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {

    // Dados de login
    const user = 'admin'
    const senha = '123'

    // Armazenar dados dos campos
    const [campoNome, setCampoNome] = useState('')
    const [campoSenha, setCampoSenha] = useState('')
    const [validaNome, setValidaNome] = useState(true)
    const [validaSenha, setValidaSenha] = useState(true)
    const [validaLogin, setValidaLogin] = useState(true)

    const validaCampos = () => {
        const nomeValido = campoNome.length > 0
        const senhaValida = campoSenha.length > 0

        setValidaNome(nomeValido)
        setValidaSenha(senhaValida)
        
        return nomeValido && senhaValida
    }
    
    const buttonClick = () => {

        if(validaCampos()){
            const checkLogin = campoNome === user && campoSenha === senha
            setValidaLogin(checkLogin)
            // if (checkLogin){router.navigate('../Produtos')}
            if (checkLogin){router.navigate('/produtos')}
        } else {
            setValidaLogin(true)
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.tela1}>

                <Text style={styles.texto1}>Bem-vindo de volta!</Text>
                <Text style={styles.texto2}>Insira seus dados para entrar na sua conta.</Text>

            </View>

            <View style={styles.tela2}>

                {/* alerta de login ou senha incorreto! */}
                <Text style={[styles.textHidden, {marginLeft: '20%'},
                    validaLogin ? styles.textHidden:styles.textAlert]}>Username ou senha iválidos!</Text>

                {/* CAMPO DE NOME */}
                <View>
                    <Text>Username</Text>

                    <TextInput 
                        style={[styles.inText, validaNome ? styles.inText:styles.fieldEmpty]}
                        onChangeText={setCampoNome}
                    />

                    <Text style={[styles.textHidden, validaNome ? styles.textHidden:styles.textAlert]}>
                        <Ionicons name="alert-circle-outline" size={14} color="red" /> 
                        Campo obrigatório!
                    </Text>
                    
                </View>
                
                {/* CAMPO DE SENHA */}
                <View>
                    <Text>Senha</Text>

                    <TextInput
                        style={[styles.inText, validaSenha ? styles.inText:styles.fieldEmpty]}
                        onChangeText={setCampoSenha}
                    />

                    <Text style={[styles.textHidden, validaSenha ? styles.textHidden:styles.textAlert]}>
                        <Ionicons name="alert-circle-outline" size={14} color="red" />
                        Campo obrigatório!
                    </Text>
                    
                </View>

                {/* Botão ENTRAR */}
                <TouchableOpacity 
                    style={styles.button}
                    onPress={buttonClick}
                >

                    <Text style={styles.textButton}>Entrar</Text>

                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    tela1: {
        backgroundColor: '#2567e8',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tela2:{
        width: '80%',
        minHeight: 270,
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 16,
        position: 'absolute',
        backgroundColor: '#fff',
        top: '35%',
        left: '10%',
        justifyContent: 'flex-start',
        paddingLeft: '5%',
        paddingTop: 40,
        paddingBottom: 10,
        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
        flexDirection: 'column',
        gap: 25
    },
    texto1: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    texto2: {
        color: '#fff',
        fontSize: 14,
        marginTop: 10
    },
    inText: {
        width: '90%',
        height: 30,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 4,
        marginTop: 6,
        boxShadow: '1px 2px 1px rgba(0, 0, 0, 0.5)'
    },
    button: {
        width: '90%',
        height: 37,
        borderWidth: 1,
        backgroundColor: '#2567e8',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.5)'
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 0.5,
        fontSize: 16
    },

    // Alertas de validação
    // Campo vazio
    fieldEmpty: {
        borderColor: 'red',
        borderWidth: 2
    },
    textHidden: {
        display: 'none'
    },
    textAlert: {
        color: 'red',
        fontSize: 13,
        marginTop: 4,
        display: 'flex'
    }
})