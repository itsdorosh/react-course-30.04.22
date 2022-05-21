import { Component } from "react";

export class TodoForm extends Component {
    render() {
        return (
            <form className="TodoForm">
                <input type="text"></input>
                <button>Добавить</button>
            </form>
        );
    }
}