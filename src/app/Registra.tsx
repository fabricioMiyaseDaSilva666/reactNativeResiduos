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
                <Campo placeholder="0,00 (Kg):" onChangeText={setPeso} value={peso}/>
                <View>
                    <Text style={styles.textinho}>Selecione a Categoria</Text>
                    <Picker  onValueChange={(setCategoria)} selectedValue={categoria}
                    style={{ height: 50, width: 200, backgroundColor: "#fff", marginLeft: 15 }}>
                        <Picker.Item label="Não Reciclável" value="Nao reciclavel"/>
                        <Picker.Item label="Reciclável" value="Reciclavel"/>
                        <Picker.Item label="Óleo" value="Oleo" />
                        <Picker.Item label="Tampinhas Plásticas" value="Tampinhas plasticas" />
                        <Picker.Item label="Lacres de Alumínio" value="Lacres de aluminio" />
                        <Picker.Item label="Tecidos" value="Tecidos" />
                        <Picker.Item label="Meias" value="Meias" />
                        <Picker.Item label="Material de Escrita" value="Material de escrita" />
                        <Picker.Item label="Esponjas" value="Esponjas" />
                        <Picker.Item label="Eletrônicos" value="Eletronicos" />
                        <Picker.Item label="Pilhas e Bateiras" value="Pilhas e bateria" />
                        <Picker.Item label="Infectante" value="Infectante" />
                        <Picker.Item label="Químicos" value="Quicimos" />
                        <Picker.Item label="Lâmpada Fluorescente" value="Lampada flourescente" />
                        <Picker.Item label="Tonners de Impressora" value="Tonners de impressora" />
                        <Picker.Item label="Esmaltes" value="Esmaltes" />
                        <Picker.Item label="Cosmédicos" value="Cosmedicos" />
                        <Picker.Item label="Cartela de Medicamento" value="Cartela de medicamento" />
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
            backgroundColor: '#084B8C',
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
        },
        textinho:{
            color: "#fff",
            fontSize: 20,
            marginLeft: 15
        }
    }
)