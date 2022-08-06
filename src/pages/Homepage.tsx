import React from "react";
import FooterLayout from "../components/layout/FooterLayout";

function Homepage () {
    return (
        <section>
            <div className="banner-wrapper-area">
                <div className="container">
                    <div className="row align-items-center m-0">
                    <div className="col-xl-5 col-lg-6 col-md-12 p-0">
                        <div className="banner-wrapper-content"><span className="sub-title">First order and you’ll get up to $10 in free BTC
                            as a reward</span>
                        <h1>A Trusted and Secure Cryptocurrency Exchange</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua consectetur adipiscing elit.</p>
                        <form data-toggle="validator"><input type="email" className="input-newsletter"
                            placeholder="Enter your Email or Phone" name="EMAIL" required autoComplete="off" /><button
                            type="submit">Get Started <i className="bx bx-chevron-right"></i></button>
                            <div id="validator-newsletter" className="form-result"></div>
                        </form>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-12 p-0">
                        <div className="banner-wrapper-image"><img src={require('../assets/images/banner/banner.png')} alt="image" /></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="features-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                <h2>The Global Leader of Social Trading</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
                <div className="row align-items-center justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="features-box">
                    <div className="icon"><img src={require("../assets/images/icon/icon18.png")} alt="image" /></div>
                    <h3>Start Instantly</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et
                        doee magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="features-box">
                    <div className="icon bg-ffefc7"><img src={require("../assets/images/icon/icon19.png")} alt="image" /></div>
                    <h3>Easy to Use</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et
                        doee magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="features-box">
                    <div className="icon bg-ffc9c2"><img src={require("../assets/images/icon/icon20.png")} alt="image" /></div>
                    <h3>Secure and Regulated</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et
                        doee magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="features-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                <h2></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
                <div className="row align-items-center justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-features-box"><img src={require("../assets/images/features/features-img1.png")} alt="image" />
                    <h3>Security First</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et
                        doee magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-features-box"><img src={require("../assets/images/features/features-img2.png")} alt="image" />
                    <h3>Fast Deposits & Withdrawals</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et
                        doee magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-features-box"><img src={require("../assets/images/features/features-img3.png")} alt="image" />
                    <h3>24/7 Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et
                        doee magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="buy-sell-cryptocurrency-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                <h2>How to Buy and Sell Cryptocurrency</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
                <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-buy-sell-item">
                    <div className="icon"><img src={require("../assets/images/icon/icon12.png")} alt="image" /></div>
                    <h3>Bank Transfers</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem
                        ipsum dolor sit amet, consectetur elit.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-buy-sell-item">
                    <div className="icon"><img src={require("../assets/images/icon/icon13.png")} alt="image" /></div>
                    <h3>Online Wallets</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem
                        ipsum dolor sit amet, consectetur elit.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-buy-sell-item">
                    <div className="icon"><img src={require("../assets/images/icon/icon14.png")} alt="image" /></div>
                    <h3>Cash Payment</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem
                        ipsum dolor sit amet, consectetur elit.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-buy-sell-item">
                    <div className="icon"><img src={require("../assets/images/icon/icon15.png")} alt="image" /></div>
                    <h3>Debit/Credit Cards</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem
                        ipsum dolor sit amet, consectetur elit.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-buy-sell-item">
                    <div className="icon"><img src={require("../assets/images/icon/icon16.png")} alt="image" /></div>
                    <h3>Discounted Gift Cards</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem
                        ipsum dolor sit amet, consectetur elit.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-buy-sell-item">
                    <div className="icon"><img src={require("../assets/images/icon/icon17.png")} alt="image" /></div>
                    <h3>Goods &amp; Services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem
                        ipsum dolor sit amet, consectetur elit.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="shape13"><img src={require("../assets/images/shape/shape13.png")} alt="image" /></div>
            </div>
            <div className="app-download-area bg-f9f9f9">
            <div className="container">
                <div className="row align-items-center m-0">
                <div className="col-lg-6 col-md-12 p-0">
                    <div className="app-download-image"><img src={require("../assets/images/app.png")} alt="image" /></div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                    <div className="app-download-content">
                    <h2>Trade On The Mobile App</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <div className="btn-box"><a href="#" className="playstore-btn" target="_blank"><img src={require("../assets/images/play-store.png"
                    )} alt="image" />Get It On<span>Google Play</span></a><a href="#" className="applestore-btn"
                        target="_blank"><img src={require("../assets/images/apple-store.png")} alt="image" />Download on the<span>Apple
                            Store</span></a></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="cta-area pt-100 bg-gradient-image">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-12">
                    <div className="cta-content black-text">
                    <h2>Start Trading on AFF</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p><a
                        className="default-btn global-cursor" href="https://www.coinbase.com/signup"><i className="bx bxs-user"></i>
                        Register Now</a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="cta-image"><img src={require("../assets/images/man-with-ipad.png")} alt="image" /></div>
                </div>
                </div>
            </div>
            <div className="shape6"><img src={require("../assets/images/shape/shape6.png")} alt="image" /></div>
            <div className="shape7"><img src={require("../assets/images/shape/shape7.png")} alt="image" /></div>
            <div className="shape8"><img src={require("../assets/images/shape/shape8.png")} alt="image" /></div>
            <div className="shape9"><img src={require("../assets/images/shape/shape9.png")} alt="image" /></div>
            <div className="shape15"><img src={require("../assets/images/shape/shape15.png")} alt="image" /></div>
            </div>
            <FooterLayout />
        </section>
    )
}

export default Homepage;