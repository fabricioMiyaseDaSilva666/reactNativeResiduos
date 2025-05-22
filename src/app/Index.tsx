import { View, TextInput,StyleSheet, GestureResponderEvent, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from 'expo-router'
import { Botao } from '@/components/Botao'
import { Imagem } from "@/components/Imagem";
import senaclogo from "../../assets/images/senaclogo.png";
import React from 'react';
import { MaterialIcons } from "@expo/vector-icons";

export default function Index(){
    type CustomButtonProps = {
        title: string;
        onPress: (event: GestureResponderEvent) => void;
        backgroundColor: string;
        textColor: string;
        iconName: string;
        iconSize: number;
        iconColor: string;
    };
    const CustomButton:
    React.FC<CustomButtonProps> = ({
      title,
      onPress,
      backgroundColor = '#084B8C',
      textColor = '#fff', 
    }) => {
        return (
            <TouchableOpacity style={[styles.botao, { backgroundColor }]} 
            onPress={onPress}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="add-circle-outline" size={50} color="#fff" marginLeft={10}/>
                    <Text style={[styles.text, { color: textColor }]}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    const CustomButton2:
    React.FC<CustomButtonProps> = ({
      title,
      onPress,
      backgroundColor = '#F78B1F',
      textColor = '#fff',  
    }) => {
        return (
            <TouchableOpacity style={[styles.botao2, { backgroundColor }]} 
            onPress={onPress}>
                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="content-paste" size={50} color="#fff" marginLeft={10}/>
                    <Text style={[styles.text2, { color: textColor }]}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Imagem source={senaclogo}/>
            <CustomButton title="Registrar novo residuo" onPress={() => navigation.navigate('Registra')}/>
            <CustomButton2 title="Ver Registros" onPress={() => navigation.navigate('Consultar')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#fff',
    },
    botao:{
        marginBottom: 50,
        borderRadius: 15
    },
    text:{
        fontSize: 18,
        margin: 20,
    },
    botao2:{
        marginBottom: 50,
        borderRadius: 15
    },
    text2:{
        fontSize: 18,
        margin: 20,
    },
    icon:{
        marginRight: 8,
    },
}
);
