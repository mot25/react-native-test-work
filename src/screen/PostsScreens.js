import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, FlatList, View, TouchableOpacity, Text } from 'react-native'
import AppInput from '../componets/UI/AppInput'
import { FontAwesome } from '@expo/vector-icons';
import Post from '../componets/Post';

export default function PostsScreens() {

    const [posts, setposts] = useState([])
    const [loadPosts, setloadPosts] = useState(true)

    const fetchPosts = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setposts(data)
                setloadPosts(false)
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <View>
            <View style={styles.addPost}>
                <AppInput />
                <FontAwesome.Button name="send" size={24} color="#696969" backgroundColor='transparent' ></FontAwesome.Button>
            </View>
            {loadPosts
                ? <Text style={{ textAlign: 'center' }}>Loading...</Text>
                : <FlatList data={posts} renderItem={({ item }) => (
                    <View style={styles.cardWrapper}>
                        <TouchableOpacity
                            activeOpacity={0.2}
                            onPress={() => console.log('onPress')}
                            onLongPress={() => console.log('onLongPress')}
                        >
                            <Post item={item} />
                        </TouchableOpacity>
                    </View>
                )} />}

        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        // alignItems: 'center'
    },
    addPost: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 60,
        paddingHorizontal: 10,
    }
})
