import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class LifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: { index: 1, },
        }
        console.log('============================');
        console.log('constructer');
    }

    static getDerivedStateFromProps(newPrpos, currentState) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate');
    // }


    render() {
        console.log('render');

        return (
            <div>
                <header>Header Component</header>
                <h1>LifeCycle Number: {this.state.number.index}</h1>
                <button onClick={() => {
                    let newNumber = this.state.number;
                    newNumber.index += 1;
                    this.setState({ number: newNumber })
                }}>+</button>
                {/* {this.state.number < 3 ? <ChildComponent /> : ''} */}
                <ChildComponent number={this.state.number} />
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount');
        console.log('============================');
    }

    //Hamf nay chay khi setState hoac thay doi props
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
}
