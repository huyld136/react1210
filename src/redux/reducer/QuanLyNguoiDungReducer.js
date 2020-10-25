import { XOA_NGUOI_DUNG, SUA_NGUOI_DUNG } from "../constants/QuanLyNguoiDungConst"

const stateDefault = {
    mangNguoiDung: [
        { maNguoiDung: 1, tenNguoiDung: 'Nguyen Van a', soDienThoai: '0988123123', email: 'gmai@gmail.com' },
        { maNguoiDung: 2, tenNguoiDung: 'Nguyen Van b', soDienThoai: '0988123127', email: 'email@gmail.com' },
        { maNguoiDung: 3, tenNguoiDung: 'Nguyen Van c', soDienThoai: '0988123129', email: 'yahoo@gmail.com' },
    ],
    nguoiDungChinhSua: { maNguoiDung: '', tenNguoiDung: '', soDienThoai: '', email: '' },
    stateForm: {
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
        },
        maNguoiDungXoa: '',
    }
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    console.log(action);

    switch (action.type) {
        case XOA_NGUOI_DUNG: {
            let mangNguoiDungUpdate = [...state.mangNguoiDung];
            mangNguoiDungUpdate = mangNguoiDungUpdate.filter(nguoidung => nguoidung.mangNguoiDung != action.maNguoiDung);
            state.mangNguoiDung = mangNguoiDungUpdate;
            return { ...state };
        }
        case SUA_NGUOI_DUNG: {
            // lấy người dùng đươc click
            let nguoiDungClick = { ...action.nguoiDungChinhSua };

            //Cập nhật state
            state.nguoiDungChinhSua = nguoiDungClick;

            //Cach 2
            state.stateForm = { ...state.stateForm, values: nguoiDungClick }

            return { ...state };
        }
        case 'HANDLE_CHANGE_INPUT': {

            //Cập nhật state
            state.stateForm = action.newState;
            return { ...state };
        }
        case 'CAP_NHAT_THONG_TIN': {
            console.log('nguoiDungCapNhat', action.nguoiDungCapNhat);

            //Cập nhật state
            let mangNguoiDungUpdate = [...state.mangNguoiDung];
            let index = mangNguoiDungUpdate.findIndex(nd => nd.maNguoiDung === action.nguoiDungCapNhat.maNguoiDung);
            console.log('i', index);

            mangNguoiDungUpdate[index] = action.nguoiDungCapNhat;

            state.mangNguoiDung = mangNguoiDungUpdate;

            return { ...state };
        }
        case 'THEM_NGUOI_DUNG': {
            const mangNguoiDungUpdate = [...state.mangNguoiDung, action.nguoiDung];

            state.mangNguoiDung = mangNguoiDungUpdate;
            return { ...state };
        }
        default:
            return { ...state };
    }
}
