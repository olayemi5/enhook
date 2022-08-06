import React from "react";
import { Link } from "react-router-dom";

function MainNavigation () {

    // window.localStorage.setItem('username', response.preferred_username);
    
    return(
        <section>
            <div id="navbar" class="navbar-area">
            <div class="raimo-responsive-nav">
                <div class="container">
                <div class="raimo-responsive-menu">
                    <div class="hamburger-menu"><i class="bx bx-menu"></i></div>
                    <div class="container"><Link class="navbar-brand" to="/"><b><span style={{color:"#05294d"}}>EN</span><span style={{color:"#24588c", fontSize:"30px"}}>HOOK</span></b></Link></div>
                    <div class="responsive-others-option">
                    <div class="d-flex align-items-center">
                        <div class="option-item"><a class="login-btn"><i
                            class="bx bx-log-in"></i></a></div>
                        <div class="option-item"><select class="form-select">
                            <option value="0">English</option>
                        </select></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-md navbar-light hide-menu">
                <div class="container"><Link class="navbar-brand" to={'/'}><b><span style={{color:"#05294d"}}>EN</span><span style={{color:"#24588c", fontSize:"30px"}}>HOOK</span></b></Link>
                <div class="collapse navbar-collapse mean-menu">
                    <ul class="navbar-nav">
                    <li class="nav-item"><Link to={'/'} class="nav-link">Home</Link>
                    </li>
                    {
                        window.localStorage.getItem('username') === null ||  window.localStorage.getItem('username') === "" 
                        ? <li class="nav-item megamenu"><Link disabled class="nav-link" to={'/'}><span style={{color:"gray", fontFamily:"monospace"}}>Authenticate for full access</span></Link></li>
                        : <section>
                            <li class="nav-item megamenu"><Link class="nav-link" to={'/'}>Fund Account</Link></li>
                            <li class="nav-item megamenu"><Link class="nav-link" to={'/'}>Transfer Funds</Link></li>
                        </section>
                    }
                    
                    </ul>
                    <div class="others-option">
                        <div class="d-flex align-items-center">

                            {   window.localStorage.getItem('username') != "" || window.localStorage.getItem('username') != null
                                ? <section>
                                        <div class="option-item"><a class="login-btn" href="https://novis-ts.envytheme.com/authentication/"><i
                                        class="fa fa-sign-out"></i> Log out</a></div>
                                </section> 
                                : <section>
                                    <div class="option-item"><a class="login-btn" href="https://novis-ts.envytheme.com/authentication/"><i
                                        class="fa fa-sign-in"></i> Authenticate</a></div>
                                </section>
                            }

                            <div class="option-item"><a class="default-btn" href="https://novis-ts.envytheme.com/contact/"><i
                                class="fa fa-user"></i> Contact Us</a></div>
                            <div class="option-item">
                                <select class="form-select">
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