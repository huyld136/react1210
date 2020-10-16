import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
    renderTong = () => {
        let tongDiem = this.props.mangXucXac.reduce((tongdiem, xx) => {
            return tongdiem += xx.so;
        }, 0);
        let KQ = tongDiem > 9 ? 'Tài' : 'Xỉu';

        return <div>
            <h1 className="text-center">{tongDiem} - {KQ}</h1>
        </div>
    }

    render() {
        return (
            <div className="container text-center mt-5">
                {this.renderTong()}
                <div className="text-center">
                    <button className="btn btn-success p-3" onClick={() => { this.props.playGame() }}>
                        <span className="display-4 text-white">Play</span>
                    </button>
                </div>
                <div className="display-4">
                    Bạn chọn: <span className="text-danger">{this.props.banChon}</span>
                </div>
                <div className="display-4">
                    Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span>
                </div>
                <div className="display-4">
                    Tổng số bàn chơi: <span className="text-primary">{this.props.tongSoBanChoi}</span>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        banChon: state.stateBaiTapGameXucXac.banChon,
        soBanThang: state.stateBaiTapGameXucXac.soBanThang,
        tongSoBanChoi: state.stateBaiTapGameXucXac.tongSoBanChoi,
        mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,


        tongDiem: state.stateBaiTapGameXucXac.tongDiem,
        status: state.stateBaiTapGameXucXac.status,

    }
}

const mapDispathToProps = (dispatch) => {
    return {
        playGame: () => {
            const action = {
                type: "RANDOM_XUC_XAC",
            }
            dispatch(action);

            const actionXLKQ = {
                type: 'END_GAME'
            }
            dispatch(actionXLKQ);

        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(KetQuaTroChoi);
