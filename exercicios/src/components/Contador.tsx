import React, {useState} from "react"
import { Button, Text } from "react-native"


export default (props: { inicial: number }) => {
    const [numero, setNumero] = useState(props.inicial)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <>
            <Text>{numero}</Text>
            <Button title="+" onPress={inc}></Button>
            <Button title="-" onPress={dec}></Button>
        </>
    )
}

