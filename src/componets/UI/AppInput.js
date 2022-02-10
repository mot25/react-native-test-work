import React, { useContext, useState } from 'react'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Alert, Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import { Context } from '../../context/Context'

export default function AppInput() {

    const [title, settitle] = useState('')
    const [body, setbody] = useState('')
    const [modalVisible, setmodalVisible] = useState(false)

    const { addPost } = useContext(Context)

    const send = (title, body) => {
        if (title.length < 3) {
            Alert.alert(
                "Error!",
                `the length of the header should be 3 characters. Your length = ${title.length}`,
                [
                    {
                        text: "Cancel",
                        onPress: () => { setmodalVisible(false) },
                        style: "cancel"
                    },
                    { text: "OK" }
                ]
            );
        } else {
            addPost(title, body)
            setmodalVisible(false)
            settitle('')
            setbody('')
        }
    }

    return (
        <View style={styles.mainWrapper}>
            <View style={styles.addWrapPost}>
                <MaterialIcons.Button style={styles.addBtnPost} name="add-box" backgroundColor='#000' size={24} color="white" onPress={() => setmodalVisible(true)}>
                    <Text style={styles.addTextPost}> Add post</Text>
                </MaterialIcons.Button>
            </View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.inpurWrapper}>
                        <TextInput
                            style={styles.inputDefault}
                            onChangeText={settitle}
                            value={title}
                            placeholderTextColor='#000'
                            placeholder='title'
                        />
                    </View>
                    <View style={styles.inpurWrapper}>
                        <TextInput
                            style={styles.inputDefault}
                            onChangeText={setbody}
                            value={body}
                            placeholderTextColor='#000'
                            placeholder='body'
                        />
                    </View>
                    <View>
                        <FontAwesome.Button
                            name="send"
                            backgroundColor="#fff"
                            onPress={() => send(title, body)}
                            size={40}
                            color="black" > </FontAwesome.Button>
                        <MaterialIcons.Button
                            name="cancel"
                            backgroundColor="#fff"
                            onPress={() => {
                                setmodalVisible(false)
                                settitle('')
                                setbody('')
                            }}
                            size={40}
                            color="black" > </MaterialIcons.Button>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        width: '80%',
        height: 50,

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
    addBtnPost: {
    },
    addTextPost: {

        color: '#fff',

    },
    addWrapPost: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

/*
  <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.inpurWrapper}>
                        <TextInput
                            style={styles.inputDefault}
                            onChangeText={settitle}
                            value={title}
                            placeholder='title'
                        />
                    </View>
                    <View style={styles.inpurWrapper}>
                        <TextInput
                            style={styles.inputDefault}
                            onChangeText={setemail}
                            value={email}
                            placeholder='email'
                        />
                    </View>
                    <View style={styles.inpurWrapper}>
                        <TextInput
                            style={styles.inputDefault}
                            onChangeText={setbody}
                            value={body}
                            placeholder='body'
                        />
                    </View>
                </View>
            </Modal>
*/