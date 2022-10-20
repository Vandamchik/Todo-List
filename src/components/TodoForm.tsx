import React, { useState } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}


// Для того что бы получить пропс в виде функции мы должны написать такую конструкцию
export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [title, setTitle] = useState<string>("");

    function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    function keyPressHandler(event: React.KeyboardEvent) {
         if(event.key === "Enter") {
             props.onAdd(title)
             console.log(title)
             setTitle("")
         }
    }

    return (
        <div className="input-field mt2">
            <input
                onChange={changeHandler}
                value={title}
                type="text"
                id="title"
                placeholder="Enter todos task"
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                Enter todos task
            </label>
        </div>
    );
};

