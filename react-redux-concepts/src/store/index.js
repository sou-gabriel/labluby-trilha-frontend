import { createStore } from 'redux'

const initialState = {
  todos: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_TODO':
      return { ...state, todos: [...state.todos, action.payload] }
    default:
      return state
  }
}

export const store = createStore(reducer)
