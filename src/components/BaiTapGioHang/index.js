/**
 * các bước thực hiện
 * 1. Xây dựng giao diện - done
 * 2. xác định nguồn dữ liệu thay đổi trên giao diện để lưu state - done
 * 2. xác định nơi lưu trữ // giao diện cha. + chứa nút xử lý làm thay đổi dữ liệu đó(state đó)
 * 3. lấy data trong state đi binding ra jsx
 * 4. render danh sách sản phẩm
 * 5. xây dựng chức năng xem chi tiết
 * 6. xây dựng chức năng thêm vào giỏ hàng
 * 7. xây dựng chức năng tăng giảm số lượng
 * 8. xây dựng chức năng xóa sản phẩm khỏi giỏ hàng
 * 9. xây dựng chức năng hiển thị tổng số sản phẩm trong giỏ hàng
 * 10.
 */


import React, { Component } from 'react'
import danhSachSanPham from './data.json'
import Modals from './Modals'
import SanPham from './SanPham'

export default class BaiTapGioHang extends Component {
    state = {
        sanPhamChiTiet: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },
        cardList: []
    }

    // ?????
    handleCardList = (sanPham) => {
        //tìm vị trí
        const index = this.state.cardList.findIndex((card) => {
            return card.maSP === sanPham.maSP;
        });

        let cardList = [...this.state.cardList];
        if (index !== -1) {
            // tìm thấy => tăng số lượng
            cardList[index].soLuong += 1;
        } else {
            // không tìm thấy => thêm vào mảng
            const newCard = { ...sanPham, soLuong: 1 };
            cardList = [...this.state.cardList, newCard];

        }

        // const newCard = { ...sanPham, soLuong: 1 };
        // const cardList = [...this.state.cardList, newCard];
        this.setState({
            cardList,
        })
    }

    handleSanPhamChiTiet = (sanPhamChiTiet) => {
        this.setState({
            // sanPhamChiTiet: sanPhamChiTiet,
            sanPhamChiTiet,
        });
    }

    //method
    renderDanhSachSanPham = () => {

        return danhSachSanPham.map((sanPham, index) => {
            return (
                <div key={index} className="col-sm-4">
                    <SanPham dsanPham={sanPham} handleChiTietSP={this.handleSanPhamChiTiet} handleCardList={this.handleCardList} />
                </div>
            );
        });
    }


    //Xoa
    delItem = (maSP) => {
        //xuly xoa gio hang


        let gioHangUpdate = [...this.state.cardList];
        let indexSP = gioHangUpdate.findIndex(sp => sp.maSP === maSP);
        console.log(indexSP);

        if (indexSP !== -1) {
            gioHangUpdate.splice(indexSP, 1);

        }

        // setState gio hang
        this.setState({
            cardList: gioHangUpdate,
        }, () => {
            console.log(this.state.cardList)
        })
    }

    // Tăng giảm số lượng
    tangGiamSL = (maSP, tangGiam) => { //true = Tăng || false = Giảm
        console.log('maSP', maSP);
        console.log('tanggiam', tangGiam);

        let gioHangUpdate = [...this.state.cardList];
        let indexSP = gioHangUpdate.findIndex(sp => sp.maSP === maSP);
        // let indexSP = gioHangUpdate.find(sp => sp.maSP === maSP);

        if (indexSP !== -1) {
            if (tangGiam) {
                gioHangUpdate[indexSP].soLuong += 1;
            } else {
                gioHangUpdate[indexSP].soLuong -= 1;
            }
        }

        //setState
        this.setState({
            cartList: gioHangUpdate,
        });
    }

    render() {
        return (
            <div>
                <section className="container">
                    <h3 className="title text-center">Bài tập giỏ hàng</h3>
                    <div className="container text-center my-2">
                        <button
                            className="btn btn-danger "
                            data-toggle="modal"
                            data-target="#modelId"
                        >
                            Giỏ hàng (0)
                        </button>
                    </div>
                    <div className="container danh-sach-san-pham">
                        <div className="row">
                            {this.renderDanhSachSanPham()}
                        </div>
                    </div>
                    <Modals cardList={this.state.cardList} delItem={this.delItem} tangGiamSL={this.tangGiamSL} />
                    <div className="row">
                        <div className="col-sm-5">
                            <img
                                className="img-fluid"
                                src={this.state.sanPhamChiTiet.hinhAnh}
                                alt="sths"
                            />
                        </div>
                        <div className="col-sm-7">
                            <h3>Thông số kỹ thuật</h3>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{this.state.sanPhamChiTiet.manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>
                                            {this.state.sanPhamChiTiet.cameraSau}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>RAM</td>
                                        <td>{this.state.sanPhamChiTiet.ram}</td>
                                    </tr>
                                    <tr>
                                        <td>ROM</td>
                                        <td>{this.state.sanPhamChiTiet.rom}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
