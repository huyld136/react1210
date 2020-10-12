import React, { Component } from 'react'
import SanPhamGHRedux from './SanPhamGHRedux';

// import thư viện kết nối react component và redux store
import { connect } from 'react-redux';

class GioHangRedux extends Component {
    renderGioHang = () => {
        return this.props.gioHang.map((spGioHang, index) => {
            return (
                <tr key={index}>
                    <td>{spGioHang.maSP}</td>
                    <td>{spGioHang.tenSP}</td>
                    <td><img src={spGioHang.hinhAnh} width={50} height={50} /></td>
                    <td>
                        <button onClick={() => this.props.tangGiamSoLuong(spGioHang.maSP, false)} className="btn btn-success">-</button>
                        <span className="px-3">{spGioHang.soLuong}</span>
                        <button onClick={() => this.props.tangGiamSoLuong(spGioHang.maSP, true)} className="btn btn-success">+</button>
                    </td>
                    <td>{spGioHang.giaBan.toLocaleString()}</td>
                    <td>{(spGioHang.giaBan * spGioHang.soLuong).toLocaleString()}</td>
                    <td><button onClick={() => this.props.xoaGioHang(spGioHang.maSP)} className="btn btn-danger">Xóa</button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Hình Ảnh</th>
                        <th>Số Lượng SP</th>
                        <th>ĐƠn Giá</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderGioHang()}
                </tbody>
            </table>

        )
    }
}
// Lấy state từ dedux store biến thành props của component
// tham số state : đại diện cho rootReducer
const mapStateToProps = (state) => {
    return {
        gioHang: state.StateBaiTapGioHang.gioHang
    }
}

const mapdespatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {

            let action = {
                type: 'XOA_GIO_HANG',
                maSPClick: maSPClick
            }
            dispatch(action);
        },
        tangGiamSoLuong: (maSP, tangGiam) => {
            let action = {
                type: 'TANG_GIAM_SL',
                maSP,
                tangGiam
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapdespatchToProps)(GioHangRedux); // Kết nối giữa gioHangReduxComponent và reduxStore
