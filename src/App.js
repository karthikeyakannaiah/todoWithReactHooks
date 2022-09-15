import React, { useState } from 'react'
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
function App() {
    const [todos, setTodos] = useState([
        {
            text: "learn about react",
            isCompleted: false
        },
        {
            text: "learn about react",
            isCompleted: false
        },
        {
            text: "learn about react",
            isCompleted: false
        }
    ]);
    const addTodo = todoNew => {
        const newTodos = [...todos, todoNew];
        setTodos(newTodos);
    }
    const changeTodo = (index, checked) =>{
        const newTodos = [...todos];
        newTodos[index].isCompleted=checked;
        setTodos(newTodos);
    }
    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    return(
        <div className='app'>
            <div className='todo-list'>
                {todos.map((todo, index) => (
                    <Todo key={index} index={index} {...todo} changeTodo={changeTodo} deleteTodo={deleteTodo}/>
                ))}
                <TodoForm addTodo={addTodo}/>
                <button onClick={()=>setTodos([])}>delete all</button>
            </div>
        </div>
    );
}

export default App;