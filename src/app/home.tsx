import { router } from "expo-router";
import { StyleSheet, Text, View, Button } from "react-native";
import { useUsuarioStore } from "../store/usuario-store";

export default function HomeScreen() {

    const { usuario } = useUsuarioStore();
    
    return (<View>
        <Text>Bem vindo, {usuario}!</Text>

        <Button title="SAIR" color="tomato" onPress={() => router.replace('/')} />
    </View>)
}
const styles = StyleSheet.create({
    
});