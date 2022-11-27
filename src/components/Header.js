import React from 'react'
import Button from './Button'

export default function Header() {
    // external.js
    // var doc, bod, htm;
    // addEventListener('load', function(){
    //   doc = document; bod = doc.body; htm = doc.documentElement;
    //   addEventListener('scroll', function(){
    //     doc.querySelector('header').style.backgroundColor = htm.scrollTop > 199 ? 'blue' : 'red';
    //   });
    // });
    return (
        <>
            <div className='container-fluid hero-img position-relative'>
                <div className='row pt-2 align-items-center justify-content-around'>
                    <div className='col-4'>
                        <img src="/img/logo.png" alt="" className='navbar-brand' />
                    </div>
                    <div className="col-4 d-flex align-items-center">
                        <div className="nav-icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-telegram"></i>
                            <i className="fa-brands fa-discord"></i>
                        </div>
                        <button className='btn bg-btn text-white rounded-pill px-4' style={{fontFamily:"PoufBlack"}}>Buy Now</button>
                    </div>
                </div>

                <div className="row justify-content-center" style={{marginTop:"10%"}}>
                    <div className="card" style={{width: "40vw",borderRadius:"40px",opacity: "0.95"}}>
                        <div className="card-body text-center">
                            <h2 className="card-title mt-3">100% Secure Zone</h2>
                            <p className="card-text">DigiToads is the ulitmate memecoin platform, and it could'nt be easier to get your hand on the token in our presale.</p>
                            <p className="card-text px-3">
                                Contract code fully audited by Solidity Finance and shown to be 100% secure. Team fully verified by CoinSniper to ensure anti-rug and complete project security.
                            </p>
                            <p className="card-text px-3">
                                You can buy direct using USDT, ETH or BNB. After the public sale ends, you'll claim your purchased Big Eyes using the claim page.
                            </p>

                            <div className='d-flex justify-content-center align-items-center'>
                                <Button text={"Buy"}/>
                                <Button text={"How to Buy"}/>
                                <Button text={"Talk to us"}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
