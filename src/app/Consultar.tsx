import { View, TextInput, StyleSheet, Button, FlatList, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import { useState, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Campo } from '@/components/Campos'
import { useResiduoDataBase, ResiduoDataBase } from '@/database/useResiduoDataBase'
import { Residuos } from '@/components/Residuos'

export default function Cadastrar(){

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

    const [id, setId] = useState("")
    const [datinRes, setDatinRes] = useState("")
    const [categoria, setCategoria] = useState("")
    const [peso, setPeso] = useState("")
    const [busca, setBusca] =useState("")
    const [residuos, setResiduos] = useState<ResiduoDataBase[]>()
    const residuoDataBase = useResiduoDataBase()
    const navigation = useNavigation()

    async function list(){
        try{
            const response = await residuoDataBase.consultar(busca)
            setResiduos(response)
        }catch(error){
            console.log(error)
        }
    }

    async function details(item:ResiduoDataBase){
        setId(String(item.id))
        setDatinRes(item.datinRes)
        setCategoria(item.categoria)
        setPeso(item.peso)
    }

    async function remove(id:number){
        try{
            await residuoDataBase.remove(id)
            await list()
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {list()}, [busca])

    return (
        <View style={styles.container}>
            <Campo placeholder="Pesquisar" onChangeText={setBusca}/>

            <View style={styles.flat}>
                <FlatList
                    data={residuos}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => <Residuos data={item} onDelete={() => remove(item.id)} onEditar={() => navigation.navigate('Atualizar', {item})}/>}
                    contentContainerStyle={{gap:16}}
                />
            </View>

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
            marginTop: 25,
        },
        flat:{
            width: "100%",
            height: "50%",
            padding: 10,
            backgroundColor: "#084B8C",
        },
        text:{
            fontSize: 30,
            margin: 20,
            marginLeft: 90,
            marginRight: 90
        },
        botao:{
            marginTop: 15,
            borderRadius: 15
        }
    }
)