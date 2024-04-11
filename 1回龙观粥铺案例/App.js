import React from 'react'
import routes from './router'
import { useRoutes } from 'react-router-dom'
const App = () => {
  const routeConfig  = useRoutes(routes)
  return routeConfig
}

export default App