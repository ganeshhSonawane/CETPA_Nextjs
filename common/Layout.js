import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
        <div className='container'>
            <Header/>
            <Navbar />
            {children}
            <Footer/>
        </div>
    </>
  )
}

export default Layout
