import React, { useState, useEffect } from 'react'
import store from '../store'
import { useSelector, useDispatch } from 'react-redux'


// console.log('获取store数据', store.getState())
const Home = () => {
  // 获取指定数据
  const rootStore = useSelector(state => state)
  console.log('redux中的数据',rootStore)
  const name = useSelector(s => s.name)
  const age = useSelector(s => s.age)

  // 获取 dispatch 函数
  const dispatch = useDispatch()

  
  return (
    <div>
      <h2>Home</h2>
      <p>姓名: {name}</p>
      <p>年龄: {age}</p>
      <button onClick={() => {
        // 通过 dispatch 发送 action，执行 reducer 函数返回最新数据
        // action: 一个对象，必须有 type 属性，描述本次的修改内容
        dispatch({
          type: 'age_add'
        })
      }}>age+</button>
    </div>
  )
}

export default Home