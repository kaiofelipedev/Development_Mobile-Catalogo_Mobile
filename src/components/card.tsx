import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CardProps {
    titulo: string,
    descricao: string,
    imagem: string,
    preco: number,
    onClick: () => void
}

export const Card = ({titulo, descricao, imagem, preco, onClick}: CardProps) => {

    return (
        <TouchableOpacity style={styles.card} onPress={onClick}>
            <Image style={styles.imageCard} source={{ uri: imagem }}/>
            <Text style={styles.tituloCard}>{titulo}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
            <Text style={styles.priceCard}>R$ {preco}</Text>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    card: {
        width: '42%',
        minHeight: 245,
        borderWidth: 1,
        borderColor: 'gray',
        margin: 10,
        borderRadius: 10,
        boxSizing: 'border-box'
    },
    imageCard: {
        width: '100%',
        height: '40%',
        borderBottomWidth: 1,
        borderColor: 'gray',
        resizeMode: 'contain'
    },
    tituloCard: {
        width: '100%',
        minHeight: 35,
        padding: 5,
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'center'
    },
    descricao: {
        width: '100%',
        minHeight: 80,
        padding: 5,
        fontSize: 10,
        color: 'gray',
        overflow: 'scroll',
        textAlign: 'left'
    },
    priceCard: {
        width: '100%',
        minHeight: '14%',
        paddingTop: 3,
        paddingLeft: 7,
        fontWeight: 'bold',
        fontSize: 16
    }
})