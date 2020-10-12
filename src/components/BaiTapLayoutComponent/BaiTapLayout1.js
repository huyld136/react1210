import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import Product from './Product'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Product />
                <Footer />
            </div>
        )
    }
}
