import React from 'react'
import Button from './Button'

export default function Section() {
    const btnStyles = {
        marginTop: "10px",
        paddingRight: "0px",
        paddingLeft: "0px",
        width: "130px",
        margin: "auto"
    }
    return (
        <>
            <div className="container-fluid bg-light-theme py-5 mySection position-relative">
                <div className='row py-2'>
                    <div className="card mx-auto overflow-hidden border-2 border-dark p-0" style={{ width: "69%", borderRadius: "40px" }}>
                        <div class="card-header bg-light-theme">
                        </div>
                        <div className="card-body text-center">
                            <div className="row">
                                <div className='col-6 px-4 pb-4 border-2 border-end'>
                                    <h1>Stage 1 <br /> has started!</h1>
                                    <p className='fw-bold text-secondary'>1 USDT = 94.33 DigiToads</p>
                                    <div className="card border-2 shadow py-4 px-5 postition-relative" style={{ borderRadius: "40px" }}>
                                        <strong className='color-theme'>1 USDT = 94.33 DigiToads</strong>
                                        <strong className='color-light-theme'>DigiToads remaining</strong>
                                        <span className='text-secondary fw-bold mt-1 mb-3' style={{ fontSize: "12px" }}>Until 1 USDT = 94.33 DigiToads</span>
                                        <Button text={"Connect Wallet"} styles={btnStyles} />
                                        <img src="/img/circle.png" alt="" className='circle' />
                                    </div>
                                </div>
                                <div className='col-6 position-relative'>
                                    <strong className='text-secondary'>USDT Raised: $9,991, 608.91 / $10,700,000.00</strong>
                                    <img src="/img/circles.png" alt="" />
                                    <div className='mt-3 monkey'>
                                        <img src="/img/monkey.png" alt="" className='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/img/circle.png" alt="" className='circle1' />
                <img src="/img/circle.png" alt="" className='circle2'/>
            </div>
        </>
    )
}
