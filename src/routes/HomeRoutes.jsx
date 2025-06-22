import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'

const HomeRoutes = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default HomeRoutes