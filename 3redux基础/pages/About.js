import React, { Component } from 'react'
import store from '../store/index'

class About extends Component {
  state = {
    name: store.getState().name
  }

  componentDidMount() {
    this.unSubscribe = store.subscribe(() => {
      this.setState({
        name: store.getState().name
      })
    })
  }

  componentWillUnmount() {
    this.unSubscribe()
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <p>姓名: {this.state.name}</p>
        <input type="text" value={this.state.name} onChange={e => {
          store.dispatch({
            type: 'set_name',
            payload: e.target.value
          })
        }} />
      </div>
    )
  }
}

export default About
