import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className='menu'>
        <NavLink to="/home/product" >商品</NavLink>
        <NavLink to="/home/command" >评论</NavLink>
        <NavLink to="/home/business">商家</NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Home