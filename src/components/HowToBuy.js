import React from 'react'
import Button from './Button'

export default function HowToBuy() {
    return (
        <>
            <div className="container-fluid bg-theme section2 py-5 position-relative">
                <div className="row justify-content-center">
                    <div className='postion-relative header text-center'>
                        <div>
                            <img src="/img/logo.png" alt="" />
                        </div>
                        <h2 className='color-dark-theme'>How to buy DigiToads</h2>
                    </div>
                </div>

                <div className='container pt-5 px-5'>
                    <div className='row align-items-top firstRow pb-4'>
                        <div className="col-6">

                            <div class="card bg-card myCard myBorder" style={{ width: "100%" }}>
                                <div class="card-body px-5 py-4">
                                    <div className='d-flex align-items-center mb-2'>
                                        <img src="/img/logo.png" className="logo" alt="" />
                                        <span class="card-title fs-5 fw-bold m-0 ms-5">Step 1/3</span>
                                    </div>
                                    <p class="color-dark-theme">
                                        To begin, make sure you have a MetaMask wallet installed on your browser, or use one of the wallets supported by Wallet Connect (we recommend Trust Wallet).
                                    </p>
                                    <p class="color-dark-theme">
                                        Purchasing on a desktop browser will give you a smoother purchasing experience. For this we recommend Metamask.
                                    </p>
                                    <p class="color-dark-theme">
                                        If you are purchasing on mobile, we recommend using Trust Wallet and connecting through the in built browser.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-6">
                            <img src="img/fox.png" className='d-block mx-auto h-100' alt="" />
                        </div>
                    </div>

                    <div className="row secondRow align-items-center my-5 pb-3">
                        <div className="col-6">
                            <div className='d-flex'>
                                <div className='border rounded-circle icon myBorder'>
                                    <img src="/img/wallet.png" alt="" className='rounded-circle mt-2' />
                                </div>
                                <div className=''>
                                    <p className='fw-bold'>
                                        Buy ETH or BNB with card
                                    </p>
                                    <p className='text-dark lh-sm' style={{ fontSize: "13px" }} >
                                        Visit https://www.moonpay.com/buy this will allow you to purchase ETH or BNB that will be sent to your wallet. You will then be able to use this ETH or BNB to purchase DigiToads. Visit https://www.moonpay.com/buy to begin and follow the on screen steps. We recommend purchasing a minimum of $20 worth of ETH or $5 worth of BNB to cover the minimum DigiToads purchase.
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex mt-4'>
                                <div className='border rounded-circle icon myBorder'>
                                    <img src="/img/wallet.png" alt="" className='rounded-circle mt-2' />
                                </div>
                                <div>
                                    <p className='fw-bold'>
                                        Buy Big Eyes with ETH or BNB
                                    </p>
                                    <p className='text-dark lh-sm' style={{ fontSize: "13px" }}>
                                        Once you have sufficient ETH or BNB in your wallet (if you do not have ETH, USDT or BNB, please read option 1 first), you can now swap your ETH or BNB for Big Eyes. Type in the amount of DigiToads you wish to purchase ($15 minimum) and then click "Buy with ETH" or "Buy with BNB" Your wallet provider will ask you to gonfirm the transaction and will also show you the cost of gas.
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='border rounded-circle icon myBorder'>
                                    <img src="/img/wallet.png" alt="" className='rounded-circle mt-2' />
                                </div>
                                <div>
                                    <p className='fw-bold'>
                                        Buy Big Eyes with USDT
                                    </p>
                                    <p className='text-dark lh-sm' style={{ fontSize: "13px" }}>
                                        Please ensure you have at least $20 of USDT in your wallet before commencing the transaction. Type in the amount of DigiToads you wish to purchase ($15 minimum). Click "Convert USDT" You will then be asked to approve the purchase TWICE. The first approval is for the USDT contract and the second is for the transaction amount. Please ensure you go through both approval steps in order to complete the transaction.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div class="card bg-white myCard myBorder" style={{ width: "100%" }}>
                                <div class="card-body">
                                    <div className='d-flex align-items-center mb-2'>
                                        <img src="/img/logo.png" className="logo" alt="" />
                                        <span class="card-title fs-5 fw-bold m-0 ms-5">Step 2/3</span>
                                    </div>
                                    <p class="color-dark-theme">
                                        Once you have your preferred wallet provider ready, click "Connect Wallet" and select the appropriate option. For mobile wallet apps you will need to select "Wallet Connect".
                                    </p>
                                    <p class="color-dark-theme">
                                        You will then have 3 options:
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row thirdRow align-items-center justify-content-center'>
                        <div className="col-6">

                            <div class="card bg-card myCard myBorder" style={{ width: "100%" }}>
                                <div class="card-body px-5 py-4">
                                    <div className='d-flex align-items-center mb-2'>
                                        <img src="/img/logo.png" className="logo" alt="" />
                                        <span class="card-title fs-5 fw-bold m-0 ms-5">Step 3/3</span>
                                    </div>
                                    <p class="color-dark-theme">
                                    Once the presale has concluded, you will be able to claim your DigiToads tokens. We will release details closer to the time, however you will need to visit the main site: DigiToads and click on the pink 'claim' button.
                                    </p>
                                    <Button text={"Buy Now"} styles={{padding:"5px 20px"}}/>
                                </div>
                            </div>

                        </div>
                        <div className="col-6">
                            <img src="/img/frog.png" alt="" className='mx-auto d-block'/>
                        </div>
                    </div>
                </div>

                <img src="/img/circle.png" alt="" className='circle1' />
                <img src="/img/circle.png" alt="" className='circle2'/>

            </div>
        </>
    )
}
