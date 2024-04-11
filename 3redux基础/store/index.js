import { createStore } from 'redux'

const initState = {
  name: '小明',
  age: 20
}

const reducer = (state = initState, action) => {
  console.log('执行了reducer函数', state, action)
  
  if (action.type === 'age_add') {
    return {...state, age: state.age + 1}
  } else if (action.type === 'set_name') {
    return {...state, name: action.payload}
  }

  return state
}

// 创建store,需要传入一个reducer函数作为参数
const store = createStore(reducer)

export default store
