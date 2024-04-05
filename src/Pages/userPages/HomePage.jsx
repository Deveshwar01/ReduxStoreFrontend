import React from 'react'
import Category from '../../components/userComponents/Category'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <Category />
      <Outlet />
    </>
  )
}

export default HomePage