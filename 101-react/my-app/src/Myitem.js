import React from 'react';

class Item extends React.Component {
    // Constructor in React
    constructor(props) {
        super(props)

        this.state = {
            clicks: 0,
            totalRemaining: 100
        }

    }

    // EventListener in React
    ClickMe() {
        // Setter in jS 
        this.setState({
            clicks: this.state.clicks + 1,
            totalRemaining: this.state.totalRemaining - 1
        })
    }

    render () {
        return (
            <div>
                {/* // Using old html ways to event listener in react  onClick={() => this.functionName()} */}
                <h1 onClick={() => this.ClickMe()}>{this.props.Time} {this.props.name}</h1>
                <span>
                    How Many Clicks: {this.state.clicks}, How Many Remaining: {this.state.totalRemaining}
                </span>

            </div>
        )
    }
}

// Dont forget to export it first so that it can be used for import
export default Item;