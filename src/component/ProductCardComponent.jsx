import React, { Component } from 'react'

class ProductCardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: null
        }
    }

    componentDidMount() {
        // do nothing
    }

    render() {
        return (
            <div class="card text-center">
                <div class="card-header">
                    <h4>iPhone12 256GB Gold</h4>
                </div>
                <div class="card-body">
                    <a href="#"><img class="card-img-top" width="200px" height="150px" src="https://i.ibb.co/TrkY1By/iphone.jpg" alt=""/></a>
                    <h5 class="card-title">$1399.99</h5>
                    <div class="row">
                        <div class="col-10 padding-0">
                            <button class="btn btn-primary">Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCardComponent