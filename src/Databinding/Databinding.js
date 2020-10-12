import React, { Component } from 'react'

export default class Databinding extends Component {

    // Thuộc Tính của lớp đói tượng => Sử dụng được ở nhiều phương thức trong lớp ĐT
    hocVien = {
        ma: 1,
        avata: 'https://picsum.photos/200/200',
        tenHocVien: 'Nguyen Van Toan',
    }

    //Phương thức => phương thực có thể gọi trong các phương thức khác của lớp đối tượng
    renderHocVien = () => {
        return <div className="card border-dark">
            <img className="w-50 card-img-top" src={this.hocVien.avata} alt="" />
            <div className="card-body">
                <h4 className="card-title">{this.hocVien.tenHocVien}</h4>
                <p className="card-text">{this.hocVien.ma}</p>
            </div>
        </div>
    }


    render() {
        // binding data là biến
        let title = 'CYBERSOFT';
        let imgSrc = 'https://picsum.photos/200/200';

        // binding data là hàm
        const renderImg = () => {
            return <div className="card text-white bg-primary">
                <img className="card-img-top" src={imgSrc} alt />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                </div>
            </div>

        }
        //Giá trị hàm muốn render ra giao diện phải trả về chuỗi, số hoặc JSX


        return (
            <div>
                <div id="title">{title}</div>

                <div className="w-25">
                    <img src={imgSrc} />
                </div>

                <input className="w-50 form-control" value={title} />

                <div className="w-25">
                    {renderImg()}
                </div>

                <ul>
                    <li>{this.hocVien.ma}</li>
                    <li>{this.hocVien.avata}</li>
                    <li>{this.hocVien.tenHocVien}</li>
                </ul>

                <div>
                {this.renderHocVien()}
                </div>
                        databinding
            </div>
        )
    }
}
