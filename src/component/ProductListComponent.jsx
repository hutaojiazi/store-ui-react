import React, { Component } from 'react';
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ProductService from '../service/ProductService.js';

class ProductListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            isLoading: true,
            errorMessage: null
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts() {
        this.setState({isLoading: true});
        ProductService.getAll()
            .then(
                response => {
                    console.log("received response->" + JSON.stringify(response.data.value));
                    this.setState({ 
                        products: response.data.value,
                        isLoading: false,
                        errorMessage: null 
                    })
                }
            )
    }

    render() {
        const {products, isLoading, errorMessage} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div class="col-md-9">
                <div class="row card-deck">
                    {products.map(p =>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <Card className="text-center">
                                <CardHeader tag="h4" className="d-flex align-items-center justify-content-center h-100">{p.name}</CardHeader>
                                <CardImg top width="200px" src={p.pictureUrl} alt="" />
                                <CardBody>
                                    <CardTitle tag="h5">{p.price}</CardTitle>
                                    <Button color="primary">Add To Cart</Button>
                                </CardBody>
                            </Card>
                        </div>
                    )}
                    {!products || products.length === 0 ? <p>No Products!</p> : null}
                </div>
            </div>
        )
    }
}

export default ProductListComponent