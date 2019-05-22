import React, { Component } from 'react';
import { connect } from 'react-redux';

class FruitSelector extends Component {

    // Currying that returns a function
    addFruit = (fruitName)=>(event) => {
        this.props.dispatch({
            type: 'ADD_FRUITS',
            payload: {fruit : fruitName}
        })
    }

    getFruit() {
        this.props.dispatch({
            type: 'GET_FRUITS'
        })
    }

    // Displays the fruit selection buttons on the DOM
    render() {
        return (
            <div>
                <button className="button is-primary" onClick={this.addFruit('Apple')}>Add Apple</button>
                <button className="button is-warning" onClick={this.addFruit('Orange')}>Add Orange</button>
                <button className="button is-success" onClick={this.addFruit('Watermelon')}>Add Watermelon</button>
                <button className="button is-link" onClick={this.addFruit('Grapefruit')}>Add Grapefruit</button>
            </div>
        )
    }
}

export default connect()(FruitSelector);