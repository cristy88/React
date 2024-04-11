import React from 'react'
import { useRoutes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'


const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    { path: '/about', element: <About /> }
  ])
  return (
    <div>
      <nav>
        <NavLink to="/">首页</NavLink>
        <NavLink to="/about" >关于我们</NavLink>
      </nav>
      {routes}
    </div>
  )
}

export default App
