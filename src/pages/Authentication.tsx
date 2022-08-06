
import React, { useRef, useState } from "react"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { AddConsumerData } from "../services/auth/AuthenticationResource";
import { ConsumerCreateDto } from "../services/auth/Models/ConsumerCreateDto";

function Authentication () {

    window.localStorage.setItem('currentPage', "Auth");

    const [isLoading, setIsLoading] = useState(false);

    const regisiterForm = useRef<HTMLFormElement>(null);
    const accountNumber = useRef<HTMLInputElement>(null);
    const bvn = useRef<HTMLInputElement>(null);
    const nin = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    let [reference, setReference] = useState(343)

    const AddConsumer = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const consumerDetails : ConsumerCreateDto  = {
            account_no : accountNumber?.current?.value,
            bvn : bvn?.current?.value,
            nin : nin?.current?.value,
            password : password?.current?.value,
            channel_code : "AFFGEN",
            customer_tier : "2",
            reference : `BSC34567898FGHJJB1`
        }

        AddConsumerData(consumerDetails)
        .then((response) => {
            const message = response.data;
            Swal.fire({
                title: 'info!',
                text: `${message.response_message}`,
                icon: 'info',
                confirmButtonText: 'Ok'
            })
            setReference( reference + 1 );
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
            Swal.fire({
                title: 'Error!',
                text: `${err.moreInformation}`,
                icon: 'error',
            })

            setIsLoading(false);
        });
       
    }

    return (
        <section>
             <div className="profile-authentication-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="login-form">
                                        <h2>Login</h2>
                                        <form>
                                            <div className="form-group"><input type="text" className="form-control"
                                                    placeholder="Username or email" /></div>
                                            <div className="form-group"><input type="password" className="form-control"
                                                    placeholder="Password" /></div>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input"
                                                            value="" id="rememberMe" />
                                                        <label className="form-check-label">Remember me</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap"><a href="#"
                                                        className="lost-your-password">Lost your password?</a></div>
                                            </div><button type="submit">Login</button>
                                        </form>
                                        <div className="login-with-button"><button type="button"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                    viewBox="0 0 18 18" aria-hidden="true">
                                                    <title>Google</title>
                                                    <g fill="none" fill-rule="evenodd">
                                                        <path fill="#4285F4"
                                                            d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z">
                                                        </path>
                                                        <path fill="#34A853"
                                                            d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z">
                                                        </path>
                                                        <path fill="#FBBC05"
                                                            d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z">
                                                        </path>
                                                        <path fill="#EA4335"
                                                            d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z">
                                                        </path>
                                                    </g>
                                        </svg>Login with Google</button></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="register-form">
                                        <h2>Register</h2>
                                        <form ref={regisiterForm} onSubmit={AddConsumer}>
                                            <div className="form-group"><input required  ref={accountNumber} type="text" className="form-control"
                                                    placeholder="Account Number" /></div>
                                            <div className="form-group"><input required ref={bvn} type="text" className="form-control"
                                                    placeholder="BVN" /></div>
                                            <div className="form-group"><input ref={nin} type="text" className="form-control"
                                                placeholder="NIN" /></div>
                                            <div  className="form-group"><input required type="password" ref={password} className="form-control"
                                                    placeholder="Password" /></div>
                                            { isLoading ? <section>
                                                <button disabled >Processing...</button>
                                            </section> :
                                                <button type="submit">Register</button>
                                            }
                                        </form>
                                        { isLoading ? " " :
                                            <div className="register-with-button"><button type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                        viewBox="0 0 18 18" aria-hidden="true">
                                                        <title>Google</title>
                                                        <g fill="none" fill-rule="evenodd">
                                                            <path fill="#4285F4"
                                                                d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z">
                                                            </path>
                                                            <path fill="#34A853"
                                                                d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z">
                                                            </path>
                                                            <path fill="#FBBC05"
                                                                d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z">
                                                            </path>
                                                            <path fill="#EA4335"
                                                                d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z">
                                                            </path>
                                                        </g>
                                                </svg>Register with Google</button>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Link className="back-icon" to="/"><i className="fa fa-times"></i></Link>
            </div>
        </section>
    )
}

export default Authentication;