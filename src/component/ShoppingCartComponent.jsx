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

class ShoppingCartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount() {
        // do nothing
    }

    render() {
        return (
            <div class="col-md-3">
                <Card className="text-white bg-danger mb-3" style={{maxWidth: '18rem'}}>
                    <CardHeader tag="h4" className="text-center">Shopping Cart</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5">Total: </CardTitle>
                        <hr/>
                        <CardTitle tag="h6">Items bought:</CardTitle>
                        <ul>
                            <li>
                                Big Mac - 2 pcs.
                            </li>
                        </ul>
                        <Button block className="btn-light">Checkout</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default ShoppingCartComponent