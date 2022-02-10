import React, { useContext, useEffect, useState } from 'react'
import { Button, StyleSheet, FlatList, View, TouchableOpacity, Text } from 'react-native'
import AppInput from '../componets/UI/AppInput'
import Post from '../componets/Post';
import { Context } from '../context/Context';

export default function PostsScreens() {
    const { loadPosts, addArrPosts, posts } = useContext(Context)




    useEffect(() => {
        addArrPosts()
    }, [])

    return (
        <View style={{ paddingBottom: 20 }}>
            <View style={styles.addPost}>
                <AppInput />
            </View>
            {loadPosts
                ? <Text style={{ textAlign: 'center' }}>Loading...</Text>
                : <FlatList data={posts} renderItem={({ item }) => (
                    <View key={item.id} style={styles.cardWrapper}>
                        <TouchableOpacity
                            activeOpacity={0.2}
                            onPress={() => console.log(item.title)}
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
