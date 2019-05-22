import React, { Component } from 'react';
import { connect } from 'react-redux';

class FruitSelector extends Component {

    // Currying that returns a function
    addFruit = (fruitName) => (event) => {
        this.props.dispatch({
            type: 'ADD_FRUITS',
            payload: { fruit: fruitName }
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
            <div className="container">
                <div className="field is-grouped">
                    <div className="control">
                        <div className="buttons">
                            <button className="button is-primary is-inverted" onClick={this.addFruit('Apple')}>Add Apple</button>
                            <button className="button is-danger is-inverted" onClick={this.addFruit('Orange')}>Add Orange</button>
                            <button className="button is-success is-inverted" onClick={this.addFruit('Watermelon')}>Add Watermelon</button>
                            <button className="button is-link is-inverted" onClick={this.addFruit('Grapefruit')}>Add Grapefruit</button>
                        </div>

                    </div>

                </div>
            </div>

        )
    }
}

export default connect()(FruitSelector);