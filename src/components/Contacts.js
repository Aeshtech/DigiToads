import React from 'react'
import Button from './Button'

export default function Contacts() {
    return (
        <>
            <div className="containe-fluid pb-5 position-relative contact">
                <div className="row justify-content-center m-0 pb-5" style={{ padding: "0 15%" }}>
                    <div className="col-12 text-center mb-5">
                        <h2>Talk to us</h2>
                        <strong>Leave your details below and we'll contact you to discuss <br /> purchasing DigiToads.</strong>
                    </div>
                    <div className="col-6">
                        <label for="" className='fw-bold'>First Name</label>
                        <input type="text" name="address" className='form-control' placeholder='Enter first name' />
                        <div className='d-flex'>
                            <div className='w-25'>
                                <label for="" className='fw-bold mt-3'>Country Code</label>
                                <input type="number" name="address" className='form-control' placeholder='+91' />
                            </div>
                            <div className='w-75 ms-3'>
                                <label for="" className='fw-bold mt-3'>Contact Number</label>
                                <input type="text" name="address" className='form-control' placeholder='Enter Contact Number' />
                            </div>
                        </div>
                        <label for="" className='fw-bold mt-3'>Investment budget</label>
                        <input type="text" name="address" className='form-control' placeholder='Enter investment budget' />
                    </div>
                    <div className="col-6">
                        <label for="" className='fw-bold'>Last Name</label>
                        <input type="text" name="address" className='form-control mb-3' placeholder='Enter last name' />
                        <label for="" className='fw-bold'>Best time to contact</label>
                        <input type="text" name="address" className='form-control' placeholder='Select a time to contact' />
                    </div>
                    <div className="mt-3">
                        <Button text={"Submit"} styles={{padding:"7px 30px"}}/>
                        <br />
                        <div className='mt-2'>
                            <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                By Submitting this form you are agree to our <b>Terms</b> and <b>Privacy Policy</b>
                            </label>
                        </div>
                    </div>
                </div>
                <img src="/img/circle.png" alt="" className='circle2'/>
            </div>
        </>
    )
}
