// state less component là component function (react function component)
//cú pháp: rsc + enter
 import React from 'react'

 export default function DemoStateless() {

    //Bên trong lệnh return của function component là nội dung giao diện của thẻ này.
    //Lưu ý nội dung component phải được bao phủ 1 thẻ bất kỳ
     return (
        <div className="container">
            <div className="card text-white bg-dark w-25 ">
            <img className="card-img-top" src="holder.js/100px180/" alt />
            <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
            </div>
            </div>
        </div>
     )
 }
