import React, { Component } from 'react'
import ClassProps from './ClassProps'
import FunctionProps from './FunctionProps'

export default class DemoProps extends Component {
    state = {
        ten: "huyld",
        lop: 51,
    }
    render() {
        return (
            <div>
                <h2>DEMO PROPS</h2>
                <FunctionProps
                    //cách truyền props trong reactjs
                    hoVaTen={this.state.ten} lop={this.state.lop}
                />
                <ClassProps
                    //cách truyền props trong reactjs
                    hoVaTen={this.state.ten} lop={this.state.lop}
                />
            </div>
        )
    }
}
