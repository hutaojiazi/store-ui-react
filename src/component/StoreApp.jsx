import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBarComponent from './NavBarComponent';
import ProductListComponent from './ProductListComponent';
import ShoppingCartComponent from './ShoppingCartComponent';
import OrderSummaryComponent from './OrderSummaryComponent';

class StoreApp extends Component {
    render() {
        return (
            <>
                <Router>
                    <>
                        <NavBarComponent />
                        <div class="row">
                            <ProductListComponent/>
                            <ShoppingCartComponent/>
                            {/* <OrderSummaryComponent/> */}
                        </div>
                        {/* <Switch>
                            <Route path="/" exact component={ProductListComponent} />
                            <Route path="/products" exact component={ProductListComponent} />
                        </Switch> */}
                    </>
                </Router>
            </>
        )
    }
}

export default StoreApp