// 1º Preciso criar a store
// 2º Preciso inscrever um componente há store
// 3° Dispatch uma action

const redux = require('redux')

const counterReducer = (state = { counter: 0 }, action) => {
  console.log(state)

  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { counter: state.counter + 1 }
    case 'DECREMENT_COUNTER':
      return { counter: state.counter -1 }
    default: 
      return state
  }
}

const store = redux.createStore(counterReducer)

const counterSubscriber = () => {
  console.log('NOTIFICADO!')
  const latestState = store.getState()
  console.log(latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({ type: 'INCREMENT_COUNTER' })
store.dispatch({ type: 'DECREMENT_COUNTER' })

