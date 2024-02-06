import React, { useState } from "react"
import { Text } from "react-native"
import ContadorFilho from "./ContadorFilho"
import ContadorBotoes from "./ContadorBotoes"

export default () => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <>
            <Text>
                Contador
            </Text>
            <ContadorFilho num={num} />
            <ContadorBotoes inc={inc} dec={dec} />
        </>
    )

}