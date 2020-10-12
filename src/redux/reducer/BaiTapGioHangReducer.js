const stateDefault = {
    gioHang: [],
}

const BaiTapGioHangReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'THEM_GIO_HANG': {
            //cập nhật lại state
            let gioHangUpdate = [...state.gioHang];

            //xử lý
            const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.spGH.maSP);
            if (index !== -1) {
                gioHangUpdate[index].soLuong += 1;
            } else {
                gioHangUpdate.push(action.spGH);
            }

            //gán lại state cũ = giá trị mới
            state.gioHang = gioHangUpdate;
            return { ...state };
            break;
        }
        case 'XOA_GIO_HANG': {
            let gioHangUpdate = [...state.gioHang];

            const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSPClick);

            if (index !== -1) {
                gioHangUpdate.splice(index, 1);
            }
            state.gioHang = gioHangUpdate;
            return { ...state }

            break;
        }
        case 'TANG_GIAM_SL': {
            let gioHangUpdate = [...state.gioHang];
            const index = gioHangUpdate.findIndex(sp => sp.maSP === action.maSP);

            if (index !== -1) {
                if (action.tangGiam) {
                    gioHangUpdate[index].soLuong += 1;
                } else {
                    if (gioHangUpdate[index].soLuong > 1) {
                        gioHangUpdate[index].soLuong -= 1;
                    }
                }
            }
            state.gioHang = gioHangUpdate;
            return { ...state }
            break;
        }
    }
    return { ...state };


}

export default BaiTapGioHangReducer;
