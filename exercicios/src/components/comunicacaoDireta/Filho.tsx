import React from "react"
import { Text } from "react-native"

export default (props: { a: number; b: number }) => {
    return (
        <>
            <Text>{props.a}</Text>
            <Text>{props.b}</Text>
        </>
    )
}