import React from "react"
import { Text } from "react-native"
import Style from "./style"

const MinMax = (props: any) => {
    console.warn(props)
    return (
        <Text style={Style.txt24}>
            O valor {props.max} é maior que o valor {props.min}.
        </Text>
    )
}

export default MinMax