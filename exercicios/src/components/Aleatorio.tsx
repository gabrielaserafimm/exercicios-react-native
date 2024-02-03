import React from "react"
import { Text } from "react-native"
import Style from "./style"

export default (props: { min: number; max: number }) => {
    const delta = props.max - props.min + 1
    const aleatorio = Math.floor(Math.random() * delta + props.min)
    return (
        <Text style={Style.txt24}>
            O valor aleatório é {aleatorio}
        </Text>
    )
}