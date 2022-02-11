import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Context } from '../context/Context';

export default function Comment({ item }) {
    const [edit, setedit] = useState(false)
    const { editValueComm, comments, editValue, delComm } = useContext(Context)

    const [valueEdit, setvalueEdit] = useState(item.body)

    const editTitle = () => {
        setedit(false)
        editValue(comments.map(comm => {
            if (comm.id === item.id) {
                comm.body = valueEdit
            }
            return comm
        }))
        console.log(valueEdit);
    }

    return (
        <View style={styles.comCard}>
            <View style={styles.comCardText}>
                <Text style={styles.email}>{item.email}</Text>
                <TextInput
                    editable={edit ? true : false}
                    onChangeText={setvalueEdit}
                    style={styles.body}
                    defaultValue={item.body && item.body} />
            </View>
            <View style={styles.comCardIcon}>
                <View style={styles.iconCardComm}>
                    {edit
                        ?
                        <MaterialIcons.Button backgroundColor='#FFF' style={styles.iconComm}
                            onPress={editTitle} name="done"
                            size={21}
                            color="black" />
                        :
                        <Feather.Button backgroundColor='#FFF' style={styles.iconComm}
                            onPress={() => {
                                setedit(true)
                            }}
                            name="edit"
                            size={21}
                            color="black"
                        />}
                    <MaterialIcons.Button
                        backgroundColor='#FFF'
                        style={styles.iconComm}
                        name="delete-forever"
                        onPress={() => delComm(item.id)}
                        size={21} color="black"
                    />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    iconCardComm: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    comCardIcon: {
        width: '20%'
    },
    comCardText: {
        width: '70%'
    },
    comCard: {
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        padding: 7,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 8,
        maxHeight: 70,
        width: '100%',
        flexDirection: 'row',
    },
    email: {
        marginBottom: 7,
        fontSize: 15,
        marginLeft: 'auto'
    },
    body: {

    },
    inpurWrapper: {
        borderBottomColor: "#434B4D",
        borderBottomWidth: 3,
        borderStyle: 'solid',
        width: '70%',
        height: 50,
    },
    inputDefault: {
        padding: 10,
        width: '100%',
        height: '100%',

    },
})
