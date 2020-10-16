const stateDefault = {
    banChon: 'Xỉu',
    mangXucXac: [
        { so: 1, hinhAnh: "./img/BaiTapGameXucXac/1.png" },
        { so: 1, hinhAnh: "./img/BaiTapGameXucXac/1.png" },
        { so: 1, hinhAnh: "./img/BaiTapGameXucXac/1.png" },
    ],
    soBanThang: 0,
    tongSoBanChoi: 0,
}


const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
    // console.log(action);
    switch (action.type) {
        case 'CHON_TAI_XIU': {
            if (action.status) {
                state.banChon = 'Tài';
            } else {
                state.banChon = 'Xỉu';
            }
            return { ...state }
        }
        case 'RANDOM_XUC_XAC': {
            let mangXucXacNgauNhien = [];
            for (var i = 0; i < 3; i++) {
                // tạo so ngau nhiem
                const soNgauNhien = Math.floor(Math.random() * 6) + 1;

                //Tạo xúc xắc ngẫu nhiên
                const xucXac = {
                    so: soNgauNhien,
                    hinhAnh: `./img/BaiTapGameXucXac/${soNgauNhien}.png`,
                }
                mangXucXacNgauNhien.push(xucXac);
            }
            //
            state.mangXucXac = mangXucXacNgauNhien;
            //
            state.tongSoBanChoi++;
            return { ...state }
        }
        case 'END_GAME': {
            //tính tổng điểm xx
            let tongDiem = state.mangXucXac.reduce((tongDiemXX, xx) => {
                return tongDiemXX += xx.so;
            }, 0);


            if ((tongDiem > 9 && state.banChon === 'Tài') || (tongDiem <= 9 && state.banChon === 'Xỉu')) {
                state.soBanThang += 1;
            }
            return { ...state }
        }


        default:
            return { ...state }
    }
}
export default BaiTapGameXucXacReducer;
