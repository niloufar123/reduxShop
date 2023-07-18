
import React from 'react'
import { useRouteError } from 'react-router-dom'

function NotFound() {
  const error=useRouteError()
  return (
    <div className="text-center mt-10">NotFound


      <h1>
        {error.statusText || error.message}
      </h1>
    </div>
  )
}

export default NotFound