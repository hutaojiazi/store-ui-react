import React, { Component } from 'react'
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
            <Card className="text-center">
                <CardHeader tag="h4">iPhone12 256GB Gold</CardHeader>
                <CardImg top width="200px" src="https://i.ibb.co/TrkY1By/iphone.jpg" alt="" />
                <CardBody>
                    <CardTitle tag="h5">$1399.99</CardTitle>
                    <Button color="primary">Add To Cart</Button>
                </CardBody>
            </Card>
        )
    }
}

export default ProductCardComponent