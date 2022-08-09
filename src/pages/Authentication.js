
import React, { useRef, useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { GetDetailsByNIN, AddMerchantData, GetUserByPhone, AddConsumerData, GetDetailsByBVN , ConsumerLogin} from "../services/auth/AuthenticationResource";
import AppCtx from '../context/UserContext'
import moment from "moment";

function Authentication () {

    const history = useNavigate();
    window.localStorage.setItem('currentPage', "Auth");
    const userDetailCtx = useContext(AppCtx);
    const [isLoading, setIsLoading] = useState(false);
    const ninBvn = useRef();
    
     const  ProceedAuthHandler = async (event) => {
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

        if (document.querySelector('input[name="account_type"]:checked') === null) {
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Please select an account type'
                })
            
                setIsLoading(false);
            return;
        }

        const selectMeans = document.querySelector('input[name="auth_means"]:checked').value;
        const accountType = document.querySelector('input[name="account_type"]:checked').value;

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
                    let usertype = accountType === 'Consumer' ? 'USER' : 'MERCHANT'
                    const searchParameter = {
                        "phone_number": data[0].telephoneno,
                        "user_type": usertype,
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
                                text: "Your account is not found on our database would you want to create an account!",
                                icon: 'info',
                                showCancelButton: true,
                                confirmButtonText: 'Yes, create it!',
                                cancelButtonText: 'No, cancel!',
                                reverseButtons: true
                            })
                            
                            .then(result => {
                                if (result.isConfirmed) {
                                    let splitValue = data[0].birthdate.split("-")
                                    
                                    if(accountType === 'Consumer') {
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
                                            setIsLoading(false);
                                        })
                                    }
                                    else{
                                        const swalWithBootstrapButtonss = Swal.mixin({
                                            customClass: {
                                                confirmButton: 'btn btn-warning text-white m-3',
                                                cancelButton: 'btn btn-danger m-3'
                                            },
                                            buttonsStyling: false
                                        })

                                        swalWithBootstrapButtonss.fire({
                                            title: 'Input propose business name and TIN (In comma seperated)',
                                            input: 'text',
                                            inputLabel: 'Your details',
                                            inputPlaceholder: 'AFFCBN HACKERTHONO,09898787676'
                                        })
                                        .then((response) => {
                                            if(response.isConfirmed){
                                                let splitString = response.value.split(",")
                                                console.log(splitString)

                                                const merchantData = {
                                                    channelCode: "APISNG",
                                                    reference: "01372922-0001",
                                                    uid: splitString[1],
                                                    uidType: "TIN",
                                                    businessName: splitString[0],
                                                    title: "",
                                                    dirBvn: "",
                                                    dirFirstName: data[0].firstname,
                                                    dirMiddleName: data[0].middleName,
                                                    dirLastName: data[0].lastName,
                                                    userName: data[0].email,
                                                    phone: data[0].telephoneno,
                                                    emailId: data[0].email,
                                                    postalCode: "900110",
                                                    city: "gwarinpa",
                                                    address: "Lagos Estate, Abuja",
                                                    countryOfResidence: "NG",
                                                    customerRiskRating: "3",
                                                    tier: "2",
                                                    accountNumber: data[0].telephoneno.substring(1),
                                                    dirDateOfBirth: `${splitValue[2]}/${splitValue[1]}/${splitValue[0]}`,
                                                    countryOfBirth: "NG",
                                                    parentWalletAlias: "",
                                                    password: data[0].telephoneno+data[0].telephoneno,
                                                    walletCategory: "parent",
                                                    remarks: "Passed"
                                                }

                                                console.log(merchantData)
                                                AddMerchantData(merchantData)
                                                .then((response) => {
                                                    console.log(response);
                                                    let dataPP = response.data;
                                                    console.log(dataPP)
                                                    console.log(dataPP.response_data)
                                                    if (dataPP.response_data.Data.error != null) {
                                                        Swal.fire({
                                                            icon: 'error',
                                                            title: 'Oops...',
                                                            text: dataPP.response_data.Data.error,
                                                        })

                                                        setIsLoading(false);
                                                    }
                                                    if (dataPP.response_message === "Merchant Details was successfully sent for wallet creation.") {
                                                        let usertype = accountType === 'Consumer' ? 'USER' : 'MERCHANT'
                                                        const searhDetails = {
                                                            "phone_number": data.phoneNumber1,
                                                            "user_type": usertype,
                                                            "channel_code": "APISNG"
                                                        }
                                                        GetUserByPhone(searhDetails)
                                                        .then((response) => {
                                                            const dataPPPp = response.data;
                                                            console.log(dataPPPp);
                                                            if (dataPPPp.response_message === "Successful Request") {
                                                                userDetailCtx.updateUserDetails(dataPPPp.response_data);
                                                                setIsLoading(false);
                                                            }
                                                        })
                                                        .catch((err) => {
                                                            Swal.fire({
                                                                icon: 'error',
                                                                title: 'Oops...',
                                                                text: err.message,
                                                            })

                                                            setIsLoading(false);
                                                        })
                                                }
                                                
                                            })
                                            }
                                        })
                                    }
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
            .catch((err) => {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.description,
                })

                setIsLoading(false);
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
                if(response.data.response_data.length === 0 || response.data.response_data === null) {
                     Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'BVN not valid',
                    })

                    setIsLoading(false);
                    return;
                }

                else{
                    var data = response.data.response_data;
                    console.log(data.phoneNumber1)
                    let usertype = accountType === 'Consumer' ? 'USER' : 'MERCHANT'
                    const searchParameter = {
                        "phone_number": data.phoneNumber1,
                        "user_type": usertype,
                        "channel_code": "APISNG"
                    }
                    GetUserByPhone (searchParameter)
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
                                text: "Your account is not found on our database would you want to create an account!",
                                icon: 'info',
                                showCancelButton: true,
                                confirmButtonText: 'Yes, create it!',
                                cancelButtonText: 'No, cancel!',
                                reverseButtons: true
                            })
                            
                            .then(result => {
                                if (result.isConfirmed) {
                                    console.log(data.dateOfBirth)
                                    let splitValue = data.dateOfBirth.split("-");
                                    let monthInt = new Date(`${splitValue[1]} 01 2000`).toLocaleDateString(`en`, {month:`2-digit`});
                                    let birthDate = `${splitValue[0]}/${monthInt}/${splitValue[2]}`;
                                    console.log(accountType);

                                    if (accountType === 'Consumer') {
                                        const user = {
                                            channelCode: "APISNG",
                                            uid: ninBvn.current.value,
                                            uidType: "BVN",
                                            reference: "NXG3877513HGTKJHGO",
                                            title: "",
                                            firstName: data.firstName,
                                            middleName: data.middleName,
                                            lastName: data.lastName,
                                            userName: data.email,
                                            phone: data.phoneNumber1,
                                            emailId: data.email,
                                            postalCode: "900110",
                                            city: data.stateOfResidence,
                                            address:  data.residentialAddress,
                                            countryOfResidence: "NG",
                                            tier: "2",
                                            accountNumber: data.phoneNumber1.substring(1),
                                            dateOfBirth: birthDate,
                                            countryOfBirth: data.nationality === "Nigeria" ? "NG" : "NG",
                                            password: data.phoneNumber1+data.phoneNumber1,
                                            remarks: "Passed",
                                            referralCode: data.email
                                        }

                                        console.log(user);
                                        AddConsumerData(user)
                                        .then((response) => {
                                            console.log(response);
                                            let dataPP = response.data;
                                            if (dataPP.response_message === "Successful Request") {
                                                let usertype = accountType === 'Consumer' ? 'USER' : 'MERCHANT'
                                                const searhDetails = {
                                                    "phone_number": data.phoneNumber1,
                                                    "user_type": usertype,
                                                    "channel_code": "APISNG"
                                                }
                                                GetUserByPhone(searhDetails)
                                                .then((response) => {
                                                    const dataPPP = response.data;
                                                    console.log(dataPPP);
                                                    if (dataPPP.response_message === "Successful Request") {
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

                                            setIsLoading(false);
                                        })
                                    }
                                    else{
                                        const swalWithBootstrapButtonss = Swal.mixin({
                                            customClass: {
                                                confirmButton: 'btn btn-warning text-white m-3',
                                                cancelButton: 'btn btn-danger m-3'
                                            },
                                            buttonsStyling: false
                                        })

                                        swalWithBootstrapButtonss.fire({
                                            title: 'Input propose business name and TIN (In comma seperated)',
                                            input: 'text',
                                            inputLabel: 'Your details',
                                            inputPlaceholder: 'AFFCBN HACKERTHONO,09898787676'
                                        })
                                        .then((response) => {
                                            if(response.isConfirmed){
                                                let splitString = response.value.split(",")
                                                console.log(splitString)

                                                const merchantData = {
                                                    channelCode: "APISNG",
                                                    reference: "01372599-0001",
                                                    uid: splitString[1],
                                                    uidType: "TIN",
                                                    businessName: splitString[0],
                                                    title: "",
                                                    dirBvn: ninBvn.current.value,
                                                    dirFirstName: data.firstName,
                                                    dirMiddleName: data.middleName,
                                                    dirLastName: data.lastName,
                                                    userName: data.email,
                                                    phone: data.phoneNumber1,
                                                    emailId: data.email,
                                                    postalCode: "900110",
                                                    city: data.stateOfResidence,
                                                    address:  data.residentialAddress,
                                                    countryOfResidence: "NG",
                                                    customerRiskRating: "3",
                                                    tier: "2",
                                                    accountNumber: data.phoneNumber1.substring(1),
                                                    dirDateOfBirth: birthDate,
                                                    countryOfBirth: "NG",
                                                    parentWalletAlias: "",
                                                    password: data.phoneNumber1+data.phoneNumber1,
                                                    walletCategory: "parent",
                                                    remarks: "Passed"
                                                }

                                                console.log(merchantData)
                                                
                                                AddMerchantData(merchantData)
                                                .then((response) => {
                                                    console.log(response);
                                                    let dataPP = response.data;
                                                    console.log(dataPP)
                                                    console.log(dataPP.response_data)
                                                    if (dataPP.response_data.Data.error != null) {
                                                        Swal.fire({
                                                            icon: 'error',
                                                            title: 'Oops...',
                                                            text: dataPP.response_data.Data.error,
                                                        })

                                                        setIsLoading(false);
                                                    }
                                                    if (dataPP.response_message === "Merchant Details was successfully sent for wallet creation.") {
                                                        let usertype = accountType === 'Consumer' ? 'USER' : 'MERCHANT'
                                                        const searhDetails = {
                                                            "phone_number": data.phoneNumber1,
                                                            "user_type": usertype,
                                                            "channel_code": "APISNG"
                                                        }
                                                        GetUserByPhone(searhDetails)
                                                        .then((response) => {
                                                            const dataPPPp = response.data;
                                                            console.log(dataPPPp);
                                                            if (dataPPPp.response_message === "Successful Request") {
                                                                userDetailCtx.updateUserDetails(dataPPPp.response_data);
                                                                setIsLoading(false);
                                                            }
                                                        })
                                                        .catch((err) => {
                                                            Swal.fire({
                                                                icon: 'error',
                                                                title: 'Oops...',
                                                                text: err.message,
                                                            })

                                                            setIsLoading(false);
                                                        })
                                                }
                                                
                                            })
                                            .catch((err) => {
                                                Swal.fire({
                                                    text: err.message,
                                                    icon: "error"
                                                })
                                            })
                                            
                                            }
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                text: err.message,
                                            })
                                            setIsLoading(false);
                                        })
                                    }
                                }
                            })
                            .catch((err) => {
                                console.log(err)
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: err.message,
                                })
                                setIsLoading(false);
                            })
                        }
                    })
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.error,
                })
                    console.log(err)
                 setIsLoading(false);
            })
        }
    }

    const loginUser = (userDetails) => {
        console.log("alay");
    }

    const getAccoutBalance = () => {
        const token = window.localStorage.getItem("token");
        if(token === null || token === undefined || token === "") {
            const userLoginDetails = {

            }
            loginUser(userLoginDetails);
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
                                        {   
                                            userDetailCtx.userDetails != null && 
                                            <p style={{padding:'3px',fontSize: "14px", borderRadius:"3px",  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'}} className="pull-right">
                                                <b> Account Balance: X X X X </b>
                                                <button onClick={getAccoutBalance} className="btn "><i class="fa fa-eye" aria-hidden="true"></i></button> 
                                            </p>
                                        }
                                        <h2><b className="">USSD *977*1#</b> </h2>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <p className="mr-2">Authenticate with </p> 
                                                <input disabled={userDetailCtx.userDetails != null} id="NIN" value="NIN" name="auth_means" type="radio"/> <label style={{marginRight: '8px'}}> NIN</label>
                                                <input disabled={userDetailCtx.userDetails != null} id="BVN" value="BVN" name="auth_means" type="radio"/> <label> BVN</label>
                                            </div>
                                            <div className="col-lg-6 col-md-12 mb-3">
                                                <p className="mr-2">Account type</p> 
                                                <input disabled={userDetailCtx.userDetails != null} id="Consumer" value="Consumer" name="account_type" type="radio"/> <label style={{marginRight: '8px'}}> Consumer</label>
                                                <input disabled={userDetailCtx.userDetails != null} id="Merchant" value="Merchant" name="account_type" type="radio"/> <label> Merchant</label>
                                            </div>
                                        </div>
                                        <form onSubmit={ProceedAuthHandler}>
                                            <div className="form-group"><input ref={ninBvn} disabled={userDetailCtx.userDetails != null} required type="text" className="form-control"
                                                    placeholder="NIN / BVN" /></div>
                                            { isLoading ? <section>
                                                <button disabled >Loading...</button>
                                            </section> :
                                            <section>
                                                {   userDetailCtx.userDetails != null ? "" :
                                                    <button type="submit"><i className="fa fa-phone"></i> Dial</button>
                                                }
                                                
                                            </section>
                                            }
                                        </form>
                                    </div>
                                    {   userDetailCtx.userDetails &&
                                        <div className="login-form mt-3" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                            <h2 style={{fontSize:"25px"}}><b className="">USSD *977*2*AMOUNT#</b></h2> 
                                            <p className="mb-4">Deposit</p>
                                            <form >
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <p className="text-center" style={{paddingTop:'15px',lineHeight:'15px',height:'50px', margin:'0px' ,fontSize: "14px", borderRadius:"3px",  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'}} ><b>* 9 9 7 * 2</b></p> 
                                                    </div>
                                                    <div className="col-md-8">
                                                         <div className="form-group"><input required type="text" className="form-control"
                                                            placeholder="Amount" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1">
                                                         <p style={{paddingTop:'15px',lineHeight:'15px',height:'50px', margin:'0px' ,fontSize: "14px", borderRadius:"3px",  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'}} ><b>#</b></p> 
                                                    </div>
                                                </div>
                                                
                                                { isLoading ? <section>
                                                    <button disabled >Loading...</button>
                                                </section> :
                                                    <button type="submit"><i className="fa fa-phone"></i> Dial</button>
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
                                                    {userDetailCtx.userDetails.first_name} {userDetailCtx.userDetails.dir_first_name}
                                                </div>
                                            </div>
                                            <div className="form-group m-3">
                                                <h3 style={{color:'#401c69'}}>Last name:</h3>
                                                <div className="p-4" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                    {userDetailCtx.userDetails.last_name} {userDetailCtx.userDetails.dir_last_name}
                                                </div>
                                            </div>
                                            <div className="form-group m-3">
                                                <h3 style={{color:'#401c69'}}>Wallet Address:</h3>
                                                <div className="p-4" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                    {userDetailCtx.userDetails.wallet_info && userDetailCtx.userDetails.wallet_info.wallet_address}
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