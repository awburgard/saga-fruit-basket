import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Header extends Component {
    render() {
        return (
            <section className="hero is-dark">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Fruit Basket</h1>
                        <h2 className="subtitle">Which Fruit Do You Want Today?</h2>
                    </div>

                </div>
            </section>

        )
    }
}
export default Header;