import React from "react";

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
                        <div className="banner-wrapper-image"><img src="../images/banner/banner-img3.png" alt="image" /></div>
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
                    <div className="icon"><img src="../images/icon/icon18.png" alt="image" /></div>
                    <h3>Start Instantly</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et
                        doee magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="features-box">
                    <div className="icon bg-ffefc7"><img src="../images/icon/icon19.png" alt="image" /></div>
                    <h3>Easy to Use</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et
                        doee magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="features-box">
                    <div className="icon bg-ffc9c2"><img src="../images/icon/icon20.png" alt="image" /></div>
                    <h3>Secure and Regulated</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et
                        doee magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="tokens-area pb-100">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="tokens-image"><img src="../images/tokens.jpg" alt="image" /></div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="tokens-content">
                    <h2>Pre-Sale Ends In</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                    <div id="countdown">
                        <ul>
                        <li><span id="days"></span>DAYS</li>
                        <li><span id="hours"></span>HOURS</li>
                        <li><span id="minutes"></span>MIN</li>
                        <li><span id="seconds"></span>SEC</li>
                        </ul>
                    </div>
                    <div className="token-price">
                        <div className="d-flex">
                        <div className="box"><span>Token Price</span>
                            <h3>1 ICOX=$0.08</h3>
                        </div>
                        <div className="box"><span>We Accept</span>
                            <div><img src="../images/ethereum.png" alt="image" /> ETH</div>
                        </div>
                        </div>
                    </div>
                    <div className="total-price"><span>Tokens Available On Pre-Sale <span>75,000,000 ICOX</span></span></div>
                    <div className="btn-box"><a className="default-btn" href="https://novis-ts.envytheme.com/buy/"><i
                            className="bx bxs-discount"></i> Buy Tokens 55% Off</a><a href="#" className="default-btn"><i
                            className="bx bxs-file"></i> White Pappers</a></div>
                    <div className="payment-methods"><img src="../images/master-card.png" alt="image" /><img
                        src="../images/paypal.png" alt="image" /><img src="../images/bitcoin2.png" alt="image" /><img
                        src="../images/visa.png" alt="image" /></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="cryptocurrency-area ptb-100 bg-fffbf1">
            <div className="container">
                <div className="section-title">
                <h2>Top Cryptocurrencies</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
                <div className="cryptocurrency-table table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Change (24h)</th>
                        <th scope="col">Trade</th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                </div>
                <div className="more-cryptocurrency-box text-center"><a className="default-btn"
                    href="https://novis-ts.envytheme.com/prices/"><i className="bx bx-purchase-tag-alt"></i> See More Prices</a>
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
                    <div className="single-features-box"><img src="../images/features/features-img1.png" alt="image" />
                    <h3>Security First</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et
                        doee magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-features-box"><img src="../images/features/features-img2.png" alt="image" />
                    <h3>Fast Withdrawals</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et
                        doee magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-features-box"><img src="../images/features/features-img3.png" alt="image" />
                    <h3>24/7 Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et
                        doee magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="portfolio-area bg-fff0ee">
            <div className="container">
                <div className="single-portfolio-item ">
                <div className="row align-items-center m-0">
                    <div className="col-xl-5 col-lg-6 col-md-12 p-0">
                    <div className="content-slides"></div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-12 p-0">
                    <div className="image text-center"><img src="../images/portfolio/portfolio-img1.png" alt="image" /></div>
                    </div>
                </div>
                </div>
            </div>
            <div className="shape11"><img src="../images/shape/shape11.png" alt="image" /></div>
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
                    <div className="icon"><img src="../images/icon/icon12.png" alt="image" /></div>
                    <h3>Bank Transfers</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem
                        ipsum dolor sit amet, consectetur elit.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-buy-sell-item">
                    <div className="icon"><img src="../images/icon/icon13.png" alt="image" /></div>
                    <h3>Online Wallets</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem
                        ipsum dolor sit amet, consectetur elit.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-buy-sell-item">
                    <div className="icon"><img src="../images/icon/icon14.png" alt="image" /></div>
                    <h3>Cash Payment</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem
                        ipsum dolor sit amet, consectetur elit.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-buy-sell-item">
                    <div className="icon"><img src="../images/icon/icon15.png" alt="image" /></div>
                    <h3>Debit/Credit Cards</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem
                        ipsum dolor sit amet, consectetur elit.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-buy-sell-item">
                    <div className="icon"><img src="../images/icon/icon16.png" alt="image" /></div>
                    <h3>Discounted Gift Cards</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem
                        ipsum dolor sit amet, consectetur elit.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-buy-sell-item">
                    <div className="icon"><img src="../images/icon/icon17.png" alt="image" /></div>
                    <h3>Goods &amp; Services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem
                        ipsum dolor sit amet, consectetur elit.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="shape13"><img src="../images/shape/shape13.png" alt="image" /></div>
            </div>
            <div className="app-download-area bg-f9f9f9">
            <div className="container">
                <div className="row align-items-center m-0">
                <div className="col-lg-6 col-md-12 p-0">
                    <div className="app-download-image"><img src="../images/app.png" alt="image" /></div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                    <div className="app-download-content">
                    <h2>Trade On The Mobile App</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <div className="btn-box"><a href="#" className="playstore-btn" target="_blank"><img src="../images/play-store.png"
                            alt="image" />Get It On<span>Google Play</span></a><a href="#" className="applestore-btn"
                        target="_blank"><img src="../images/apple-store.png" alt="image" />Download on the<span>Apple
                            Store</span></a></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="advisor-area pt-100 pb-70 undefined">
            <div className="container">
                <div className="section-title">
                <h2>Our Advisors</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
                <div className="row justify-content-center">
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="single-advisor-box">
                    <div className="image"><img src="../images/advisor/advisor-img1.jpg" alt="image" /></div>
                    <div className="content">
                        <h3>Alika Maya</h3><span>CEO Capital Limited</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="single-advisor-box">
                    <div className="image"><img src="../images/advisor/advisor-img2.jpg" alt="image" /></div>
                    <div className="content">
                        <h3>Jason Smith</h3><span>Cryptonet Team Lead</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="single-advisor-box">
                    <div className="image"><img src="../images/advisor/advisor-img3.jpg" alt="image" /></div>
                    <div className="content">
                        <h3>Ruby Taylor</h3><span>Trade Management</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="single-advisor-box">
                    <div className="image"><img src="../images/advisor/advisor-img4.jpg" alt="image" /></div>
                    <div className="content">
                        <h3>Eva Anderson</h3><span>Market Analysis Lead</span>
                    </div>
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
                    <h2>Start Trading on Novis</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p><a
                        className="default-btn global-cursor" href="https://www.coinbase.com/signup"><i className="bx bxs-user"></i>
                        Register Now</a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="cta-image"><img src="../images/man-with-ipad.png" alt="image" /></div>
                </div>
                </div>
            </div>
            <div className="shape6"><img src="../images/shape/shape6.png" alt="image" /></div>
            <div className="shape7"><img src="../images/shape/shape7.png" alt="image" /></div>
            <div className="shape8"><img src="../images/shape/shape8.png" alt="image" /></div>
            <div className="shape9"><img src="../images/shape/shape9.png" alt="image" /></div>
            <div className="shape15"><img src="../images/shape/shape15.png" alt="image" /></div>
            </div>
        </section>
    )
}

export default Homepage;