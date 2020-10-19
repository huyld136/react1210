import React, { Component } from 'react';
import swal from 'sweetalert2';

export default class FormComponent extends Component {

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
        }
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

        }

        swal.fire(
            'Done',
            'Them nguoi dung thanh cong',
            'success'
        )

    }

    render() {
        return (
            <form className="card" onSubmit={this.handleSubmit}>
                <div className="card-header bg-dark text-light font-weight-bold">
                    <span>THong Tin Nguoi Dung</span>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <span>Ma Nguoi dung</span>
                                <input value={this.state.values.maNguoiDung} className="form-control" name="maNguoiDung" onChange={this.handleChangeInput} />
                                <p className="text-danger">{this.state.errors.maNguoiDung}</p>
                            </div>
                            <div className="form-group">
                                <span>Ten Nguoi dung</span>
                                <input value={this.state.values.tenNguoiDung} className="form-control" name="tenNguoiDung" onChange={this.handleChangeInput} />
                                <p className="text-danger">{this.state.errors.tenNguoiDung}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <span>So dien thoai</span>
                                <input types="phoneNumber" value={this.state.values.soDienThoai} className="form-control" name="soDienThoai" onChange={this.handleChangeInput} />
                                <p className="text-danger">{this.state.errors.soDienThoai}</p>
                            </div>
                            <div className="form-group">
                                <span>Email</span>
                                <input types="email" value={this.state.values.email} className="form-control" name="email" onChange={this.handleChangeInput} />
                                <p className="text-danger">{this.state.errors.email}</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-success">Them Nguoi Dung</button>
                        </div>
                    </div>

                </div>
            </form>




        )
    }
}
