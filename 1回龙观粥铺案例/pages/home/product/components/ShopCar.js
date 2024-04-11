import React, { useLayoutEffect, useMemo, useState } from 'react'
import style from './cart.module.scss'
import classNames from 'classnames'
import 'animate.css'

const ShopCar = (props) => {
  const [isShow, setShow] = useState(false)
  // 是否展示动画
  const [AniShow, setAniShow] = useState(false)
  // 获取购物城商品数量以及所有商品的价格总和
  const InfoShop = useMemo(() => {
    return props.cartList.reduce((prev, val) => {
      return {sum: prev.sum + val.count,
        countPrice: prev.countPrice + val.count * val.price
      }
    }, {sum: 0, countPrice: 0})
  }, [props.cartList])


  useLayoutEffect(() => {
    if (isShow) {
      setAniShow(true)
    }
  }, [isShow])

  return (
    <div>
      {isShow && <div onClick={() => setAniShow(false)} onAnimationEnd={() =>{
          if (!AniShow) setShow(false)
        }}
        className={classNames(style.cart, 'animate__animated', {'animate__fadeIn': AniShow, 'animate__fadeOut': !AniShow})}
      >
        <div className={
          classNames(style.cartlist,'animate__animated', {'animate__slideInUp': AniShow, 'animate__slideOutDown': !AniShow})} 
          onClick={e => e.stopPropagation()}
        >
        <p><span onClick={() => {props.clear(); setAniShow(false)}}>清空</span></p>
        {props.cartList.map(item => <div key={item.name}>
          {item.name}
          <button onClick={() => props.changeCount(item, -1)}>-</button>
          <span> {item.count} </span>
          <button onClick={() => props.changeCount(item, 1)}>+</button>
        </div> ) }
      </div> </div>}
      <div className={classNames(style.shop, {[style.active]: props.cartList.length > 0})} onClick={e => e.stopPropagation()}>
        <span onClick={() => {
          if (!isShow && props.cartList.length > 0) setShow(true)
          if (isShow) setAniShow(false)
        }}>购物车 {InfoShop.sum} </span>
        需要支付 <span> {InfoShop.countPrice}￥ </span>
        <button className={InfoShop.countPrice > 20 ? style.active : ''}>去结算</button>
      </div>
    </div>
  )
}

export default ShopCar