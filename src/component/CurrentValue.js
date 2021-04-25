import React, { Component } from 'react'

class CurrentValue extends Component {
    render() {     
        return (
            <div class="row">
                <h1>Current Value: {this.props.age}</h1>                  
            </div>
        );
    }
}

export default CurrentValue