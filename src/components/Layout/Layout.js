import React from 'react'
import Header from './Header'
import Footers from './Footers'
import {Helmet} from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <meta name="author" content={author}/>
                <title>{title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Header/>
      <main style={{minHeight:'69vh'}}>{children}</main>
      <ToastContainer/>
      <Footers/>
      
    </div>
  )
}
Layout.defaultProps={
  title:'E-Commerce App',
  description:'MERN Stack',
  keywords:'Mern,React,MongoDB,Express,Node',
  author:'Anshika'
}

export default Layout
