import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const params = useParams()
    console.log(params)
  return (
    <div><h2>Welcome {params.id}</h2></div>
  )
}

export default UserDetails