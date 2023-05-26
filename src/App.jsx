import { useState } from 'react'
import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {
  const [todos, setTodos] = useState([])

  const [search, setSearch] = useState('')

  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Cresc')

  const addTodo = (text, category, time) => {

    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        time,
        isCompleted: false,
      },
    ]

    setTodos(newTodos)
  }

  const removeTodo = id => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo =>
      todo.id !== id ? todo : null
    )
    setTodos(filteredTodos)
  }

  const completeTodo = id => {
    const newTodos = [...todos]
    newTodos.map(todo => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return (

    <div className='app'>
      <div className="header"></div>
      <h1>Lista de tarefas </h1>
      <TodoForm addTodo={addTodo} />
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {[...todos]
          .filter(todo =>
            filter === 'All'
              ? true
              : filter === 'Completed'
                ? todo.isCompleted
                : !todo.isCompleted
          )
          .filter(todo =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === 'Cresc'
              ? a.time.localeCompare(b.time, undefined, {numeric: true})
              : b.time.localeCompare(a.time,undefined,  {numeric: true}))
          .map(todo => (
            <Todo todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              completeTodo={completeTodo} />
          ))}
      </div>
    </div>
  )
}

export default App
