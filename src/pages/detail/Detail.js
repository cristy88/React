import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const Detail = () => {
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name')
  return (
    <div>
      <h2>Detail</h2>
      <p> {name} </p>
    </div>
  )
}

export default Detail