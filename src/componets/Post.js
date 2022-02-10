import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons';



export default function Post({ item }) {



    return (
        <View style={styles.postCard}>
            <View style={styles.inputCard}>
                <TextInput maxLength={54}  value={item.title} />
            </View>
            <View style={styles.iconCard}>
                <Feather style={styles.icon} name="edit" size={30} color="black" />
                <MaterialIcons style={styles.icon} name="delete-forever" size={30} color="black" />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    postCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        padding: 20,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 8,
        width: '100%'
    },
    inputCard: {
        flex: 1,
        fontSize: 20,
        width: '50%'
    },
    iconCard: {
        flexDirection: 'row',
    },
    icon: {
        marginHorizontal: 10
    }
})