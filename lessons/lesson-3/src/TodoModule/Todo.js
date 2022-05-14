import { Component } from "react";
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export class Todo extends Component {
    render() {
        return (
            <>
                <TodoForm />
                <TodoList />
            </>
        );
    }
}