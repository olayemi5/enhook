import React from "react";
import FooterLayout from "../components/layout/FooterLayout";
import Authentication from "./Authentication";

function Homepage () {
    return (
        <section>
            <div className="banner-wrapper-area">
                <div className="container">
                    <div className="row align-items-center m-0">
                    <div className="col-xl-5 col-lg-6 col-md-12 p-0">
                        <div className="banner-wrapper-content">
                        <h1>A Trusted and Secure USSD Interaction Platform</h1>
                        <form data-toggle="validator"><input type="email" className="input-newsletter"
                            placeholder="Enter your Email or Phone" name="EMAIL" required autoComplete="off" /><button
                            type="submit" style={{backgroundColor:'#16780d'}}>Get Started <i className="fa fa-arrow"></i></button>
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
            <Authentication />

        </section>
    )
}

export default Homepage;