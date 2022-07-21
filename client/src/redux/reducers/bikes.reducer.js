import React from 'react'
import { GET_ALLBIKES } from '../actions/bike.actions'


const initialState ={}
export default function bikesReducer(state= initialState, action ) {
  switch (action.type) {
    case GET_ALLBIKES:
        return action.payload
    default: 
        return state
  }
}