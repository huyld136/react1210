import React, { Component } from 'react';
import swal from 'sweetalert2';
import { connect } from 'react-redux'
import { xoaNguoiDungAction } from '../redux/actions/QuanLyNguoiDungActions';

class FormComponent extends Component {

    state = {
        values: {
            maNguoiDung: '',
            tenNguoiDung: '',
            soDienThoai: '',
            email: '',
        },
        errors: {
            maNguoiDung: '',
            tenNguoiDung: '',
            soDienThoai: '',
            email: '',
        },
        maNguoiDungXoa: '',
    }

    handleChangeInput = (event) => {
        //Lay ra name va value
        let { name, value } = event.target;

        //tao ra value moi gia tri = value cu
        let newValues = { ...this.state.values }
        newValues[name] = value;

        // xu ly
        let newErrors = { ...this.state.errors };
        newErrors[name] = value.trim() === '' ? 'Kho duoc bo trong' : '';

        // lay ra attribute types (cac thuoc tinh tren the goi la attribue)
        let type = event.target.getAttribute('types');
        if (type === 'phoneNumber') {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = 'Du lieu phai la so!';
            }
        };
        if (type === 'email') {
            const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value.trim())) {
                newErrors[name] = 'Email khong hop le!';
            }
        };


        this.setState({
            values: newValues, // gan value == value moi
            errors: newErrors,
        }, () => {
            console.log(this.state);
        });


        // this.setState({
        //     // maNguoiDung = value,
        //     [name]: value,
        // }, () => {
        //     console.log(this.state);

        // });
    }

    handleSubmit = (event) => {
        // ca su kien submit lai trang cua browser.
        event.preventDefault();

        let valid = true;
        //dung obj dung for in
        for (let tenThuocTinh in this.state.values) {
            if (this.state.values[tenThuocTinh].trim() === '') {
                valid = false;
            }
        }

        //duyet loi => tat ca loi phai = rong
        for (let tenThuocTinh in this.state.errors) {
            if (this.state.errors[tenThuocTinh].trim() !== '') {
                valid = false;
            }
        }

        if (!valid) {
            // alert('du lieu khong hop le');
            swal.fire(
                'OOPs...!',
                'du lieu khong hop le!',
                'error'
            )

        } else {
            swal.fire(
                'Done',
                'Them nguoi dung thanh cong',
                'success'
            )
        }



    }

    // GIAI PHAP 1 SỬ DỤNG LIFECYCLE ComponentWillReceiveprops
    //Hàm này chạy khi props thay đổi và trước khi render
    componentWillReceiveProps(newProps) {
        //Khi bấm nút sửa => props thay đổi ta lấy props từ người dùng chỉnh sửa (this.props.nguoiDungChinhSua)
        //ta gán vào state của component => và cho render value từ state
        this.setState({
            values: newProps.nguoiDungChinhSua
        })

    }



    //
    render() {

        let { maNguoiDung, tenNguoiDung, soDienThoai, email } = this.state.values;

        return (
            <form className="card" onSubmit={this.handleSubmit} >
                <div className="card-header bg-dark text-light font-weight-bold">
                    <span>THong Tin Nguoi Dung</span>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <span>Ma Nguoi dung</span>
                                <input value={maNguoiDung} className="form-control" name="maNguoiDung" onChange={this.handleChangeInput} />
                                <p className="text-danger">{this.state.errors.maNguoiDung}</p>
                            </div>
                            <div className="form-group">
                                <span>Ten Nguoi dung</span>
                                <input value={tenNguoiDung} className="form-control" name="tenNguoiDung" onChange={this.handleChangeInput} />
                                <p className="text-danger">{this.state.errors.tenNguoiDung}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <span>So dien thoai</span>
                                <input types="phoneNumber" value={soDienThoai} className="form-control" name="soDienThoai" onChange={this.handleChangeInput} />
                                <p className="text-danger">{this.state.errors.soDienThoai}</p>
                            </div>
                            <div className="form-group">
                                <span>Email</span>
                                <input types="email" value={email} className="form-control" name="email" onChange={this.handleChangeInput} />
                                <p className="text-danger">{this.state.errors.email}</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-success">Them Nguoi Dung</button>
                        </div>
                        <div className="col-12 mt-3">
                            <input name="maNguoiDungXoa" onChange={(e) => {
                                this.setState({
                                    maNguoiDungXoa: e.target.value
                                })
                            }} placeholder="Nhập vào mã người dùng cần xóa" className="form-control" />
                            <button type="button" onClick={() => {
                                // dispatch mã người dùng lên reducer
                                // let action = {
                                //     type: 'XOA_NGUOI_DUNG',
                                //     maNguoiDung: this.state.maNguoiDungXoa,
                                // }
                                this.props.dispatch(xoaNguoiDungAction(this.state.maNguoiDungXoa));
                            }} className="btn btn-danger mt-3">Xóa</button>
                        </div>
                    </div>

                </div>
            </form>




        )
    }
}

let mapStateToProps = state => {
    return {
        nguoiDungChinhSua: state.QuanLyNguoiDungReducer.nguoiDungChinhSua,
    }
}

export default connect(mapStateToProps)(FormComponent)
