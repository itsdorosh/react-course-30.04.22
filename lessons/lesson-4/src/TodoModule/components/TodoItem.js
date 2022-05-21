import './TodoItem.css';

const getCompletionStatus = status => status ? 'completed' : 'default';

export function TodoItem(props) {
    return (
        <div className="todo-item">
            <span onClick={() => props.onItemComplete(props.item.id)}>✅</span>
            <span className={getCompletionStatus(props.item.completed)}>{props.item.title}</span>
            <button onClick={() => props.onItemDelete(props.item.id)}>X</button>
        </div>
    );
}
