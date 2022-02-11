import React from 'react'
import {
    ADD_POST, ADD_ARR_POSTS, EDIT_ARR_POSTS,
    SET_LOAD_POSTS, DEL_POST, ADD_COMMENT,
    ADD_ARR_COMMENTS, SET_LOAD_COMMENTS,
    DEL_COMMENT, EDIT_ARR_COMMENTS
} from './types';

export default function ContextReducer(state, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, posts: [
                    {
                        id: Date.now(),
                        postId: Date.now(),
                        title: action.title,
                        body: action.body
                    },
                    ...state.posts
                ]
            }

        case ADD_ARR_POSTS:
            return { ...state, posts: action.arr }


        case SET_LOAD_POSTS:
            return { ...state, loadPosts: action.bool }

        case DEL_POST:
            return { ...state, posts: state.posts.filter(post => post.id !== action.id) }
        case EDIT_ARR_POSTS:
            return { ...state, posts: action.arr }



        case ADD_COMMENT:
            return {
                ...state, comments: [{
                    "postId": Date.now().toString(),
                    "id": Date.now().toString(),
                    "body": action.body
                }, ...state.comments]
            }

        case ADD_ARR_COMMENTS:
            return { ...state, comments: action.arr }


        case SET_LOAD_COMMENTS:
            return { ...state, loadPosts: action.bool }

        case DEL_COMMENT:
            return { ...state, comments: state.comments.filter(item => item.id !== action.id) }
        case EDIT_ARR_COMMENTS:
            return { ...state, comments: action.arr }

        default:
            return state
    }
}
