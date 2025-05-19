import { View, TextInput, StyleSheet, Button } from 'react-native'

export function Botao({...rest}:Button){
    return (
        <View>
            <Button style={styles.botaozinho} {...rest}/>
        </View>
    );
}

const styles = StyleSheet.create({
    botaozinho:{
        width: 400,
        borderRadius: 20,
        margin: 10,
        fontSize: 30,
        backgroundColor: '#fff',
        marginTop: 10,
    },
})