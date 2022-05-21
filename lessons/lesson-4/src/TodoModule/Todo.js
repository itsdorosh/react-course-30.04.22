import { Component } from "react";
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

import './Todo.css';

export class Todo extends Component {
    state = {
        list: [
            {id: 1, title: "Помыть полы", completed: false},
            {id: 2, title: "Вынести мусор", completed: false},
            {id: 3, title: "Выложить новую домашку", completed: false},
        ],
    };

    onTodoAddHandler = (newItem) => {
        console.log(newItem);
    }

    render() {
        return (
            <>
                <TodoForm onTodoAdd={this.onTodoAddHandler} />
                <TodoList />
            </>
        );
    }
}
