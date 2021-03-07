import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MenuComponent from './MenuComponent';
import ProductListComponent from './ProductListComponent';

class StoreApp extends Component {
    render() {
        return (
            <>
                <Router>
                    <>
                        <MenuComponent />
                        <Switch>
                            <Route path="/products" exact component={ProductListComponent} />
                        </Switch>
                    </>
                </Router>
            </>
        )
    }
}

export default StoreApp