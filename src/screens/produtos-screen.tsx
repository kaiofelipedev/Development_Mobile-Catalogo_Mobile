import axios from "axios";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { Card } from "../components/card";
import { setDetails } from "../store/slices/produtos-slice";

interface Produto {
    id: number,
    title: string
    description: string,
    price: number,
    images: string[]
}

export default function ListaProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([])
    const dispatch = useDispatch()

    const getApi = async () => {
        return await axios.get('https://dummyjson.com/products').then((resp) => {
            setProdutos(resp.data.products)
        })
    }

    const allMasc = async () => {

        const [camisas, sapatos, relogios] = await Promise.all([
            axios.get('https://dummyjson.com/products/category/mens-shirts'),
            axios.get('https://dummyjson.com/products/category/mens-shoes'),
            axios.get('https://dummyjson.com/products/category/mens-watches')
        ])

        const shirts = camisas.data.products
        const shoes = sapatos.data.products
        const watches = relogios.data.products

        const lista = [...shirts, ...shoes, ...watches]

        setProdutos(lista)
    }

    const allFem = async () => {

        const [bolsas, vestidos, joias, sapatos, relogios] = await Promise.all([
            axios.get('https://dummyjson.com/products/category/womens-bags'),
            axios.get('https://dummyjson.com/products/category/womens-dresses'),
            axios.get('https://dummyjson.com/products/category/womens-jewellery'),
            axios.get('https://dummyjson.com/products/category/womens-shoes'),
            axios.get('https://dummyjson.com/products/category/womens-watches')
        ])

        const bags = bolsas.data.products
        const dresses = vestidos.data.products
        const jewellery = joias.data.products
        const shoes = sapatos.data.products
        const watches = relogios.data.products
        
        const lista = [...bags, ...dresses, ...jewellery, ...shoes, ...watches]

        setProdutos(lista)
    }

    useEffect(() => {
        getApi()
    }, [])

    return (
        <ScrollView >

             {/* Container de botos das abas */}
            <View style={styles.containerButtons}>

                {/* Botão masculino */}
                <TouchableOpacity style={styles.buttons} onPress={allMasc}>
                    <Text>Produtos Masculinos</Text>
                </TouchableOpacity>

                {/* Botão feminino */}
                <TouchableOpacity style={styles.buttons} onPress={allFem}>
                    <Text>Produtos Femininos</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.container}>
                { produtos.map((item) => {
                return (
                    <Card key={item.id}
                        titulo={item.title}
                        descricao={item.description}
                        imagem={item.images[0]}
                        preco={item.price}
                        onClick={() => {
                            dispatch(setDetails(item))
                            router.navigate('/detalhes')
                        }}
                    />
                )
            }) }
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
     containerButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 50
    },
    buttons: {
        borderBottomWidth: 2,
        borderBottomColor: '#2567e8',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        height: '100%',
        fontWeight: 'bold'
    },
})