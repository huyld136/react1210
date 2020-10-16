import React, { Component } from 'react'
import DanhSachXucXac from './DanhSachXucXac'
import KetQuaTroChoi from './KetQuaTroChoi'
import style from './BaiTapGameXucXac.module.css'

/**
 * 1 Xây dựng layout - chia component
 * 2 Xác định state - Tổ chức lưu chữ
 *  + biến tài xỉu: string
 *  + mảng xúc xắc [{ma:'',hinhAnh:''},{ma:'',hinhAnh:''},{ma:'',hinhAnh:''}]
 *  + Tổng số bàn thắng: number
 *  + Tổng số bàn chơi: number
 */

export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className={`${style.fontGameXucXac}`} style={{ backgroundImage: 'url(./img/BaiTapGameXucXac/bgGame.png)', width: '100%', height: '100%', position: 'fixed', top: 0, left: 0 }}>
                <h1 className="display-4 text-center mt-5">Bài Tập Game Xúc Xắc</h1>
                <DanhSachXucXac />
                <KetQuaTroChoi />
            </div>
        )
    }
}
