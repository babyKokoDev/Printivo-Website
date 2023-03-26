import React from 'react'
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'
import four from '../images/4.png'
import five from '../images/5.jpg'
import six from '../images/6.png'
import seven from '../images/7.png'
import eight from '../images/8.png'
import nine from '../images/9.png'
import ten from '../images/10.png'
import eleven from '../images/11.png'
import twelve from '../images/12.jpeg'
import greetingCard from '../images/Greetings Card.png'
import stickers from '../images/stickers.png'
import '../component/Cardsection.css'


const Cardsection = () => {
  return (
      <>
    <div className="container-fluid g-5 cardSection mt-4">
        <div className="d-flex justify-content-between ">
            <div className="p-0 py-3 ppp cardHeading">Popular Products</div>
            <div className="p-0 py-3 spp cardHeading">See All Products</div>
        </div>
    <div className="row justify-content-center align-items-center g-3">
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
            <img src={one} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-edit mb-4">Two-sided Business Cards</h5>
              <h6 className="card-subtitle mb-3 text-muted">STARTING AT</h6>
              <h3 className="card-title naira mb-4">₦8,855<span className="sp-style text-muted fs-edit">per 100</span></h3>
              <a href="#" className="btn btn-warning text-white">Browse Two-sided Bu... </a>
            </div>
          </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
            <img src={two} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-edit mb-4">A5 flyers (Single Sided)</h5>
              <h6 className="card-subtitle mb-3 text-muted">STARTING AT</h6>
              <h3 className="card-title naira mb-4">₦15,000<span className="sp-style text-muted fs-edit">per 100</span></h3>
              <a href="#" className="btn btn-warning text-white">Browse A5 flyers (S... </a>
            </div>
          </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
            <img src={three} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-edit mb-4">Round Stickers</h5>
              <h6 className="card-subtitle mb-3 text-muted">STARTING AT</h6>
              <h3 className="card-title naira mb-4">₦9,900<span className="sp-style text-muted fs-edit">per 100</span></h3>
              <a href="#" className="btn btn-warning text-white">Browse Round Stickers... </a>
            </div>
          </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
            <img src={four} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-edit mb-4">Simple Mugs</h5>
              <h6 className="card-subtitle mb-3 text-muted">STARTING AT</h6>
              <h3 className="card-title naira mb-4">₦2,750<span className="sp-style text-muted fs-edit">per 1</span></h3>
              <a href="#" className="btn btn-warning text-white">Browse Simple Mugs </a>
            </div>
          </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
            <img src={five} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-edit mb-4">Postcards (A6)</h5>
              <h6 className="card-subtitle mb-3 text-muted">STARTING AT</h6>
              <h3 className="card-title naira mb-4">₦12,903<span className="sp-style text-muted fs-edit">per 50</span></h3>
              <a href="#" className="btn btn-warning text-white">Browse Postcards (A... </a>
            </div>
          </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
            <img src={six} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-edit mb-4">Roll Up Banners (Big Base)</h5>
              <h6 className="card-subtitle mb-3 text-muted">STARTING AT</h6>
              <h3 className="card-title naira mb-4">₦27,600<span className="sp-style text-muted fs-edit">per 1</span></h3>
              <a href="#" className="btn btn-warning text-white">Browse Roll Up Bann... </a>
            </div>
          </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
            <img src={seven} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-edit mb-4">A2 Posters</h5>
              <h6 className="card-subtitle mb-3 text-muted">STARTING AT</h6>
              <h3 className="card-title naira mb-4">₦41,400<span className="sp-style text-muted fs-edit">per 100</span></h3>
              <a href="#" className="btn btn-warning text-white">Browse A2 Posters... </a>
            </div>
          </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
            <img src={eight} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-edit mb-4">Trifold Brochures</h5>
              <h6 className="card-subtitle mb-3 text-muted">STARTING AT</h6>
              <h3 className="card-title naira mb-4">₦27,600<span className="sp-style text-muted fs-edit">per 100</span></h3>
              <a href="#" className="btn btn-warning text-white">Browse Trifold Broc... </a>
            </div>
          </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
            <img src={nine} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-edit mb-4">Landscape ID Cards</h5>
              <h6 className="card-subtitle mb-3 text-muted">STARTING AT</h6>
              <h3 className="card-title naira mb-4">₦1,800<span className="sp-style text-muted fs-edit">per 1</span></h3>
              <a href="#" className="btn btn-warning text-white">Browse Landscape ID... </a>
            </div>
          </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
            <img src={ten} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-edit mb-4">Off White T-Shirts</h5>
              <h6 className="card-subtitle mb-3 text-muted">STARTING AT</h6>
              <h3 className="card-title naira mb-4">₦3,499<span className="sp-style text-muted fs-edit">per 1</span></h3>
              <a href="#" className="btn btn-warning text-white">Browse Off White T-... </a>
            </div>
          </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
            <img src={eleven} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-edit mb-4">A4 Branded Paper Bags</h5>
              <h6 className="card-subtitle mb-3 text-muted">STARTING AT</h6>
              <h3 className="card-title naira mb-4">₦60,950<span className="sp-style text-muted fs-edit">per 100</span></h3>
              <a href="#" className="btn btn-warning text-white">Browse A4 Branded P... </a>
            </div>
          </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
            <img src={twelve} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-edit mb-4">A4 Courier Bags</h5>
              <h6 className="card-subtitle mb-3 text-muted">STARTING AT</h6>
              <h3 className="card-title naira mb-4">₦16,000<span className="sp-style text-muted fs-edit">per 100</span></h3>
              <a href="#" className="btn btn-warning text-white">Browse A4 Courier B... </a>
            </div>
          </div>
      </div>
    </div>
    </div>
    <div className="container-fluid g-5 cardSection mt-5">
        <div className="d-flex justify-content-between">
            <div className="p-0 py-3 ppp cardHeading fw-bold">Popular Categories</div>
            <div className="p-0 py-3 spp cardHeading">See All Categories</div>
        </div>
    <div className="row align-items-center g-3">
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
            <img src={greetingCard} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-edit mb-4">Greetings Card</h5>
              <h6 className="card-subtitle mb-3 text-muted">STARTING AT</h6>
              <h3 className="card-title naira mb-4">₦17,250<span className="sp-style text-muted fs-edit">per 50</span></h3>
              <a href="#" className="btn btn-warning text-white">Browse Greetings Ca... </a>
            </div>
          </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
            <img src={stickers} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-edit mb-4">Stickers</h5>
              <h6 className="card-subtitle mb-3 text-muted">STARTING AT</h6>
              <h3 className="card-title naira mb-4">₦4,949<span className="sp-style text-muted fs-edit">per 75</span></h3>
              <a href="#" className="btn btn-warning text-white">Browse Stickers </a>
            </div>
          </div>
      </div>
      </div>
    
     </div>
     
     </>
    

  )
}

export default Cardsection