import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import { useUsuarioStore } from "../store/usuario-store";

export default function LoginScreen() {
    
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    const { setUsuario } = useUsuarioStore();
    
    const handleLogin = async () => {
        if (email == 'teste@teste.com' && senha == '123456') {
            //Manda para outra tela sem botão de voltar
            setUsuario(email)
            router.replace('home');
        } else
            Alert.alert('Erro', 'Login ou senha incorreta!')
    }

    return (<View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <TextInput onChangeText={setEmail} style={[styles.input, styles.borderBottom]} placeholder="EMAIL:"/>
        <TextInput onChangeText={setSenha}  style={styles.input} secureTextEntry placeholder="SENHA:"/>
        <Button title="Logar" onPress={handleLogin}/>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20
    },
    header: {
        fontSize: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: 'white',
        padding: 5
    },
    borderBottom: {
        borderBottomColor: 'black',
        borderBottomWidth: 2
    }
});