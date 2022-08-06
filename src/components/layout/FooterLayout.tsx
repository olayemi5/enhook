import React from "react"

function FooterLayout() {
    return (
        <section>
            <footer className="footer-area">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-footer-widget"><a href="index-2.html" className="d-inline-block logo"><img
                            src="../images/logo.png" alt="logo" /></a>
                        <div className="newsletter-form">
                            <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                            <form data-toggle="validator"><input type="email" className="input-newsletter"
                                placeholder="Enter your email" name="EMAIL" required  autoComplete="off" /><button
                                type="submit">Subscribe Now <i className="bx bx-paper-plane"></i></button>
                            <div id="validator-newsletter" className="form-result"></div>
                            </form>
                        </div>
                        <ul className="social-links">
                            <li><a href="#" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a></li>
                            <li><a href="#" target="_blank" className="twitter"><i className="bx bxl-twitter"></i></a></li>
                            <li><a href="#" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a></li>
                            <li><a href="#" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                        <h3>Cryptocurrency</h3>
                        <ul className="services-links">
                            <li><a href="https://novis-ts.envytheme.com/buy/">Buy Bitcoin</a></li>
                            <li><a href="https://novis-ts.envytheme.com/buy/">Buy BNB</a></li>
                            <li><a href="https://novis-ts.envytheme.com/buy/">Buy Ethereum</a></li>
                            <li><a href="https://novis-ts.envytheme.com/buy/">Buy Ripple</a></li>
                            <li><a href="https://novis-ts.envytheme.com/buy/">Buy Litecoin</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget pl-5">
                        <h3>Resources</h3>
                        <ul className="quick-links">
                            <li><a href="https://novis-ts.envytheme.com/trade/">Trade</a></li>
                            <li><a href="https://novis-ts.envytheme.com/guides/">Guides</a></li>
                            <li><a href="https://novis-ts.envytheme.com/wallet/">Wallets</a></li>
                            <li><a href="https://novis-ts.envytheme.com/faq/">FAQ</a></li>
                            <li><a href="https://novis-ts.envytheme.com/contact/">Contact</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                        <h3>Contact Info</h3>
                        <ul className="footer-contact-info">
                            <li>Address: 2750, Quadra Street Victoria, Canada</li>
                            <li>Email: <a
                                href="https://novis-ts.envytheme.com/cdn-cgi/l/email-protection#98f0fdf4f4f7d8d6f7eef1ebb6fbf7f5"><span
                                className="__cf_email__"
                                data-cfemail="ddb5b8b1b1b29db3b2abb4aef3beb2b0">[email&#160;protected]</span></a></li>
                            <li>Phone: <a href="tel:+44587154756">+1416-555-0896</a></li>
                            <li>Fax: <a href="tel:+44587154756">+1416-555-0477</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                    <p>Copyright 2021 <strong>AFF</strong>. All Rights Reserved by</p>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default FooterLayout