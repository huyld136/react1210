import React, { Component } from 'react'
import ProductList from './ProductList'

export default class Product extends Component {
    render() {
        return (
            <>
<section id="laptop" className="container-fluid pt-5 pb-5 bg-dark text-dark">
  <h1 className="text-center text-white">BEST LAPTOP</h1>
  <div className="row">
            <ProductList />
  </div>
</section>

            </>
        )
    }
}
