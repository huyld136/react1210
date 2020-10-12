import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        console.log('classProps:', this.props);
        return (
            <div>
                <h3>ClassProps</h3>
                <p>ten: {this.props.hoVaTen}</p>
                <p>lop: {this.props.lop}</p>
            </div>
        )
    }
}
