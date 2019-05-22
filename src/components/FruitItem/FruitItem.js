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
            <li>
                <span>{this.props.basketItem.fruit}</span>
                <button onClick={this.removeItem}>Remove</button>
            </li>
        )
    }
}

export default connect()(FruitItem);