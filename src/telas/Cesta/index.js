import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Detalhes from './components/Detalhes';
import Item from './components/Item';
import Topo from './components/Topo';
import Texto from '../../components/Texto';

export default function Cesta({ topo, detalhes, itens }){
    return (
        <>
            <FlatList style={estilos.lista} 
            data={itens.lista} 
            renderItem={Item} 
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent ={() => {
                return (
                <>
                    <Topo {...topo}/>
                    <View style={estilos.cesta}> 
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo}> {itens.titulo} </Texto>
                    </View>
                </>
                )
            }}
            />           
        </>
    )
}

const estilos = StyleSheet.create({
    cesta: {
        paddingHorizontal: 16, // estilos para ambos os valores da horizontal 
        paddingVertical: 8, // estilo para ambos os valores da vertical 
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    lista: {
        paddingHorizontal: 16,
    }
})