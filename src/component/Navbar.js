import React from 'react'
import firstImage from '../svg/download.svg'
import whatsapp from '../svg/whatsapp.svg'

const Navbar = () => {
    let headertext = { color: "rgb(80, 102, 131)", fontSize: 12.9 }
  return (
     <nav className='p-3'>
         <div className='container d-flex justify-content-between align-items-center'>
           <div className='d-flex justify-content-between leftNav'>
                <a href="#"><h5 className='me-4' style={headertext}>Corporate Pricing</h5></a>
                <a href="#"><h5 className='mx-4' style={headertext}>Discover Stores</h5></a>
                <a href="#"><h5 className='mx-4' style={headertext}>Track Orders</h5></a>
           </div>
           <div className='d-flex justify-content-between align-items-center fw-bold rightNav'>
               <div className='mx-3 needHelp' style={headertext}>Need help? Call: <span style={{color: "RGB(29, 161, 242)"}}>+2348091084333,+2348091085333</span></div>
               <div className='mx-3 naijaBtn'><img src={firstImage} alt="" /></div>
               <button className='btn btn-outline-secondary rounded-5 d-flex align-items-center ms-3 '><img src={whatsapp} alt="" /><div className='ms-1' style={headertext}>Nigeria</div></button>
           </div>
         </div>
     </nav>
  )
}

export default Navbar