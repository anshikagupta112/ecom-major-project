import React from 'react'
import Layout from '../components/Layout/Layout'
import {BiMailSend,BiPhoneCall,BiSupport} from 'react-icons/bi'
const Contact = () => {
  return (
    <Layout title={"contact"}>
        <div className='row-contactus'>
            <div className='col-md-6'>
                <img src='https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png' alt='Contactus'/>
            </div>
            <div className='col-md-6'>
                <h1 className='bd-dark p-2 text-black text-center'>CONTACT US</h1>
                <p className='text-justify mt-2'>
                    any query and info about product feel free to call anytime we are 24X4 available 
                </p>
               <p className='mt-3'>
                    <BiMailSend/>:www.help@ecommerceapp.com

                </p>
                <p className='mt-3'>
                    <BiPhoneCall/>:012-6789454
                </p>
                <p className='mt-3'>
                    <BiSupport/>:1800-0000-0000(toll free)
                </p>
            </div>
        </div> 
    </Layout>
  )
}

export default Contact
