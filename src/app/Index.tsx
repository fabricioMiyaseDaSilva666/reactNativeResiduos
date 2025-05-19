import { View, TextInput,StyleSheet, Button, Alert } from 'react-native'
import { useNavigation } from 'expo-router'
import { Botao } from '@/components/Botao'

export default function Index(){
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Button style={styles.botao} title="Registrar novo residuo" onPress={() => navigation.navigate('Index')}/>
            <Button title="Ver Registros" onPress={() => navigation.navigate('Consultar')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#898989',
    },
    botao:{
        marginBottom: 50,
    },
}
)