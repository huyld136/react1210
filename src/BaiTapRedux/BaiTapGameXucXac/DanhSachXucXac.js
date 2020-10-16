import React, { Component } from 'react'
import { connect } from 'react-redux'
class DanhSachXucXac extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5 text-center">
                    <div className="col-3">
                        <button className="btn btn-success p-5" onClick={() => { this.props.datCuoc(true) }}>
                            <span className="display-4">
                                Tài
                        </span>
                        </button>
                    </div>
                    <div className="col-6">

                        <div className="row justify-content-center">
                            {this.props.mangXucXac.map((xx, index) => {
                                return (
                                    <div className="mx-2 my-5" key={index}>
                                        <img src={xx.hinhAnh} style={{ width: 50 }} alt="1" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-danger p-5" onClick={() => { this.props.datCuoc(false) }}>
                            <span className="display-4">
                                Xỉu
                        </span>
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (status) => {
            let action = {
                type: 'CHON_TAI_XIU',
                status,
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachXucXac);
