import React from 'react'
import twitter from '../svg/twitter.svg'

const CustomersReport = () => {
  return (
       <div className='customers-body p-5'>
           <h2 className='customer-title'>
           What Customers Say About Us 🙌🏾
           </h2>
           <div className="row g-3 mt-3 justify-content-between container-fluid">
               <div className="col-md-3 report-card p-3 shadow">
                   <div className='d-flex'>
                 <div className=''>
                    <img className='border rounded-5 p-2 me-3' src={twitter} width={35} alt="" />
                 </div>
                 <div className=''>
                     <h5 className='customer-name mb-3'><span style={{color:"#384a62"}}>Amina Ebele</span> <span style={{color:"#1DA1F2"}}>@DeliciousAmina</span></h5>
                     <h5 className='customer-details'>
                     I am now the unofficial <span style={{color:"#1DA1F2"}}>@Printivo</span> ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!
                     </h5>
                 </div>
                 </div>
               </div>
               <div className="col-md-3 report-card p-3  shadow">
                   <div className='d-flex'>
                 <div className=''>
                    <img className='border rounded-5 p-2 me-3' src={twitter} width={35} alt="" />
                 </div>
                 <div className=''>
                     <h5 className='customer-name mb-3'><span style={{color:"#384a62"}}>Oluwatosin Ebele</span> <span style={{color:"#1DA1F2"}}>@tosingirlfx</span></h5>
                     <h5 className='customer-details'>
                     <span style={{color:"#1DA1F2"}}>@Printivo</span> delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come.
                     </h5>
                 </div>
                 </div>
               </div>
               <div className="col-md-3 report-card p-3  shadow">
                   <div className='d-flex'>
                 <div className=''>
                    <img className='border rounded-5 p-2 me-3' src={twitter} width={35} alt="" />
                 </div>
                 <div className=''>
                     <h5 className='customer-name mb-3'><span style={{color:"#384a62"}}>Oluwatosin Ebele</span> <span style={{color:"#1DA1F2"}}>@olgablark</span></h5>
                     <h5 className='customer-details'>
                     These guys <span style={{color:"#1DA1F2"}}>@Printivo</span> are really awesome and affordable. Excellent customer service and delivery too. Thank you.
                     </h5>
                 </div>
                 </div>
               </div>
           </div>

       </div>

       
  )
}

export default CustomersReport