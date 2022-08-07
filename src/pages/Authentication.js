
import React, { useRef, useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { GetDetailsByNIN, GetUserByPhone, AddConsumerData, GetDetailsByBVN } from "../services/auth/AuthenticationResource";
import AppCtx from '../context/UserContext'
import moment from "moment";

function Authentication () {

    const history = useNavigate();
    window.localStorage.setItem('currentPage', "Auth");
    const userDetailCtx = useContext(AppCtx);
    const [isLoading, setIsLoading] = useState(false);
    const ninBvn = useRef();
    
    const ProceedAuthHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);

        if (document.querySelector('input[name="auth_means"]:checked') === null) {
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Please select an authentication mean'
                })
            
                setIsLoading(false);
            return;
        }

        const selectMeans = document.querySelector('input[name="auth_means"]:checked').value;

        if(selectMeans === "NIN") {
            const searchParams = 
            {
                searchParameter: ninBvn.current.value,
                verificationType: "NIN-SEARCH"
            }
            GetDetailsByNIN(searchParams)
            .then((response) => {
                console.log(response);
                if (response.data.response.length === 0) {
                   Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'NIN not valid',
                    })

                    setIsLoading(false);
                    return;
                }
                else {
                    var data = response.data.response;
                    const searchParameter = {
                        "phone_number": data[0].telephoneno,
                        "user_type": "USER",
                        "channel_code": "APISNG"
                    }
                    GetUserByPhone(searchParameter)
                    .then((response) => {
                        const dataP = response.data;
                        console.log(dataP);
                        if (dataP.response_message === "Successful Request") {
                            userDetailCtx.updateUserDetails(dataP.response_data);
                            setIsLoading(false);
                        }
                        else{
                            console.log("details not found on wallet")
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
                                    let splitValue = data[0].birthdate.split("-")
                                    const user = {
                                        channelCode: "APISNG",
                                        uid: ninBvn.current.value,
                                        uidType: "NIN",
                                        reference: "NXG3877585HGTKJHGO",
                                        title: data[0].title,
                                        firstName: data[0].firstname,
                                        middleName: data[0].middlename,
                                        lastName: data[0].surname,
                                        userName: data[0].email,
                                        phone: data[0].telephoneno,
                                        emailId: data[0].email,
                                        postalCode: "900110",
                                        city: "gwarinpa",
                                        address: "Lagos Estate, Abuja",
                                        countryOfResidence: "NG",
                                        tier: "1",
                                        accountNumber: data[0].telephoneno.substring(1),
                                        dateOfBirth: `${splitValue[2]}/${splitValue[1]}/${splitValue[0]}`,
                                        countryOfBirth: data[0].birthcountry === "nigeria" ? "NG" : "NG",
                                        password: data[0].telephoneno+data[0].telephoneno,
                                        remarks: "Passed",
                                        referralCode: data[0].email
                                    }
                                    AddConsumerData(user)
                                    .then((response) => {
                                        console.log(response);
                                        let dataPP = response.data;
                                        if (dataPP.response_message === "Successful Request") {
                                            GetUserByPhone(searchParameter)
                                            .then((response) => {
                                                const dataPPP = response.data;
                                                console.log(dataPPP);
                                                if (dataP.response_message === "Successful Request") {
                                                    userDetailCtx.updateUserDetails(dataPPP.response_data);
                                                    setIsLoading(false);
                                                }
                                            })
                                        }
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text: err.message,
                                        })
                                    })

                                    setIsLoading(false);
                                }
                            })
                            .catch((err) => {
                                console.log(err)
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: err.message,
                                })
                            })
                        }
                    })
                }
            })
        }
        if(selectMeans === "BVN") {
            const searchParams = {
                channel_code: "APISNG",
                bvn: ninBvn.current.value
            }
            GetDetailsByBVN(searchParams)
            .then((response) => {
                console.log(response);
                if(response.data.response.length === 0 || response.data.respons === "") {
                     Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'BVN not valid',
                    })

                    setIsLoading(false);
                    return;
                }

                else{
                    var data = response.data.response;
                    const searchParameter = {
                        "phone_number": data[0].phoneNumber1,
                        "user_type": "USER",
                        "channel_code": "APISNG"
                    }
                    GetUserByPhone(searchParameter)
                    .then((response) => {
                        const dataP = response.data;
                        console.log(dataP);
                        if (dataP.response_message === "Successful Request") {
                            userDetailCtx.updateUserDetails(dataP.response_data);
                            setIsLoading(false);
                        }
                        else{
                            console.log("details not found on wallet")
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
                                    let splitValue = data[0].birthdate.split("-")
                                    const user = {
                                        channelCode: "APISNG",
                                        uid: ninBvn.current.value,
                                        uidType: "BVN",
                                        reference: "NXG3877513HGTKJHGO",
                                        title: "",
                                        firstName: data[0].firstName,
                                        middleName: data[0].middleName,
                                        lastName: data[0].lastName,
                                        userName: data[0].email,
                                        phone: data[0].telephoneno,
                                        emailId: data[0].email,
                                        postalCode: "900110",
                                        city: data[0].stateOfResidence,
                                        address:  data[0].residentialAddress,
                                        countryOfResidence: "NG",
                                        tier: "1",
                                        accountNumber: data[0].phoneNumber1.substring(1),
                                        dateOfBirth: `${splitValue[2]}/${splitValue[1]}/${splitValue[0]}`,
                                        countryOfBirth: data[0].nationality === "Nigeria" ? "NG" : "NG",
                                        password: data[0].phoneNumber1+data[0].phoneNumber1,
                                        remarks: "Passed",
                                        referralCode: data[0].email
                                    }
                                    AddConsumerData(user)
                                    .then((response) => {
                                        console.log(response);
                                        let dataPP = response.data;
                                        if (dataPP.response_message === "Successful Request") {
                                            GetUserByPhone(searchParameter)
                                            .then((response) => {
                                                const dataPPP = response.data;
                                                console.log(dataPPP);
                                                if (dataP.response_message === "Successful Request") {
                                                    userDetailCtx.updateUserDetails(dataPPP.response_data);
                                                    setIsLoading(false);
                                                }
                                            })
                                        }
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text: err.message,
                                        })
                                    })

                                    setIsLoading(false);
                                }
                            })
                            .catch((err) => {
                                console.log(err)
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: err.message,
                                })
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
                                            <h4 className="text-center">Account Details</h4>
                                            <div className="form-group m-3">
                                                <h3 style={{color:'#401c69'}}>First name:</h3>
                                                <div className="p-4" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                    {userDetailCtx.userDetails.first_name}
                                                </div>
                                            </div>
                                            <div className="form-group m-3">
                                                <h3 style={{color:'#401c69'}}>Last name:</h3>
                                                <div className="p-4" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                    {userDetailCtx.userDetails.last_name}
                                                </div>
                                            </div>
                                            <div className="form-group m-3">
                                                <h3 style={{color:'#401c69'}}>Wallet Address:</h3>
                                                <div className="p-4" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                    {userDetailCtx.userDetails.wallet_info.wallet_address}
                                                </div>
                                            </div>
                                            <div className="form-group m-3">
                                                <h3 style={{color:'#401c69'}}>Account Number:</h3>
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