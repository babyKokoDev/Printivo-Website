import React from 'react'
import printivo from '../svg/printivo.svg'
import cart from '../svg/cart.svg'
import search from '../svg/search.svg'
import printivoCard from '../images/Card3_n9kqin.webp'

const SecondNav = () => {
    let ulText = { color: "RGB(75, 99, 130)", fontSize: 14.5, fontWeight: 400 }
    let ulSign = { color: "#D77F81", fontSize: 14.5, fontWeight: 400 }
    return (
        <div className='py-3 secondNav'>
            <nav class="navbar navbar-expand-lg bg-transparent container">
                <div class="container-fluid">
                    <a class="navbar-brand " href="#"><img src={printivo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav ms-auto  mb-2 mb-lg-0 d-flex align-items-center">
                            <li class="nav-item">
                                <a style={ulText} class="nav-link active fw-bold" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a style={ulText} class="nav-link fw-bold" href="#">All products</a>
                            </li>
                            <li class="nav-item">
                                <a style={ulText} class="nav-link fw-bold" href="#">Become a reseller</a>
                            </li>
                            <li class="nav-item">
                                <a style={ulText} class="nav-link fw-bold" href="#">Cost calculator</a></li>
                            <li class="nav-item">
                                <a style={ulSign} class="nav-link fw-bold" href="#">Sign in</a>
                            </li>
                            <li class="nav-item">
                                <a style={ulText} class="nav-link fw-bold" href="#">Create Account</a></li>
                            <li class="nav-item">
                                <a style={ulText} class="nav-link fw-bold" href="#"><img src={cart} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='d-flex justify-content-between container mt-5'>
                <div>
                    <h1 className='qualityPrint mb-2 fw-bold'>Quality Prints</h1>
                    <h3 className='shipDoor mb-5'>Shipped to your doorstep</h3>
                    <h5 className='fw-bold' style={{ color: "#384a62", fontSize: 16 }}>What would you like to print today?</h5>
                    <div class="input-group mb-3 inputSearch">
                        <input type="text" class="form-control py-4" placeholder="Search for Business Cards, T-Shirts, Mugs, etc" aria-label="Username" aria-describedby="basic-addon1" />
                        <span class="input-group-text" id="basic-addon1"><a href="#"><img src={search} /></a></span>
                    </div>
                </div>
                <div className='printivoCard'><img src={printivoCard} alt=""  width={450}/></div>
            </div>
        </div>
    )
}

export default SecondNav