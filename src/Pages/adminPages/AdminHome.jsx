import React from 'react'
import Header from "../../components/adminComponents/Header"
import { Outlet } from 'react-router-dom'
const HomePage = () => {
    return (
       <>
       <Header/>
       <Outlet />
       </>
    )
}

export default HomePage