import React from 'react'
import { useSelector } from 'react-redux'

function Main() {
  let email = useSelector((state) => state.todox.email);
  console.log(email)
  return (
    <div>Main</div>
  )
}

export default Main