import React, { useRef, useState, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import AppCtx from '../context/UserContext'
import { GetUserByPhone } from "../services/auth/AuthenticationResource";
import Select from 'react-select';

function Agent() {

    const [isLoading, setIsLoading] = useState(false);
    const userDetailCtx = useContext(AppCtx);
    const customerPhoneNumber = useRef();
    const [selectedOption, setSelectedOption] = useState("ENAIRA");

    const options = [
        { value: 'ENAIRA', label: 'ENAIRA' },
        { value: 'ACCESS', label: 'ACCESS BANK' },
        { value: 'FIRST BANK', label: 'FIRST BANK' },
        { value: 'GT BANK', label: 'GT BANK' },
        { value: 'ECO BANK', label: 'ECO BANK' },
        { value: 'POLARIS BANK', label: 'POLARIS BANK' },
        { value: 'DIAMOND BANK', label: 'DIAMOND BANK' },
    ];

    const agentForm = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const searchParameter = {
            "phone_number": customerPhoneNumber.current.value,
            "user_type": "USER",
            "channel_code": "APISNG"
        }

        GetUserByPhone(searchParameter)
        .then((response) => {
            const dataP = response.data;
            if (dataP.response_message === "Successful Request") {
                userDetailCtx.updateAgencyBankingCustomerDetails(dataP.response_data);

                const swalWithBootstrapButtonss = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-warning text-white m-3',
                        cancelButton: 'btn btn-danger m-3'
                    },
                    buttonsStyling: false
                })

                swalWithBootstrapButtonss.fire({
                    title: 'Input Amount',
                    input: 'text',
                    inputLabel: 'Input Amount',
                    inputPlaceholder: '5000'
                })

                .then((response) => {
                     if(response.isConfirmed){
                        const amount = response.value;
                        if(amount === 0 || amount === "" || amount === null || amount === undefined) {
                            setIsLoading(false);
                            return Swal.fire('Amount value is incorrect');
                        }

                         const swalWithBootstrapButtonsss = Swal.mixin({
                            customClass: {
                                confirmButton: 'btn btn-warning text-white m-3',
                                cancelButton: 'btn btn-danger m-3'
                            },
                            buttonsStyling: false
                        })

                        swalWithBootstrapButtonsss.fire({
                            title: 'Input pin',
                            input: 'text',
                            inputLabel: 'Input pin',
                            inputPlaceholder: '1234'
                        })

                        .then((response) => {
                            if(response.isConfirmed){
                                Swal.fire({
                                    icon:'success',
                                    text: `${amount} sent successfully`,
                                })
                            }
                        })
                     }
                })
                            
                setIsLoading(false);
            }
            else{
                Swal.fire('Account associated with this phone number not found');
                setIsLoading(false);
            }
        })
        

    }

    return(
        <section>
            <div className="banner-wrapper-area">
                <div className="container">
                    <div className="row align-items-center m-0">
                    <div className="col-xl-5 col-lg-6 col-md-12 p-0">
                        <div className="banner-wrapper-content">
                        <h1>A Trusted and Secure Agency Integration Network</h1>
                        <form data-toggle="validator"><input type="email" className="input-newsletter"
                            placeholder="Enter your Email or Phone" name="EMAIL" required autoComplete="off" />
                            <Link to={'/'}><button type="submit" style={{backgroundColor:'#16780d'}}>Home <i className="fa fa-arrow"></i></button></Link>
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
             <section>
             
             <div className="profile-authentication-area">
                <h3 className="text-center p-3" style={{color:'#16780d'}}>Agency Banking</h3>
                <div className="d-table">
                    <div className="mt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 " >
                                    <div className="login-form" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                        <h3><b className="">Agency</b> </h3> 
                                        <form onSubmit={agentForm}>
                                            <div className="row">
                                                <div className="form-group">
                                                     <div><input ref={customerPhoneNumber} disabled={userDetailCtx.clientDetails != null} required type="text" className="form-control"
                                                        placeholder="Customer Phone Number" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                     <div>
                                                        <label><b>Bank</b></label>
                                                        <Select
                                                            options={options}
                                                            defaultValue={selectedOption}
                                                            onChange={setSelectedOption}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                           
                                            { isLoading ? <section>
                                                <button style={{backgroundColor:'#126b0a'}} disabled >Dailing...</button>
                                                </section> :
                                                <section>
                                                    {   userDetailCtx.clientDetails != null ? "" :
                                                        <button style={{backgroundColor:'#16780d'}} type="submit"><i className="fa fa-phone"></i> Dial</button>
                                                    }
                                                </section>
                                            }
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    {
                                        userDetailCtx.clientDetails != null ?
                                        <section>
                                            <h4 className="text-center">Account Details</h4>
                                            <div className="form-group m-3">
                                                <h3 style={{color:'#16780d'}}>First name:</h3>
                                                <div className="p-4" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                    {userDetailCtx.clientDetails.first_name} {userDetailCtx.clientDetails.dir_first_name}
                                                </div>
                                            </div>
                                            <div className="form-group m-3">
                                                <h3 style={{color:'#16780d'}}>Last name:</h3>
                                                <div className="p-4" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                    {userDetailCtx.clientDetails.last_name} {userDetailCtx.clientDetails.dir_last_name}
                                                </div>
                                            </div>
                                            <div className="form-group m-3">
                                                <h3 style={{color:'#16780d'}}>Wallet Alias:</h3>
                                                <div className="p-4" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                    {userDetailCtx.clientDetails.wallet_info && userDetailCtx.clientDetails.wallet_info.wallet_alias}
                                                </div>
                                            </div>
                                            <div className="form-group m-3">
                                                <h3 style={{color:'#16780d'}}>Account Number:</h3>
                                                <div className="p-4" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                    {userDetailCtx.clientDetails.account_number}
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

        </section>
    )
}

export default Agent;