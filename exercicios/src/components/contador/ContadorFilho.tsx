import React from "react"
import { Text, View } from "react-native"

export default (props: { num: number }) => {

    return (
        <View>
            <Text>
                {props.num}
            </Text>
        </View>
    )
}