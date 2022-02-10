import React, { useEffect, useReducer } from 'react'
import { Context } from './Context'
import { ADD_POST, ADD_ARR_POSTS, EDIT_ARR_POSTS, DEL_POST, SET_LOAD_POSTS } from './types';
import ContextReducer from './ContextReducer'

export default function ContextState({ children }) {
    const initState = {
        posts: [],
        loadPosts: true,
    }

    const [value, dispatch] = useReducer(ContextReducer, initState)

    value.addPost = (title, body) => dispatch({ type: ADD_POST, title, body })

    value.addArrPosts = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
            .then(res => res.json())
            .then(arr => {
                value.loadPosts = false
                dispatch({ type: ADD_ARR_POSTS, arr })
            })
    }

    value.editValue = arr => {
        dispatch({ type: EDIT_ARR_POSTS, arr })
    }

    value.setLoadPosts = bool => dispatch({ type: SET_LOAD_POSTS, bool })

    value.delPost = id => dispatch({ type: DEL_POST, id })


    // console.log('posts', value.posts)
    return <Context.Provider value={value}>{children}</Context.Provider>

}
