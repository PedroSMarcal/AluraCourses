import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Botao from '../../../components/Botao'
import Texto from '../../../components/Texto'

    export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco, botao}){
    return (
        <>
            <Texto style={estilos.nome}> {nome} </Texto>

            <View style= {estilos.fazenda}>
                <Image source={logoFazenda} style={estilos.imagemFazenda}/>
                <Texto style={estilos.nomeFazenda}> {nomeFazenda} </Texto>
            </View>
            
            <Texto style={estilos.descricao}> {descricao} </Texto>
            <Texto style={estilos.preco}> {preco} </Texto>

            <Botao> {botao} </Botao>
        </>
    )
};

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold',
    },
    fazenda:{
        flexDirection: 'row', // muda a direção dos items para a linha e não por colunas
        paddingVertical: 12,
    } ,
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
})