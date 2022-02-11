import React, { useContext, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Comment from '../componets/Comment'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Context } from '../context/Context';

export default function PostIdScreen({ route, navigation }) {
    const { id, name, body } = route.params

    const { loadComments, addArrComms, comments, addComm } = useContext(Context)

    const [valueComments, setvalueComments] = useState('')


    useEffect(() => {
        addArrComms(id)
    }, [])

    return (
        <View style={styles.main}>
            <View style={styles.mainCard}>
                <View>
                    <Text style={styles.name}>{name.length > 25 ? name.slice(0, 25) : name.length}</Text>
                </View>
                <View>
                    <Text style={styles.body}>{body.length > 100 ? body.slice(0, 100) : body.length}</Text>
                </View>
            </View>
            <Text style={styles.ComTitle}>Comments</Text>
            <View style={styles.commSend}>
                <TextInput
                    style={styles.inputDefault}
                    onChangeText={setvalueComments}
                    value={valueComments}
                    placeholderTextColor='#000'
                    placeholder='new comment'
                />
                <View>
                    <MaterialCommunityIcons.Button
                        backgroundColor="#fff"
                        onPress={() => {
                            addComm(valueComments)
                            setvalueComments('')
                        }}
                        name="send-outline"
                        size={24}
                        color="black" />
                </View>
            </View>
            {!loadComments
                ?
                <View>
                    <FlatList data={comments} renderItem={({ item }) => (

                        <Comment item={item} />
                    )} />
                </View>
                :
                <Text>Loading...</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    inputDefault: {
        width: '70%'
    },
    commSend: {
        marginVertical: 5,
        justifyContent: 'space-between',
        // alignItems: 'center',
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
        height: 60,
        width: '100%',
        flexDirection: 'row'
    },
    mainCard: {
        marginVertical: 10,
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
        maxHeight: '50%',
        width: '100%',
        paddingVertical: 20
    },
    main: {
        marginHorizontal: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'center',
        marginBottom: 7
    },
    body: {
        fontSize: 15,
        textAlign: 'left',
    },
    ComTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    comCard: {
        marginVertical: 10,
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
        height: 70,
        width: '100%'
    },
})
