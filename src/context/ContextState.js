import React, { useEffect, useReducer } from 'react'
import { Context } from './Context'
import { ADD_POST, DEL_COMMENT, ADD_ARR_POSTS, EDIT_ARR_POSTS, EDIT_ARR_COMMENTS, ADD_COMMENT, DEL_POST, SET_LOAD_POSTS, ADD_ARR_COMMENTS } from './types';
import ContextReducer from './ContextReducer'

export default function ContextState({ children }) {
    const initState = {
        posts: [],
        loadPosts: true,
        comments: [],
        loadComments: false
    }

    const [value, dispatch] = useReducer(ContextReducer, initState)

    value.addPost = (title, body) => dispatch({ type: ADD_POST, title, body })

    value.delPost = id => dispatch({ type: DEL_POST, id })

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





    value.addComm = (body) => dispatch({ type: ADD_COMMENT, body })

    value.delComm = id => dispatch({ type: DEL_COMMENT, id })
    value.editValueComm = arr => {
        dispatch({ type: EDIT_ARR_COMMENTS, arr })
    }
    value.addArrComms = async (id) => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: ADD_ARR_COMMENTS, arr: data.filter(comment => comment.postId === id)
                })
            })
    }





    value.setLoadComms = bool => dispatch({ type: SET_LOAD_COMMENTS, bool })



    console.log('comments', value.comments)
    return <Context.Provider value={value}>{children}</Context.Provider>

}
