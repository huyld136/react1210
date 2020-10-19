import React, { Component, PureComponent } from 'react'

export default class ChildComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
        }
        console.log('=== constructer Child');
    }

    static getDerivedStateFromProps(newPrpos, currentState) {
        console.log('=== getDerivedStateFromProps Child');
        return null;
    }

    shouldComponentUpdate() {
        console.log('=== shouldComponentUpdate Child');
        return true;
    }

    render() {
        console.log('render Child');

        return (
            <div>
                ChildComponent
                <h3>{this.props.number.index}</h3>
            </div>
        )
    }



    componentDidMount() {
        console.log('=== componentDidMount Child');
    }

    //Hamf nay chay khi setState hoac thay doi props
    componentDidUpdate() {
        console.log('=== componentDidUpdate Child');
    }

    componentWillUnmount() {
        // Life cycle chay truoc khi component mat khoi giao dien
        console.log('==== componentWillUnmount ====')
    }


}
