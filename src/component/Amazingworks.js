import React from 'react'
import techcrunch from '../svg/techcrunch.svg'
import forbes from '../svg/forbes.svg'
import techpoint from '../svg/Techpoint.png'
import techcabal from '../svg/techcabal.svg'
import cnn from '../svg/cnn.svg'

const Amazingworks = () => {
  return (
    <section>
        <div className='p-5 amazing-works-body'>
          <div className='container'>
              <h2 className='amazing-works-header mb-4'>
              Our amazing work got noticed by:
              </h2>
              <div className='row g-4'>
                 <div className="col-sm">
                     <img src={techcrunch} alt="" />
                     <a href="" className='amazing-work-link mt-3'>Read the article here</a>
                 </div>
                 <div className="col-sm">
                     <img src={forbes} alt="" />
                     <a href="" className='amazing-work-link mt-3'>Read the article here</a>
                 </div>
                 <div className="col-sm">
                     <img src={techpoint} alt="" />
                     <a href="" className='amazing-work-link mt-3'>Read the article here</a>
                 </div>
                 <div className="col-sm">
                     <img src={techcabal} alt="" />
                     <a href="" className='amazing-work-link mt-3'>Read the article here</a>
                 </div>
                 <div className="col-sm">
                     <img src={cnn} alt="" />
                     <a href="" className='amazing-work-link mt-3'>Read the article here</a>
                 </div>

              </div>
          </div>
        </div>
    </section>
  )
}

export default Amazingworks