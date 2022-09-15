function Todo({index, text, isCompleted, changeTodo, deleteTodo}) {
    // const [value, setValue] = useState('');
    // e=>setValue(e.target.checked)
    const handleChange = (c) => {
        changeTodo(index, c);
    }
    return (
        <div style={{textDecoration: isCompleted ? "line-through" : ''}}>
            <input type="checkbox" name="check" id="check" checked={isCompleted} onChange={e=>handleChange(e.target.checked)}/>{text}
            <button onClick={()=> deleteTodo(index)}>delete</button>
        </div>
    );
}

export default Todo;