import React , {useContext} from "react";
import { Link } from "react-router-dom";
import AppCtx from "../../context/UserContext";

function MainNavigation () {

    // window.localStorage.setItem('username', response.preferred_username);
    const userDetailsCtx = useContext(AppCtx);

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
                <div className="container"><Link className="navbar-brand" to={'/'}><b><span style={{color:"#05294d", fontSize:"30px"}}>e</span><span style={{color:"#24588c", fontSize:"30px"}}>NAIRA</span></b></Link>
                <div className="collapse navbar-collapse mean-menu">
                    <div className="others-option">
                        <div className="d-flex align-items-center">
                            <div className="option-item">
                                {
                                    userDetailsCtx.userDetails != null ?
                                    <section>
                                        <Link className="" to="/"><i className="fa fa-user"> {userDetailsCtx.userDetails.account_number}</i> </Link>
                                        <button onClick={userDetailsCtx.clearUserSession} className="btn btn-info text-white"><i className="fa fa-sign-out"> Sign out</i></button>
                                    </section>
                                    :
                                    <Link className="" to="/"><i className="fa fa-user"> Unactive </i> </Link>
                                }
                                    
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