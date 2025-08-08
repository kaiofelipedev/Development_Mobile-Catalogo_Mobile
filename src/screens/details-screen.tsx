import React from "react";
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from "react-redux";
import { RootState } from "../store";

type DetailsManItem = {
    images: string[];
    title: string;
    price: string;
    description: string;
};

export const Detalhes = () => {

    const dados = useSelector((state: RootState) => state.detalhes.produto) as DetailsManItem

    return (
        <View style={styles.tela}>
            <Image style={styles.imagem} source={{uri: dados?.images[0]}}/>
            <Text style={styles.titulo}>{dados.title}</Text>
            <Text style={styles.preco}>R$ {dados.price}</Text>
            <Text style={styles.desc}>{dados.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imagem: {
        width: '100%',
        height: '40%',
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    titulo: {
        width: '100%',
        height: 60,
        padding: 20,
        fontWeight: 'bold',
        fontSize: 20
    },
    preco: {
        width: '100%',
        height: 30,
        color: 'red',
        paddingLeft: 15,
        fontWeight: 'bold',
        fontSize: 20
    },
    desc: {
        width: '100%',
        height: '40%',
        padding: 20,
        color: 'gray',
        fontSize: 16,
        letterSpacing: 1,
        lineHeight: 20
    }
})