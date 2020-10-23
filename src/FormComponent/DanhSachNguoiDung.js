import React, { Component } from 'react'
import FormComponent from './FormComponent'
import { connect } from 'react-redux'
import { xoaNguoiDungAction, suaNguoiDungAction } from '../redux/actions/QuanLyNguoiDungActions';
import NewFormComponent from './NewFormComponent';

class DanhSachNguoiDung extends Component {
    render() {


        return (
            <div className="container mt-5">
                {/* <FormComponent /> */}
                <NewFormComponent />
                <table className="table mt-5">
                    <thead className="bg-dark text-light font-weight-bold">
                        <tr>
                            <th>Ma nguoi dung</th>
                            <th>Ten nguoi dung</th>
                            <th>SDT</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.QuanLyNguoiDungReducer.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.maNguoiDung}</td>
                                    <td>{item.tenNguoiDung}</td>
                                    <td>{item.soDienThoai}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button className="btn btn-primary mr-3" onClick={() => {
                                            this.props.dispatch(suaNguoiDungAction(item))
                                        }}>Sửa</button>
                                        <button className="btn btn-danger" onClick={() => {
                                            //Gọi hàm trong mapDispatchTopProps

                                            //Hàm này khi sử dụng connect với redux sẽ tự có props này
                                            // let action = {
                                            //     type: 'XOA_NGUOI_DUNG',
                                            //     maNguoiDung: item.mangNguoiDung,
                                            // }
                                            this.props.dispatch(xoaNguoiDungAction(item.maNguoiDung));
                                        }}>Xóa</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        QuanLyNguoiDungReducer: state.QuanLyNguoiDungReducer.mangNguoiDung,
    }
}

export default connect(mapStateToProps)(DanhSachNguoiDung)
