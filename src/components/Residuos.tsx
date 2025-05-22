import { Pressable, PressableProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons"

type Props = PressableProps & {
    data:{
        id: string
        datinRes: date
        categoria: string
        peso: string
    }
    onDelete: () => void
    onEditar: () => void

}

export function Residuos({ data, onDelete, onEditar, ...rest}:Props){
    return(
        <View style={styles.container}>
            <Pressable style={styles.fundo} {...rest}>
                <Text style={styles.texto}>
                    {data.id} - {data.datinRes} - {data.categoria} - {data.peso}
                </Text>

                <TouchableOpacity onPress={onEditar}>
                    <MaterialIcons name="edit" size={24} color="#3232aa"/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialIcons name="delete" size={24} color="red"/>
                </TouchableOpacity>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 50,
    },
    fundo:{
        backgroundColor: "#CECECE",
        padding: 24,
        borderRadius: 5,
        gap: 12,
        flexDirection: "row", //Isso serve pra deixa as coisas alinhadas na mesma linha
    },
});