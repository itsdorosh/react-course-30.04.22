import { Component } from "react";
import { TodoItem } from "./TodoItem";

export class TodoList extends Component {
    state = {
        list: [
            {id: 1, title: "Помыть полы", completed: false},
            {id: 2, title: "Вынести мусор", completed: false},
            {id: 3, title: "Выложить новую домашку", completed: false},
        ],
    };

    onItemCompleteHandler = (id) => {
        const item = this.state.list.find((todoItem) => todoItem.id === id);
        const updatedItem = {...item, completed: !item.completed};

        this.setState({
            list: this.state.list.map((todoItem) => todoItem.id === id ? updatedItem : todoItem),
        });
    }

    onItemDeleteHandler = (id) => {
        this.setState({
            list: this.state.list.filter((todoItem) => todoItem.id !== id),
        });
    }

    render() {
        return (
            <div className="TodoList">
                <ul>
                    {this.state.list.map((todoItem) =>
                        <TodoItem
                            item={todoItem}
                            key={todoItem.id}
                            onItemComplete={this.onItemCompleteHandler}
                            onItemDelete={this.onItemDeleteHandler}
                        />
                    )}
                </ul>
            </div>
        );
    }
}