import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import Texto from '../../../components/Texto';

const width = Dimensions.get('screen').width;

export default function Topo({ imagemTopo, titulo }){
    return( 
        <>
            <Image source={ imagemTopo } style={estilos.topo}/>
            <Texto style={estilos.titulo}> { titulo } </Texto>
        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },    
    titulo: {
        width: '100%', //seta o tamanho do texto para toda a largura de tela
        position: 'absolute', // o texto irá para uma posição absoluta e logo ira subir por cima da imagem
        textAlign: 'center', // alinhamento do texto
        fontSize: 16, // tamanho da fonte
        lineHeight: 16, // Tamanho da linha
        color: '#fff', // cor da fonte
        fontWeight: 'bold',  // define o tamanho da fonte
        padding: 16, // espaçamento superior
    },
});