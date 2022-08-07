
import React, { useRef, useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { GetDetailsByNIN, GetUserByPhone } from "../services/auth/AuthenticationResource";
import { ConsumerCreateDto } from "../services/auth/Models/ConsumerCreateDto";
import AppCtx from '../context/UserContext'

function Authentication () {

    const history = useNavigate();
    window.localStorage.setItem('currentPage', "Auth");
    const userDetailCtx = useContext(AppCtx);
    const [isLoading, setIsLoading] = useState(false);
    const ninBvn = useRef();
    
    const ProceedAuthHandler = (event) => {
        const selectMeans = document.querySelector('input[name="genderS"]:checked').value;
        
        if(selectMeans === "NIN") {
            const searchParams = 
            {
                searchParameter: ninBvn.current.value,
                verificationType: "NIN-SEARCH"
            }
            GetDetailsByNIN(searchParams)
            .then((response) => {
                if (response.data.response.length === 0) {
                   Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'NIN not valid',
                    })
                    return;
                }
                else {
                    var data = response.data.response;
                    const searchParameter = {
                        "phone_number": data.telephoneno,
                        "user_type": "USER",
                        "channel_code": "APISNG"
                    }
                    GetUserByPhone(searchParameter)
                    .then((response) => {
                        const dataP = response.data;
                        if (dataP.response_message === "Successful Request") {
                            userDetailCtx.updateUserDetails(dataP.response_data);
                        }
                        else{
                            const swalWithBootstrapButtons = Swal.mixin({
                                customClass: {
                                    confirmButton: 'btn btn-warning text-white m-3',
                                    cancelButton: 'btn btn-danger m-3'
                                },
                                buttonsStyling: false
                            })

                            swalWithBootstrapButtons.fire({
                                title: 'Update',
                                text: "Do you want to create an account!",
                                icon: 'info',
                                showCancelButton: true,
                                confirmButtonText: 'Yes, create it!',
                                cancelButtonText: 'No, cancel!',
                                reverseButtons: true
                            })
                            
                            .then(result => {
                                if (result.isConfirmed) {
                                    const user = {
                                        channelCode: "APISNG",
                                        uid: ninBvn.current.value,
                                        uidType: "NIN",
                                        reference: "NXG3877585HGTKJHGO",
                                        title: data.title,
                                        firstName: data.firstname,
                                        middleName: data.middlename,
                                        lastName: data.surname,
                                        userName: data.email,
                                        phone: data.telephoneno,
                                        emailId: data.email,
                                        postalCode: "900110",
                                        city: "gwarinpa",
                                        address: "Lagos Estate, Abuja",
                                        countryOfResidence: "NG",
                                        tier: "1",
                                        accountNumber: data.telephoneno.substring(1),
                                        dateOfBirth: data.birthdate,
                                        countryOfBirth: data.birthcountry,
                                        password: data.telephoneno,
                                        remarks: "Passed",
                                        referralCode: data.email
                                    }
                                }
                            })
                           
                        }
                    })
                }
            })
        }

    }

    return (
        <section>
             <div className="profile-authentication-area">
                <div className="d-table">
                    <div className="mt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 " >
                                    <div className="login-form" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                        <h2><b className="">USSD *977*1#</b></h2>
                                        <p className="mr-2">Authenticate with </p> 
                                        <input id="" value="NIN" name="auth_means" type="radio"/> <label style={{marginRight: '8px'}}> NIN</label>
                                        <input id="BVN" value="BVN" name="auth_means" type="radio"/> <label> BVN</label>
                                        <form onSubmit={ProceedAuthHandler}>
                                            <div className="form-group"><input ref={ninBvn} required type="text" className="form-control"
                                                    placeholder="NIN / BVN" /></div>
                                            { isLoading ? <section>
                                                <button disabled >Loading...</button>
                                            </section> :
                                                <button type="submit">Proceed</button>
                                            }
                                        </form>
                                    </div>
                                    {   userDetailCtx.userDetails &&
                                        <div className="login-form mt-3" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                            <h2 style={{fontSize:"25px"}}><b className="">USSD *977*2*AMOUNT*PHONENUMBER#</b></h2> 
                                            <p>Transfer</p>
                                            <form >
                                                <div className="form-group"><input required type="text" className="form-control"
                                                        placeholder="Phone Number" /></div>
                                                { isLoading ? <section>
                                                    <button disabled >Loading...</button>
                                                </section> :
                                                    <button type="submit">Proceed</button>
                                                }
                                            </form>
                                        </div>
                                    }
                                    
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    {
                                        userDetailCtx.userDetails != null ?
                                        <section>
                                            <div className="form-group">
                                                <label>First name:</label>
                                                <div className="p-4" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                    {userDetailCtx.userDetails.first_name}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Last name:</label>
                                                <div className="p-4" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                    {userDetailCtx.userDetails.last_name}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Wallet Address:</label>
                                                <div className="p-4" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                    {userDetailCtx.userDetails.wallet_info.wallet_address}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Account Number:</label>
                                                <div className="p-4" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                    {userDetailCtx.userDetails.account_number}
                                                </div>
                                            </div>
                                        </section>
                                        : <div>
                                            <h2 className="text-center mt-5"><b>Authenticate to get details...</b></h2>
                                        </div>

                                    }

                                    
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Authentication;