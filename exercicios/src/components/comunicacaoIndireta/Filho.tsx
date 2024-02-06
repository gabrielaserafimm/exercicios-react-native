import React from "react"
import { Button } from "react-native"

export default (props: { funcao: any; min: number; max: number; }) => {

    function gerarNumero(min: number, max: number) {
        const fator = max - min + 1
        return (Math.floor(Math.random() * fator)) + min
    }
    return (
        <Button 
            title="Executar"
            onPress={function() {
                const n = gerarNumero(props.min, props.max)
                props.funcao(n)
                }
            }
        />
    )
}
