import { Component } from "react";

export class TodoForm extends Component {
    state = {
        todoItem: {
            title: '123',
        }
    };

    onTitleChange = (event) => {
        console.log(event.target.value);
    }

    onFormSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    value={this.state.todoItem.title}
                    onChange={this.onTitleChange}
                ></input>
                <button>Добавить</button>
            </form>
        );
    }
}