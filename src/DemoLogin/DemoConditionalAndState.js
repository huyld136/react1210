import React, { Component } from 'react'

export default class DemoConditionalAndState extends Component {
    // isLogin: là thuộc tính của class
        // true: đã login
        // false: chưa login

    //state là gì?
    state = {
        isLogin: false,
    }

    // isLogin = false; => cách này sai vì render không chạy lại

    // phương thức
    handleEvent = () => {
        console.log('run');
        // this.isLogin
        // this.state.isLogin = true; => sai vì render không chạy lại
        this.setState({
            isLogin : true,
        });
    }

    renderLogin = () => {
        if(this.state.isLogin){
            return <h1>Hellow huy</h1>
        } else {
            return <button onClick={this.handleEvent}>Login</button>
        }
    }

    //render là phương thức cập nhật lại giao diện
    render() {
        console.log("run render");
        return (
            <div>
                <h2>Conditionnal And State</h2>
                {this.renderLogin()}
            </div>
        )
    }
}
