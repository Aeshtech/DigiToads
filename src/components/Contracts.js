import React from 'react'
import Button from './Button'

export default function Contracts() {
    return (
        <>
            <div className="container-fluid bg-light-theme pt-5 contracts">
                <div className="row">
                    <div className="card mx-auto overflow-hidden border-2 border-dark p-0" style={{ width: "69%", borderRadius: "40px" }}>
                        <div className="card-body pb-5 position-relative">
                            <div className='text-center'>
                                <h1>DigiToads Contract</h1>
                                <strong>Use the contact information below to add DigiToads to <br></br> your wallet.</strong>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-12 px-4 mb-3">
                                    <label for="" className='fw-bold'>Address</label>
                                    <input type="text" name="address" className='form-control' placeholder='0xc8De432D45SLWPD985DWP' />
                                </div>
                                <div className="col-6 ps-4 pe-2">
                                    <label for="" className='fw-bold'>Decimals</label>
                                    <input type="text" name="address" className='form-control' placeholder='18' />
                                </div>
                                <div className="col-6 pe-2 pe-4">
                                    <label for="" className='fw-bold'>Token Symbol</label>
                                    <input type="text" name="address" className='form-control' placeholder='BIG' />
                                </div>

                                <div className="col-12 mt-4 bg-theme text-center py-3 position-relative" style={{ width: "90%", borderRadius: "40px" }}>
                                    <h2>100% Secure</h2>
                                    <p className='color-dark-theme lh-sm fw-bold' style={{ fontSize: "10px" }}>
                                        Contract code fully audited by Solidity Finance and shown to be 100% secure.<br />
                                        Team fully verified by CoinSniper to ensure anti-rug and complete project security.
                                    </p>
                                    <div className='position-absolute' style={{ left: "43%", bottom: "-14px" }}>
                                        <Button text={"Whitepaper"} styles={{ padding: "5px 20px" }} />
                                    </div>
                                </div>
                            </div>
                            <img src="/img/circle.png" alt="" className='circle1' />
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#a4f4c5" fill-opacity="1" d="M0,320L1440,160L1440,0L0,0Z"></path>
            </svg>
        </>
    )
}
