import { Component } from "react";

/**
 * TodoForm
 * 
 * Events:
 *  onTodoAdd((newItem) => void)
 */

export class TodoForm extends Component {
    state = {
        todoItem: {
            title: 'Demo Todo...',
        },
    }

    onFormSubmitHandler = (event) => {
        event.preventDefault();
        const newItem = {...this.state.todoItem, id: 10, completed: false};
        this.props.onTodoAdd(newItem);
    }

    onTitleChangeHandler = ({target}) => {
        this.setState({todoItem: {...this.state.todoItem, title: target.value}});
    }

    render() {
        return (
            <form className="TodoForm" onSubmit={this.onFormSubmitHandler}>
                <input
                    type="text"
                    value={this.state.todoItem.title}
                    onChange={this.onTitleChangeHandler}
                ></input>
                <button>Добавить</button>
            </form>
        );
    }
}