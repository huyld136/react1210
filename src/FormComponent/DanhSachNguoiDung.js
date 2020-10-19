import React, { Component } from 'react'
import FormComponent from './FormComponent'

export default class DanhSachNguoiDung extends Component {
    render() {
        return (
            <div className="container mt-5">
                <FormComponent />
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

                    </tbody>
                </table>
            </div >
        )
    }
}
