import React, {useEffect, useState} from 'react';
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interfaces/interfaces";

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    // делаем для того что бы после перезагрузки не пропадали наши туду
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[]
        setTodos(saved)
    },[])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    function addHandler(title: string) {
        const newTodo:ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        // setTodos([newTodo,...todos])
        //передаем предидущее состояние с новым массивом
        setTodos(prev => [newTodo,...prev])
    }

    function toggleHandler(id:number) {
        setTodos(prev => prev.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    function removeHandler(id: number) {
        const shouldRemove = window.confirm("You confident that you want delete?")
        if(shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }

    return (
        <>
            <TodoForm onAdd={addHandler} />
            <TodoList
                onToggle={toggleHandler}
                onRemove={removeHandler}
                todos={todos}
            />
        </>
    );
};

