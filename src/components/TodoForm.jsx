import React, { useState } from 'react';

function TodoForm({addTodo}) {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo({ text: value, isCompleted: false });
        setValue('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='add todos' className="input" value={value} onChange={e=>setValue(e.target.value)}/>
        </form>
    );
}

export default TodoForm;