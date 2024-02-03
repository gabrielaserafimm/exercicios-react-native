import React from "react"
import { Text } from 'react-native'
import Style from "./style"

export default function Comp() {
    return <Text style={Style.txt24}>Comp #Oficial</Text>
}

function Comp1() {
    return <Text style={Style.txt24}>Comp #01</Text>
}

function Comp2() {
    return <Text style={Style.txt24}>Comp #02</Text>
}

export { Comp1, Comp2 }