import React, { useState } from "react"
import { Button, View, StyleSheet, GestureResponderEvent } from "react-native"

export default (props: { inc: any; dec: any }) => {
    return (
        <>
            <View style={style.Botoes}>
                <Button title="+" onPress={props.inc}/>
                <Button title="-" onPress={props.dec} />
            </View>
        </>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: "row"
    }
})