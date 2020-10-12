import React, { Component } from 'react'
import GioHangRedux from './GioHangRedux'
import danhSachSanPham from './data.json'
import SanPhamRedux from './SanPhamRedux'

export default class BaiTapGioHangRedux extends Component {

    renderSanPham = () => {
        return danhSachSanPham.map((sp, index) => {
            return (
                <div className="col-4" key={index}>
                    <SanPhamRedux sanPham={sp} />
                </div>
            );
        });
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Bài Tập Redux</h3>
                <div className="gioHang">
                    <div className="text-center my-3">Gio Hang (0)</div>
                    <GioHangRedux />
                </div>
                <div className="row">
                    {this.renderSanPham()}
                </div>


            </div>
        )
    }
}
