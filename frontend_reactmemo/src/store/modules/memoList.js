import { createAction, handleActions } from 'redux-actions'
import { Map,List } from 'immutable'

// action types


// action creators

// initial State
const initialState = Map({
  MemoList : List([])
})

// reducer

export default handleActions({
}, initialState)