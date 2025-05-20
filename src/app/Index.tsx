import { View, TextInput,StyleSheet, GestureResponderEvent, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from 'expo-router'
import { Botao } from '@/components/Botao'
import { Imagem } from "@/components/Imagem";
import senaclogo from "../../assets/images/senaclogo.png";
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

export default function Index(){
    type CustomButtonProps = {
        title: string;
        onPress: (event: GestureResponderEvent) => void;
        backgroundColor?: string;
        textColor?: string;
        iconName?: string;
        iconSize?: number;
        iconColor?: string;
    };
    const CustomButton:
    React.FC<CustomButtonProps> = ({
      title,
      onPress,
      backgroundColor = '#084B8C',
      textColor = '#fff', 
      iconName,
      iconSize = 20,
      iconColor = '#000000',
    }) => {
        return (
            <TouchableOpacity style={[styles.botao, { backgroundColor }]} 
            onPress={onPress}>
                <Text style={[styles.text, { color: textColor }]}>{title}</Text>
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
                    <Text style={[styles.text2, { color: textColor }]}>{title}</Text>
            </TouchableOpacity>
        );
    };
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Imagem source={senaclogo}/>
            <Icon name={iconName} size={iconSize} color={iconColor} style={styles.icon} />
            <CustomButton title="Registrar novo residuo" onPress={() => navigation.navigate('Index')} iconName="plus"/>
            <CustomButton2 title="Ver Registros" onPress={() => navigation.navigate('Consultar')} iconName="clipboard"/>
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
    },
    text:{
        fontSize: 18,
        margin: 20,
    },
    botao2:{
        marginBottom: 50,
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
