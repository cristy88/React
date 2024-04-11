import React, { Component } from 'react'
import store from '../store/index'
import { connect } from 'react-redux'

class About extends Component {

  render() {
    const {name, age } = this.props
    console.log(this.props)
    return (
      <div>
        <h1>About</h1>
        <p>姓名: {name}</p>
        <input type="text" value={name} onChange={e => { 
          this.props.setName(e.target.value)
        }} />
      </div>
    )
  }
}

// connect高阶组件， 链接组件和redux数据
// 将redux数据传到组键的props中

const mapState = state => {
  // state  redux中的所有数据
  // return 数据会合并到组件的props中
  return {
    a: 'aaaaa',
    name: state.name,
    age: state.age
  }
}
const mapDispatch = dispatch => {
  return {
    setName: payload => {
      dispatch({
        type: 'set_name',
        payload
      })
    },
    aa() {
    }
  }
}


export default connect(mapState, mapDispatch)(About)
