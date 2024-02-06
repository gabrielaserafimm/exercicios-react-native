import React, { useState } from "react"
import Filho from "./Filho"
import { Text } from "react-native"

export default () => {
    const [num, setNum] = useState(0)

    function exibirValor(numero: number) {
        setNum(numero)
    }

    return (
        <>
            <Text>{num}</Text>
            <Filho 
                min={2}
                max={100}
                funcao={exibirValor} 
            />
        </>
    )
}
