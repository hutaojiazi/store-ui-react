import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class MenuComponent extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div><a href="" className="navbar-brand">Store Demo</a></div>
                <ul className="navbar-nav">
                    <li><Link className="nav-link" to="/products">Home</Link></li>
                </ul>
            </nav> 
        )
    }
}

export default withRouter(MenuComponent)