import { View, ImageProps, Image, StyleSheet } from "react-native";

export function Imagem({...rest}:ImageProps){
    return (
        <View style={styles.img}>
            <Image {...rest}/>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: "50%",
        alignItems: "center",
    },
}
);