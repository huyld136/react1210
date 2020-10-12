import React from 'react'

export default function FunctionProps(props) {
    return (
        <div>
            <h3>Function Props</h3>
            <p>Tên: {props.hoVaTen}</p>
            <p>Lớp: {props.lop}</p>
        </div>
    )
}
