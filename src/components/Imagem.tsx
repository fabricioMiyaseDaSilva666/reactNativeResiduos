import { View, ImageProps, Image, StyleSheet } from "react-native";

export function Imagem({...rest}:ImageProps){
    return (
        <View>
            <Image></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 500,
        height: 200,
        borderWidth: 2,
    },
}
);