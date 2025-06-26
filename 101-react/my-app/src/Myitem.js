import React from 'react';

class Item extends React.Component {
    render () {
        return (
            <h1>{this.props.Time} {this.props.name}</h1>
        )
    }
}

// Dont forget to export it first so that it can be used for import
export default Item;