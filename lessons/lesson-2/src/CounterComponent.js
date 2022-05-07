import {Component} from 'react';

export class CounterComponent extends Component {
    state = {count: 0};
    
    render() {
        return (
            <div>
                <h1>Counter Name: {this.props.name}</h1>
                <button onClick={() => this.clickHandler('+')}>+</button>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.clickHandler('-')}>-</button>
                <p onClick={() => this.props.notify("Hello from Counter")}>Notify App.js component...</p>
            </div>
        );
    }

    clickHandler(operator) {
        console.log(this);
        const count = operator === '+' ? this.state.count + 1 : this.state.count - 1;
        this.setState({count});
    }
}
