import React, { useState, useEffect } from 'react'
import store from '../store'


console.log('获取store数据', store.getState())
const Home = () => {
  const [name, setName] = useState(store.getState().name)
  const [age, setAge] = useState(store.getState().age)

  useEffect(() => {
    const unSubscribe = store.subscribe(() => {
      console.log('监听到store数据改变', store.getState)
      setAge(store.getState().age)
    })
    return () => {
      unSubscribe()
    }
  })


  return (
    <div>
      <h2>Home</h2>
      <p>姓名: {name}</p>
      <p>年龄: {age}</p>
      <button onClick={() => {
        // 通过 dispatch 发送 action，执行 reducer 函数返回最新数据
        // action: 一个对象，必须有 type 属性，描述本次的修改内容
        store.dispatch({
          type: 'age_add'
        })
      }}>age+</button>
    </div>
  )
}

export default Home