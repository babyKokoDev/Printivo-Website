import React from 'react'
import payment from '../images/payment.png'
import shipping from '../images/shipping.png'

const Footer = () => {
  return (
    <section>
        <div className='p-5 footer-section'>
           <div className="container">
               <div className="row g-3">
                   <div className="col-md-3">
                       <h2 className='footer-header'>Printivo</h2>
                       <ul>
                           <li><a href="">About Us</a></li>
                           <li><a href="">Contact</a></li>
                           <li><a href="">Track Order</a></li>
                           <li><a href="">Printivo Promise</a></li>
                           <li><a href="">Printivo Blog</a></li>
                           <li><a href="">Career</a></li>
                       </ul>
                   </div>
                   <div className="col-md-3">
                       <h2 className='footer-header'>Help and Information</h2>
                       <ul>
                           <li><a href="">Paper Quality</a></li>
                           <li><a href="">Privacy Policy</a></li>
                           <li><a href="">Terms and Conditions</a></li>
                           <li><a href="">Font Licenses</a></li>
                           <li><a href="">Shipping and Delivery</a></li>
                       </ul>
                   </div>
                   <div className="col-md-3">
                       <h2 className='footer-header'>Make Money</h2>
                       <ul>
                           <li><a href="">Refer a friend and earn N1,000</a></li>
                           <li><a href="">Become a Reseller</a></li>
                           <li><a href="">Sell your Designs</a></li>
                           <li><a href="">Merch Store</a></li>
                       </ul>
                   </div>
                   <div className="col-md-3">
                       <h2 className='footer-header mb-4'>Follow Us</h2>
                       <div className='d-flex justify-content-between mb-5'>
                       <a href=""><i class="fa-brands fa-facebook fa-2x text-white"></i></a>
                       <a href=""><i class="fa-brands fa-twitter fa-2x text-white"></i></a>
                       <a href=""><i class="fa-brands fa-linkedin-in fa-2x text-white"></i></a>
                       <a href=""><i class="fa-brands fa-instagram fa-2x text-white"></i></a>
                       </div>
                       <h2 className='footer-header mb-2'>Accepted Payment</h2>
                       <img src={payment} className = "mb-5" width={200} alt="" />
                       <h2 className='footer-header mb-2'>Delivery</h2>
                       <img src={shipping} width={200} alt="" />
                   </div>
               </div>
           </div>
        </div>
    </section>
  )
}

export default Footer