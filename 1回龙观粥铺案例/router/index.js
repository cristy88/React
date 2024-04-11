import { Navigate } from 'react-router-dom'
import Home from "../pages/home/Home"
import Detail from "../pages/detail/Detail"
import Product from "../pages/home/product/Product"

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home/product',
        element: <Product />
      },
      {
        path: '/home/command',
        element: <div>评论</div>
      },
      {
        path: '/home/business',
        element: <div>商家</div>
      },
      {
        path: '/home',
        element: <Navigate to="/home/product" />
      }
    ]
  },
  {
    path: '/detail',
    element: <Detail />
  }
]

export default routes