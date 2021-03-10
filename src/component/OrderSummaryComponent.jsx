import React, { Component } from 'react';
import {
  Alert,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

class OrderSummaryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paid: false
        }
    }

    componentDidMount() {
        // do nothing
    }

    render() {
        const {paid} = this.state;

        return (
            <div class="col-md-6 offset-3">
                <h2 class="text-center">ORDER</h2>
                <ul>
                    <li>
                        Big Mac - 6.59 x 2 pcs.
                    </li>
                </ul>
                <h3 class="text-right">Total amount: 13.18</h3>

                <Button block color="primary" onClick={() => this.setState({ paid: true })}>Pay</Button>
                {paid ?
                <Alert color="success">
                <strong>Congratulation!</strong> You successfully made the order.
                </Alert> : null
                }
            </div>
        )
    }
}

export default OrderSummaryComponent