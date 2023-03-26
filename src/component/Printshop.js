import React from "react";
import Posters from '../images/Group_61_h8vxko.png'

const Printshop = () => {
  return (
     <div className="row mt-5 container-fluid ms-1 mb-5">
         
         <h5 className="print-shop-heading">Nigeria’s No. 1 online print shop 👑</h5>
        
         <h5 className="print-shop-subheading mb-4">
         Our print services and solutions are trusted by these brands and <br/>
         over 15,000 other businesses in Nigeria.
         </h5>
         <p><img className="img-fluid" src={Posters} alt="" /></p>
     </div>
  )
}

export default Printshop