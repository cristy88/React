import React, { useState, useEffect, useMemo, useRef } from 'react'
import { getGoods } from '../../../api'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import ShopCar from './components/ShopCar'

const Product = () => {
  const [goods, setGoods] = useState([])
  const [cart, setCart] = useState([])
  const [curI, setCurI] = useState(0)  //初始菜单高亮下标
  const navigate = useNavigate()
  const foodRef = useRef()
  const offsetTops = useRef([])

  useEffect(() => {
    getGoods().then(res => {
      console.log(res.data.data)
      setGoods([...res.data.data])
    }).catch(c => {})
    // console.log(foodRef.current.children)
  }, [])

  // 获取右侧每种商品到达顶端的距离
  // useEffect(() => {
  //   offsetTops.current =  [...foodRef.current.children].map(item => {
  //     return item.offsetTop - 42
  //   })
  // }, [foodRef.current])

  useEffect(() => {
    offsetTops.current =  [...foodRef.current.children].map(item => {
      return item.offsetTop - 42
    })
  }, [goods])

  // 点击跳转详情页
  const toDetail = ( name) => {
    navigate(`/detail?name=${name}`)
  }
  // 点击左侧，右边跳转
  const clickEl = (index) => {
    setCurI(index)
    // console.log(offsetTops.current)
    foodRef.current.scrollTop = foodRef.current.children[index].offsetTop - 42
  }

  const scrollEl = e => {
    const sT = e.target.scrollTop
    const index = offsetTops.current.findIndex((v, i) => {
      if (i === offsetTops.current.length - 1) return true
      return sT >= v && sT < offsetTops.current[i + 1]
    })
    setCurI(index)
    // console.log(index)
  }

  // 改变商品数量
  const changeCount = (food, num) => {
    console.log('商品加减')
    food.count = food.count || 0
    const index = cart.findIndex(v => v.name === food.name)
    food.count += num
    if (index === -1) {
      // food.count = 1
      setCart([...cart, food])
    } else {
      const newCart = [...cart]
      if (food.count === 0) {
        newCart.splice(index, 1)
      }
      setCart([...newCart])
    }
    
    setGoods([...goods])
  }


  const clear = () => {
    cart.forEach(item => item.count = 0)
    setCart([])
  }
  return (
    <div className='pro'>
      <div className='navL'>
        {goods.map((item, index) => <p
          key={item.name}
          className={classNames({'active': index === curI})}
          onClick={() => clickEl(index)}
        > {item.name} </p>)}
      </div>
      <div className='con'  ref={foodRef} onScroll={e => scrollEl(e)}>
        {goods.map(item => <div key={item.name}>
          <h3> {item.name} </h3>
          <ul>
            {item.foods.map(food => <li key={food.name} onClick={() => toDetail(food.name)}>
              <img src={food.image} alt='' />
              <div className='des'>
                <p> {food.name} </p>
                <p> {food.description} </p>
                <p>月售 {food.sellCount} 好评率 {food.rating}% </p>
                <div className='change'> <span className='price'>{food.price}</span>
                  <p>
                    {
                      (food.count && food.count > 0) ? 
                      <>
                        <button onClick={e => {e.stopPropagation(); changeCount(food, -1) }}>-</button>
                        <span>{food.count}</span> 
                      </> : null
                    }
                    <button onClick={e => {
                      e.stopPropagation()
                      changeCount(food, 1)
                    }}>+</button>
                  </p>
                </div>
              </div>
            </li>)}
          </ul>
        </div>)}
      </div>
      <ShopCar changeCount={changeCount} cartList={cart} clear={clear} />
    </div>
  )
}

export default Product