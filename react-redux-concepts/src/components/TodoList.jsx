import { useSelector, useDispatch } from 'react-redux'

export const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  return (
    <div>
      <h1>Todo List</h1>

      <ul>
        {todos.map((todo) => (
          <li key={Date.now()}>{todo.name}</li>
        ))}
      </ul>

      <form
        onSubmit={(event) => {
          event.preventDefault()

          dispatch({
            type: 'ADD_NEW_TODO',
            payload: { name: event.target.task.value }
          })

          event.target.task.value = ''
        }}
      >
        <input type='text' name='task' placeholder='Nome da tarefa' />
        <button>Adicionar tarefa</button>
      </form>
    </div>
  )
}
