import React, { useState, useContext } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Context } from '../context/Context'


export default function Post({ item }) {

    const { delPost, posts, editValue } = useContext(Context)
    const [edit, setedit] = useState(false)
    const [valueEdit, setvalueEdit] = useState(false)

    const editFun = (id, title) => {
        editValue(posts.map(item => {
            if (item.id == id) {
                item.title = title
            }
            return item
        }))
    }

    return (
        <View style={styles.postCard}>
            <View style={styles.inputCard}>
                <TextInput
                    editable={edit ? true : false}
                    onChangeText={setvalueEdit}
                    defaultValue={item.title} />
            </View>
            <View style={styles.iconCard}>
                {edit
                    ?
                    <MaterialIcons.Button backgroundColor='#FFF' style={styles.icon}
                        onPress={() => {
                            setedit(!edit)
                            editFun(item.id, valueEdit)
                        }} name="done"
                        size={30}
                        color="black" />
                    :
                    <Feather.Button backgroundColor='#FFF' style={styles.icon}
                        onPress={() => {
                            setedit(!edit)
                        }}
                        name="edit"
                        size={30}
                        color="black"
                    />}
                <MaterialIcons.Button
                    backgroundColor='#FFF'
                    style={styles.icon}
                    name="delete-forever"
                    onPress={() => delPost(item.id)}
                    size={30} color="black"
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    postCard: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        padding: 10,
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
        // marginHorizontal: 0
    }
})