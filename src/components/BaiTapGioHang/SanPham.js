import React, { Component } from 'react'


export default class SanPham extends Component {

    //method
    handleDetail = () => {
        this.props.handleChiTietSP(this.props.dsanPham);
    };

    render() {
        // Nếu thấy render ra mỗi obj 2 lần thì là do strictmode trong index.js chính
        console.log(this.props.dsanPham);

        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={this.props.dsanPham.hinhAnh}
                    alt
                />
                <div className="card-body">
                    <h4 className="card-title">
                        {this.props.dsanPham.tenSP}
                    </h4>
                    <button className="btn btn-success" onClick={this.handleDetail}>
                        Chi tiết
                                        </button>
                    <button className="btn btn-danger" onClick={() => {
                        this.props.handleCardList(this.props.dsanPham)
                    }}>
                        Thêm giỏ hàng
                                        </button>
                </div>
            </div>
        )
    }
}
