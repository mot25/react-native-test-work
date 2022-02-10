import React from 'react'
import { ADD_POST, ADD_ARR_POSTS, EDIT_ARR_POSTS, SET_LOAD_POSTS, DEL_POST } from './types';

export default function ContextReducer(state, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, posts: [...state.posts,
                {
                    id: Date.now(),
                    postId: Date.now(),
                    title: action.title,
                    body: action.body
                }]
            }

        case ADD_ARR_POSTS:
            return { ...state, posts: action.arr }


        case SET_LOAD_POSTS:
            return { ...state, loadPosts: action.bool }

        case DEL_POST:
            return { ...state, posts: state.posts.filter(post => post.id !== action.id) }
        case EDIT_ARR_POSTS:
            return { ...state, posts: action.arr }

        default:
            return state
    }
}
