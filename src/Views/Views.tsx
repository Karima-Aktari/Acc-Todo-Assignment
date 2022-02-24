import React, { useCallback, useRef, useReducer } from 'react';
interface Todo {
    id: number,
    text: string,
}
type ActionType = { type: "ADD"; text: string } | { type: "REMOVE"; id: number }

const Views = () => {
    function reducer(state: Todo[], action: ActionType) {
        switch (action.type) {
            case "ADD":
                return [
                    ...state,
                    {
                        id: state.length,
                        text: action.text,
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
                text: newTodoRef.current.value
            })
            newTodoRef.current.value = "";
        }
    }, []);

    return (

        <div className="container mx-auto">
            <div className="text-center w-full py-5">
                <input type="text" className="border bg-blue-200 w-80 py-3 m-2" ref={newTodoRef} />
                <button onClick={onAddTodo} className="font-bold tect-xl">Add Item</button>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <div className="font-bold tect-xl">
                            {todo.text}
                            <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })} className="border bg-blue-200 w-80 py-3 m-2">Remove</button>

                        </div>
                    </div>
                ))
                }

            </div>
        </div>
    );
};

export default Views;