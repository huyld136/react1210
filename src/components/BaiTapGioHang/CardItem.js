import React, { Component } from 'react'

export default class CardItem extends Component {
    render() {
        return (
            <tr className="card-item">
                <td>{this.props.card.maSP}</td>
                <td>{this.props.card.tenSP}</td>
                <td>
                    <img
                        src={this.props.card.hinhAnh}
                        width={50}
                        alt="gjgk"
                    />
                </td>
                <td>
                    <button onClick={() => { this.props.tangGiamSoLuong(this.props.card.maSP, false) }}>-</button>
                    {this.props.card.soLuong}
                    <button onClick={() => { this.props.tangGiamSoLuong(this.props.card.maSP, true) }}>+</button>
                </td>
                <td>{this.props.card.giaBan.toLocaleString()}</td>
                <td>{(this.props.card.soLuong * this.props.card.giaBan).toLocaleString()}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => { this.props.delItem(this.props.card.maSP) }}>
                        Delete
                    </button>
                </td>
            </tr>

        )
    }
}
