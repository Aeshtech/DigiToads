import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='position-relative'>
                <div className="clipped bg-light-theme ">
                </div>
                <div className=''>
                    <img src="/img/frog.png" alt="" className='position-absolute footer-frog' />
                    <img src="/img/DigiToads.png" alt="" className='position-absolute footer-DigiToads' />
                </div>
                <div className='bg-light-theme footer'>
                    <div className='row pt-5 justify-content-center m-0'>
                        <div className="col p-5 pb-3 d-flex align-items-end flex-column text-center">
                            <h5 className='me-5'>About us</h5>
                            <ul class="nav">
                                <li class="nav-item">
                                    <span>Tokonomics</span>
                                </li>
                                <li class="nav-item">
                                    <span>Roadmaps</span>
                                </li>
                                <li class="nav-item">
                                    <span>Charity</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col pb-3 p-5">
                            <h5 className='ms-3'>Documents</h5>
                            <ul class="nav">
                                <li class="nav-item">
                                    <span>Whitepaper</span>
                                </li>
                                <li class="nav-item">
                                    <span>Audit</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 d-flex align-items-center flex-column mb-4">
                            <h5>
                                Social Media
                            </h5>
                            <div className="color-theme">
                                <i className="fa-brands fa-facebook me-2"></i>
                                <i className="fa-brands fa-twitter me-2"></i>
                                <i class="fa-brands fa-telegram me-2"></i>
                                <i className="fa-brands fa-discord me-2"></i>
                            </div>
                        </div>
                        <div className=" bg-theme text-center pt-2">
                        <p>©️ 2022 DigiToads. All rights Reserved.</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
