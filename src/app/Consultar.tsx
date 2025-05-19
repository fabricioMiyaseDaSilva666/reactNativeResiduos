import { View, TextInput, StyleSheet, Button, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Campo } from '@/components/Campos'

export default function Cadastrar(){
    const navigation = useNavigation()
    const [busca, setBusca] =useState("")

    return (
        <View style={styles.container}>
            <Campo placeholder="Pesquisar" onChangeText={setBusca}/>

            <View style={styles.flat}>
                <FlatList/>
            </View>

            <Button title="Voltar" onPress={() => navigation.navigate('Index')}/>
        </View>
    )
}

const styles = StyleSheet.create({
        container:{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: "center",
            marginTop: 25,
        },
        flat:{
            width: "100%",
            height: "50%",
            padding: 10,
            backgroundColor: "#fff",
        },
    }
)