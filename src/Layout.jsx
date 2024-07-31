import React from 'react'
import Navbar from './componets/daisyUI/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './componets/daisyUI/Footer'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout