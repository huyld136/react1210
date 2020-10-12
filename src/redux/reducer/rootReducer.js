//
import { combineReducers } from 'redux'
import BaiTapGioHangReducer from './BaiTapGioHangReducer'

// state tổng của ứng dụng
export const rootReducer = combineReducers({
    // Nơi khai báo các state theo từng nghiệp vụ
    StateBaiTapGioHang: BaiTapGioHangReducer,
});
