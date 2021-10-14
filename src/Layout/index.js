import React from 'react'
import Footer from '../Template/Footer'
import Header from '../Template/Header'
import Sidebar from '../Template/Sidebar'
import Routes from './Routes'

const Layout = () => {
    return (
        <div className="main-wrapper">
            <Sidebar/>
            <div className="content-outer-wrapper">
                <Header/>
                <div className="content-wrapper">
                    <Routes/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout
