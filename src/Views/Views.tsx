import React, { useEffect, useCallback, useRef, useReducer } from 'react';
interface Todo {
    id: number,
    text: string,
    phone: string
}


type ActionType = { type: "ADD"; text: string; phone: string } | { type: "REMOVE"; id: number }

const Views = () => {
    function reducer(state: Todo[], action: ActionType) {
        switch (action.type) {
            case "ADD":
                return [
                    ...state,
                    {
                        id: state.length,
                        text: action.text,
                        phone: action.phone
                    },
                ];
            case "REMOVE":
                return state.filter(({ id }) => id !== action.id)
        }
    }
    const [todos, dispatch] = useReducer(reducer, []);

    const newTodoRef = useRef<HTMLInputElement>(null);
    // Add Items
    const onAddTodo = useCallback(() => {
        if (newTodoRef.current) {
            dispatch({
                type: "ADD",
                text: newTodoRef.current.value,
                phone: newTodoRef.current.value
            })
            newTodoRef.current.value = "";
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(todos));
    }, [todos]);

    return (

        <div className="container mx-auto my-5 w-96">
            <div className="mx-auto">
                <h1 className='text-2xl text-center font-bold text-gray-800 bg-purple-500 uppercase py-4 rounded-md'>Add Items</h1>
                <div className="text-center w-full py-5">
                    <input type="text" className="border-solid border-2 border-indigo-600 w-full rounded-full text-center py-2 m-3" placeholder='Name' ref={newTodoRef} />

                    <input type="text" className="border-solid border-2 border-indigo-600 w-full rounded-full text-center py-2 m-3" placeholder='Phone Number' ref={newTodoRef} />

                    <button onClick={onAddTodo} className="border bg-blue-200 w-80 py-3 m-2">Add Item</button>
                    {todos.map((todo) => (
                        <div key={todo.id}>
                            <div className="font-bold tect-xl">
                                <h1>Name: {todo.text}</h1>
                                <h1>Phone:{todo.phone} </h1>
                                <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })} className="border bg-blue-200 w-80 py-3 m-2">Remove</button>
                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Views;