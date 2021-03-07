import React, { Component } from 'react';
import ProductCardComponent from './ProductCardComponent';

class ProductListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            message: null
        }
    }

    componentDidMount() {
        // do nothing
    }

    render() {
        return (
            <div class="row">
                <div class="col-md-9">
                    <div class="row card-deck">
                        <div class="col-lg-4 col-md-6 mb-4">
                            <ProductCardComponent/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductListComponent