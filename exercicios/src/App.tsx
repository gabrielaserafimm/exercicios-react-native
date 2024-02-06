import React from 'react'
import { View, StyleSheet } from 'react-native'

import Primeiro from './components/First'
import MinMax from './components/MinMax'
import Comp, {Comp1, Comp2} from './components/Mult'
import Aleatorio from './components/Aleatorio'
import Botao from './components/Botao'
import Contador from './components/Contador'
import Pai from './components/comunicacaoIndireta/Pai'
import PaiDireta from './components/comunicacaoDireta/PaiDireta'
import ContadorPai from './components/contador/ContadorPai'


const App = () => (
    <View style={style.App}>
        {/*<PaiDireta/>
        <MinMax min={3} max={20}/>
        <Comp/>
        <Comp1/>
        <Comp2/>
        <Primeiro/>
        <Contador inicial={100}/>
        <Botao/>
        <Aleatorio min={10} max={60}/>
        <Pai />*/}
        <ContadorPai/>
    </View>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})

export default App