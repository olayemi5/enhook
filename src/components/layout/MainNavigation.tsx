import React from "react";
import { Link } from "react-router-dom";

function MainNavigation () {

    // window.localStorage.setItem('username', response.preferred_username);
    
    return(
        <section>
            <div id="navbar" className="navbar-area">
            <div className="raimo-responsive-nav">
                <div className="container">
                <div className="raimo-responsive-menu">
                    <div className="hamburger-menu"><i className="bx bx-menu"></i></div>
                    <div className="container"><Link className="navbar-brand" to="/"><b><span style={{color:"#05294d"}}>EN</span><span style={{color:"#24588c", fontSize:"30px"}}>HOOK</span></b></Link></div>
                    <div className="responsive-others-option">
                    <div className="d-flex align-items-center">
                        <div className="option-item"><a className="login-btn"><i
                            className="bx bx-log-in"></i></a></div>
                        <div className="option-item"><select className="form-select">
                            <option value="0">English</option>
                        </select></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-md navbar-light hide-menu">
                <div className="container"><Link className="navbar-brand" to={'/'}><b><span style={{color:"#05294d"}}>EN</span><span style={{color:"#24588c", fontSize:"30px"}}>HOOK</span></b></Link>
                <div className="collapse navbar-collapse mean-menu">
                    <ul className="navbar-nav">
                    <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link>
                    </li>
                    {
                        window.localStorage.getItem('username') === null ||  window.localStorage.getItem('username') === "" 
                        ? <li className="nav-item megamenu"><Link className="nav-link" to={'/'}><span style={{color:"gray", fontFamily:"monospace"}}>Authenticate for full access</span></Link></li>
                        : <section>
                            <li className="nav-item megamenu"><Link className="nav-link" to={'/'}>Fund Account</Link></li>
                            <li className="nav-item megamenu"><Link className="nav-link" to={'/'}>Transfer Funds</Link></li>
                        </section>
                    }
                    
                    </ul>
                    <div className="others-option">
                        <div className="d-flex align-items-center">

                            {   window.localStorage.getItem('username') === "" || window.localStorage.getItem('username') === null
                                ?  <section>
                                    <div className="option-item"><a className="login-btn" href="/"><i
                                        className="fa fa-sign-in"></i> Authenticate</a></div>
                                    </section>
                                : <section>
                                        <div className="option-item"><a className="login-btn" href="/"><i
                                        className="fa fa-sign-out"></i> Log out</a></div>
                                </section>
                            }

                            <div className="option-item"><a className="default-btn" href="https://novis-ts.envytheme.com/contact/"><i
                                className="fa fa-user"></i> Contact Us</a></div>
                            <div className="option-item">
                                <select className="form-select">
                                    <option value="0">English</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </nav>
            </div>
        </section>
    )
}

export default MainNavigation;