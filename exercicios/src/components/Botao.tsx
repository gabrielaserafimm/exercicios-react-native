import React from "react"
import { Button } from "react-native"

export default () => {

    function exercutar() {
        console.warn("Executada!")
    }
    return (
        <Button
        title="Executar!"
        onPress={exercutar}
        />
    )
}