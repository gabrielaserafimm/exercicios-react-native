import React from 'react'
import { View, StyleSheet } from 'react-native'

import Primeiro from './components/First'
import MinMax from './components/MinMax'
import Comp, {Comp1, Comp2} from './components/Mult'
import Aleatorio from './components/Aleatorio'
import Botao from './components/Botao'
import Contador from './components/Contador'
import Pai from './components/comunicacaoDireta/Pai'


const App = () => (
    <View style={style.App}>
        <Pai/>
        {/*<MinMax min={3} max={20}/>
        <Comp/>
        <Comp1/>
        <Comp2/>
        <Primeiro/>
        <Aleatorio min={10} max={60}/>
        <Botao/>
        <Contador inicial={100}/>*/}
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