    import './App.css';
    import React from 'react';

    export default class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                counter: props.counter
            }
        }

        increase = () => {
            if (this.state.counter < 50) {
                this.setState({
                    counter: this.state.counter + 1
                })
            }
        }

        decrease = () => {
            if (this.state.counter > - 50) {
                this.setState ({
                    counter: this.state.counter - 1
                 })
            }
        }

        random = () => {
            const rand = Math.floor(Math.random() * (50 - -50) + -50);
            this.setState( {
                counter: rand
            }
            )
        }

        onReset = () => {
            this.setState({
                counter: this.props.counter
            })
        }

    render() {
        return (
            <div className="app">
                <div className="counter">{this.state.counter}</div>
                <div className="controls">
                    <button onClick={this.increase}>INC</button>
                    <button onClick={this.decrease}>DEC</button>
                    <button onClick={this.random}>RND</button>
                    <button onClick={this.onReset}>RESET</button>
                </div>
            </div>
        )
    }
}
