import React from 'react';

class Item extends React.Component {
    // EventListener in React
    ClickMe() {
        console.log("I Clicked: ", this.props.name)
    }

    render () {
        return (
            // Using old html ways to event listener in react  onClick={() => this.functionName()}
            <h1 onClick={() => this.ClickMe()}>{this.props.Time} {this.props.name}</h1>
        )
    }
}

// Dont forget to export it first so that it can be used for import
export default Item;