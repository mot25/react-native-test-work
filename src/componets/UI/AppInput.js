import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function AppInput(props) {


    return (
        <View style={styles.inpurWrapper}>
            <TextInput
                {...props}
                style={styles.inputDefault}
                onChangeText={props.changeInt}
                value={props.value}
                placeholder={props.placeholder ? props.placeholder : 'placeholder'}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    inpurWrapper: {
        width: '80%',
        height: 50,
        borderBottomColor: "#434B4D",
        borderBottomWidth: 3,
        borderStyle: 'solid'
    },
    inputDefault: {
        padding: 10,
        width: '100%',
        height: '100%',

    }
})