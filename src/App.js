import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoStateless from './components/DemoStateless';
import DemoStatefull from './components/DemoStatefull';
import BaiTapLayout1 from './components/BaiTapLayoutComponent/BaiTapLayout1';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoConditionalAndState from './DemoLogin/DemoConditionalAndState';
import BaiTapChonMauXe from './BaiTapChonMauXe';
import ListAndKey from './ListAndKey/ListAndKey';
import DemoProps from './Props/DemoProps';
import BaiTapGioHang from './components/BaiTapGioHang';
import BaiTapGioHangRedux from './BaiTapRedux/BaiTapGioHangRedux';

function App() {
  return (
    <div className="App">
      {/* <DemoStateless/> */}
      {/* <DemoStatefull /> */}
      {/* <BaiTapLayout1 /> */}
      {/* <Databinding /> */}
      {/* <HandleEvent /> */}
      {/* <DemoConditionalAndState /> */}
      {/* <BaiTapChonMauXe /> */}
      {/* <ListAndKey /> */}
      {/* <DemoProps /> */}
      {/* <BaiTapGioHang /> */}

      <BaiTapGioHangRedux />
    </div>
  );
}

export default App;
