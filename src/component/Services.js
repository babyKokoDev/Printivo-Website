import React from 'react'
import clock from '../svg/clock.svg'
import shield from '../svg/shield.svg'
import wallet from '../svg/wallet.svg'

const Services = () => {
  return (
    <section>
        <div className="service-comp p-5 bg-white">
            <h2 className='service-heading container mb-4'>You can count on us for:</h2>
            <div className="container">
                <div className="row g-3">
                    <div className="col-md-4">
                        <div className='d-flex'>
                            <p className='me-1' ><img src={clock} alt="" /></p>
                            <div className='ms-1'>
                                <h5 className='service-header-one'>
                                Fast Turnaround Within Days
                                </h5>
                                <h5 className='service-header-two'>
                                Your order gets to you within 3-7 working days via DHL or our very own Printivo Direct.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='d-flex'>
                            <p className='me-1'><img src={shield} alt="" /></p>
                            <div className='ms-1'>
                                <h5 className='service-header-one'>
                                   100% Top Quality 
                                </h5>
                                <h5 className='service-header-two'>
                                Only the finest materials, machines and people will be involved in fulfilling your order.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='d-flex'>
                            <p className='me-1'><img src={wallet} alt="" /></p>
                            <div className='ms-1'>
                                <h5 className='service-header-one'>
                                   Affordable Services
                                </h5>
                                <h5 className='service-header-two'>
                                All products are adequately priced to ensure you get value for your money at all times.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services