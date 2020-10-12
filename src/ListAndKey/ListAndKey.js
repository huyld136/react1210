import React, { Component } from 'react'

export default class ListAndKey extends Component {
    danhSachKhoaHoc = [
        "NodeJS", "ReactJS", "VueJS"
    ];

    // renđer method
    renderDSKH = () => {
        var content = this.danhSachKhoaHoc.map((khoaHoc, index) => {
            return <li>{khoaHoc}</li>;
        });
        return content;
    }

    render() {
        return (
            <>
                <h2>List And Key</h2>
                <h3>Danh sách khóa học</h3>
                <ul>
                    {this.renderDSKH()}
                </ul>
            </>
        )
    }
}
