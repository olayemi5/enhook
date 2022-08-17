import React from "react";
import { Link } from "react-router-dom";

function FooterLayout() {
    return (
        <section>
            <footer className="footer-area">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-footer-widget"><a href="index-2.html" className="d-inline-block logo"><img style={{width:'68px'}} src="https://www.dignited.com/wp-content/uploads/2021/10/e-naira-CBN.jpg"></img></a>
                        <div className="newsletter-form">
                            <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                            <form data-toggle="validator"><input type="email" className="input-newsletter"
                                placeholder="Enter your email" name="EMAIL" required  autoComplete="off" /><button
                                type="submit" style={{backgroundColor:'#16780d'}}>Subscribe Now <i className="fa fa-envelope-o"></i></button>
                            <div id="validator-newsletter" className="form-result"></div>
                            </form>
                        </div>
                        <ul className="social-links">
                            <li><a href="#" target="_blank" className="facebook"><i className="fa fa-facebook-square"></i></a></li>
                            <li><a href="#" target="_blank" className="twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#" target="_blank" className="instagram"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                        <h3>eNaira</h3>
                        <ul className="services-links">
                            <li><Link to="/">Buy eNaira</Link></li>
                            <li><Link to="/">Deposit eNaira</Link></li>
                            <li><Link to="/">Withdraw eNaira</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Resources</h3>
                            <ul className="quick-links">
                                <li><Link to="/">Trade</Link></li>
                                <li><Link to="/">Guides</Link></li>
                                <li><Link to="/">Wallets</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                        <h3>Contact Info</h3>
                        <ul className="footer-contact-info">
                            <li>Address: AFF, CBN Nigeria Hackerthon</li>
                            <li>Email: <Link to="/">eNairaNigeria.cbn@aff.com</Link></li>
                            <li>Phone: <Link to="tel:++234eNairaNigeria">+234eNairaNigeria</Link></li>
                            <li>Fax: <Link to="tel:+234eNairaNigeria">+234eNairaNigeria</Link></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                    <p>Copyright 2022 <strong style={{color:'#126b0a'}}>AFF</strong>. All Rights Reserved by</p>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default FooterLayout