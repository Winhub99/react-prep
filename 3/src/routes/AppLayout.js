import React from 'react'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
            {console.log("App layout rendered")}

        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default AppLayout
