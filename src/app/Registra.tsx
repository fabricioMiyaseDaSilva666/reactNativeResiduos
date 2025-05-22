import { View, TextInput, StyleSheet, Button, Alert, Platform, Text, GestureResponderEvent, TouchableOpacity } from 'react-native'
import { Campo } from '@/components/Campos'
import { useState } from 'react'
import { useResiduoDataBase, ResiduoDataBase } from '@/database/useResiduoDataBase'
import { useNavigation } from 'expo-router'
import { Picker } from '@react-native-picker/picker';

export default function Registra(){

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
      backgroundColor = '#F78B1F',
      textColor = '#fff', 
    }) => {
        return (
            <TouchableOpacity style={[styles.botao, { backgroundColor }]} 
            onPress={onPress}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.text, { color: textColor }]}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const CustomButton2:
    React.FC<CustomButtonProps> = ({
      title,
      onPress,
      backgroundColor = '#084B8C',
      textColor = '#fff',  
    }) => {
        return (
            <TouchableOpacity style={[styles.botao2, { backgroundColor }]} 
            onPress={onPress}>
                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.text2, { color: textColor }]}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const [id, setId] = useState("")
    const [datinRes, setDatinRes] = useState("")
    const [categoria, setCategoria] = useState("")
    const [peso, setPeso] = useState("")
    const [residuo, setResiduo] = useState<ResiduoDataBase[]>()
    const residuoDataBase = useResiduoDataBase()
    const navigation = useNavigation()


    

    async function create(){
        try{
            const response = await residuoDataBase.create({
                datinRes,
                categoria,
                peso
            })

            Alert.alert("Registrado com sucesso! ID: " + response.insertedRowId)
        }catch(error){
            console.log(error)
        }
    }//Fim do create

    return (
        <View style={styles.container}>
            <View style={styles.bonitinho}>
                <Campo placeholder="00/00/0000:" onChangeText={setDatinRes} value={datinRes}/>
                {/*<Campo placeholder="Categoria" onChangeText={setCategoria} value={categoria}/>*/}
                <Campo placeholder="Peso (Kg):" onChangeText={setPeso} value={peso}/>
                <View>
                    <Text>Selecione a Categoria</Text>
                    <Picker selectedValue={categoria} onValueChange={(itemValue) => setCategoria(itemValue)}
                    style={{height}}>

                    </Picker>
                </View>
                
            </View>
            <CustomButton2 title="Salvar Registro" onPress={create}/>
            <CustomButton title="Voltar" onPress={() => navigation.navigate('Index')}/>
        </View>
    );
}

const styles = StyleSheet.create({
        container:{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            backgroundColor: '#fff',
            alignItems: "center",
        },
        bonitinho:{
            width: "100%",
            height: "50%",
            padding: 10,
            backgroundColor: '#898989',
        },
        text:{
            fontSize: 30,
            margin: 15,
            marginLeft: 90,
            marginRight: 90
        },
        text2:{
            fontSize: 30,
            margin: 15,
            marginLeft: 30,
            marginRight: 30
        },
        botao2:{
            marginTop: 15,
            borderRadius: 15
        },
        botao:{
            marginTop: 15,
            borderRadius: 15
        }
    }
)