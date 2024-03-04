import React, {useState} from 'react';

const TodoList = () => {
    // State to manage the list of to-do items
    const [todos, setTodos] = useState([]);
    // State to manage the input value for adding new to-do items
    const [inputValue, setInputValue] = useState('');

    // Function to handle adding a new to-do item
    const addTodo = () => {
        if (inputValue.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    };

    // Function to handle marking a to-do item as completed
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        }));
    };

    // Function to handle deleting a to-do item
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className='flex flex-col w-full items-center h-full'>
            <div className="p-10">
                <h1 className='text-3xl font-bold underline'>To-Do List</h1>
            </div>

            <div className='flex flex-row gap-6 w-1/3 pb-6'>
                <input
                    className='border border-black rounded-lg py-3 px-6 w-full text-lg'
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a to-do"
                />
                <button
                    className='bg-white font-semibold text-black border border-black w-64 rounded-lg hover:bg-black hover:text-white'
                    onClick={addTodo}
                >ADD
                </button>
            </div>
            <p className='w-1/3 font-bold text-lg pb-2'>Todos:</p>
            <ul className='w-1/3 h-fit p-4 text-xl flex flex-col gap-2 divide-y divide-black border border-black rounded-lg'>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className='flex justify-between py-3'
                    >
                        <div className='flex gap-3 items-center'>
                            <input
                                className='size-[20px]'
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                            />

                            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
                        </div>
                        <button
                            className='bg-white font-semibold text-red-500 border border-red-500 w-32 py-2 rounded-lg hover:bg-red-500 hover:text-white'
                            onClick={() => deleteTodo(todo.id)}
                        >Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
