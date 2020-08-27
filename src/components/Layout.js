import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout(props) {
  return (
    <div>
      <Header/>
      <div className="page-wrapper">
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
