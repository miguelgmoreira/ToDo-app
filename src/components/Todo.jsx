import React from 'react'
import { CheckFat, Trash } from "@phosphor-icons/react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">
                    ({todo.category})
                </p>
            </div>
            <div>
                <button className='complete'><CheckFat size={20} weight="fill" onClick={() => completeTodo(todo.id)}/></button>
                <button className='remove' onClick={() => removeTodo(todo.id)}><Trash size={20} weight="bold" /></button>
            </div>
        </div>
    )
}

export default Todo
