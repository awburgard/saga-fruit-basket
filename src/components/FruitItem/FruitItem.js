import React, { Component } from 'react';
import { connect } from 'react-redux';

class FruitItem extends Component {
    removeItem = () => {
        this.props.dispatch({
            type: 'REMOVE_FRUIT',
            payload: this.props.basketItem.id
        })
    }

    getFruit() {
        this.props.dispatch({
            type: 'GET_FRUITS'
        })
    }

    render() {
        return (
            <div className="card">
                <header class="card-header" />
                <p className="card-header-title">
                    {this.props.basketItem.fruit}
                </p>
                <div className="card-content">
                    <div className="content">
                        <button className="button is-danger" onClick={this.removeItem}>Remove</button>
                    </div>

                </div>

            </div>
        )
    }
}

export default connect()(FruitItem);