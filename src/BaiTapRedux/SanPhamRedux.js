import React, { Component } from 'react';
import { connect } from 'react-redux';

class SanPhamRedux extends Component {
    render() {
        let { sanPham } = this.props;
        return (
            <div className="card text-left">
                {/* <img className="card-img-top" src="https://picsum.photos/200" alt="" /> */}
                <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.tenSP} style={{ width: '100%', height: '300px' }} />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
                    <button onClick={() => {
                        this.props.themGioHang(sanPham);
                    }} className="btn btn-danger">Thêm giỏ hàng</button>
                </div>
            </div>

        )
    }
}


//Hàm lấy state từ redux
const mapStateToProps = (state) => {
    return {

    }
}

//Hàm như SetState
const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (spClick) => {
            // Từ sp được click => tạo ra sp giỏ hàng
            let spGH = { ...spClick, soLuong: 1 };

            //để gửi giá trị lên reducer cần 1 obj có thuộc tính type để phân biệt state nào thay đổi
            let action = {
                type: 'THEM_GIO_HANG',
                spGH: spGH
            }

            //Dùng hàm dispatch mà redux cung cấp đưa action lên reducer
            dispatch(action);
        }
    }
}

//Tham số 1 hàm connect là 1 hàm(callback): lấy giá trị từ reducer về
//Tham số 2 hàm connect là 1 hàm (callback): đưa các giá trị lên Reducer
export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux);
