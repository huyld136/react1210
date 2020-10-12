import React, { Component } from 'react'
import SanPhamGHRedux from './SanPhamGHRedux';

// import thư viện kết nối react component và redux store
import { connect } from 'react-redux';

class GioHangRedux extends Component {
    renderGioHang = () => {
        return (
            <SanPhamGHRedux />
        );
    }

    render() {
        console.log('props', this.props.gioHang);
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Tên SP</th>
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

export default connect(mapStateToProps)(GioHangRedux); // Kết nối giữa gioHangReduxComponent và reduxStore
