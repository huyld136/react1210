import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showTitle = () => {
        alert ('show gì thì show')
    }

    showMess = (mess) => {
        alert (`hellow ${mess}`)
    }

    render() {
        return (
            <div>
                {/* Xử lý sự kiện truyền callback */}
                <button onClick={this.showTitle}>
                Helllow</button>

                {/* Xử lý sự kiện sử dụng hàm trung gian */}
                <button onClick={()=>{
                    this.showTitle();
                }}>Show title</button>

                {/* ES5 */}
                {/* bind: trả về cái hàm khác,mà chưa có gọi. */}
                {/* bind: gọi về hàm này và trả về đúng hàm đó */}
                {/* KEY: Closure Function */}
                <button onClick={this.showMess.bind(this, 'Hiuy')}>Cách 1</button>


                <button onClick={()=>{
                    this.showMess('TRuyền được luôn');
                }}>Cách 2</button>
            </div>
        )
    }
}
