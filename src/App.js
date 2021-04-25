
import React, { Component } from 'react'
import { connect } from 'react-redux'
import CurrentValue from './component/CurrentValue'
import ReduxImg from './image/Redux.png'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App" >
        <img class="card-img-top" src={ReduxImg} style={{ width: "20%", height: "20%", marginLeft: "40%", marginBottom: "2%" }} ></img>
        <div class="card text-center">
          <div class="card-header">
            <button class='btn btn-success' onClick={() => this.props.editValue(1)}>ADD</button>
            <button class='btn btn-danger' style={{ marginLeft: "3%" }} onClick={() => this.props.editValue(-1)}>SUB</button>
            <button class='btn btn-warning' style={{ marginLeft: "3%" }} onClick={() => this.props.setValue(0)}>Clear</button>
          </div>
          <div class="card-body">
            <CurrentValue age={this.props.valueReducer.value} />
          </div>
          <div class="card-Footer">
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProp = (state) => {
  return {
    valueReducer: state.valueReducer
  }

}

const mapDispatchToProp = (dispatch) => {
  return {
    editValue: (value) => {
      dispatch({
        type: "editValue",
        payload: value
      })
    },
    setValue: (value) => {
      dispatch({
        type: "setValue",
        payload: value
      })
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(App)
