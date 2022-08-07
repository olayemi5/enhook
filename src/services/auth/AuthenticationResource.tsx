import axios from "axios";
import { ConsumerCreateDto } from "./Models/ConsumerCreateDto";

const BASE_URL = 'https://rgw.k8s.apis.ng/centric-platforms/uat/enaira-user/CreateConsumerV2';
const userName = window.localStorage.getItem('username');
const userId = window.localStorage.getItem('userId');
const token = window.localStorage.getItem('accessToken');

const controllerName = "Notification";

const header = {
    'Content-Type': 'application/json',
    'ClientId' : '9430f0ac65b98bba646edaa2b9779b87'
}

const CreateHeader = {
   'Content-Type': 'application/json',
   'ClientId' : '21b1503716b6ff143b6609b7a20c5ef4'
}

const UserHeader = {
    'Content-Type': 'application/json',
    'ClientId' : 'c9166ae6d644aa43bc3ddae4c5969300'
}

const AddConsumerData = async ( consumerCreateDto: any) => {
     const response = await axios({
        method : "POST",
        url: `${BASE_URL}`,
        data: consumerCreateDto,
        headers: CreateHeader
     })

    return response;
}

const ConsumerLogin = async ( consumerLogin: any) => {
     const response = await axios({
        method : "POST",
        url: `https://rgw.k8s.apis.ng/centric-platforms/uat/CAMLLogin`,
        data: consumerLogin,
        headers: header
     })

    return response;
}

const GetUserByPhone = async (userDetails: any) => {
   const response = await axios({
        method : "POST",
        url: `https://rgw.k8s.apis.ng/centric-platforms/uat/enaira-user/GetUserDetailsByPhone`,
        data: userDetails,
        headers: UserHeader
     })

     return response;
}

const GetDetailsByNIN = async (searchParams: any) => {
   const response = await axios({
        method : "POST",
        url: `https://rgw.k8s.apis.ng/centric-platforms/uat/customer/identity/NINValidationByNIN`,
        data: searchParams,
        headers: header
     })

     return response;
}

const GetDetailsByBVN = async (searchParams: any) => {
   const response = await axios({
        method : "POST",
        url: `https://rgw.k8s.apis.ng/centric-platforms/uat/customer/identity/BVN`,
        data: searchParams,
        headers: header
     })

     return response;
}

export { AddConsumerData, ConsumerLogin, GetUserByPhone, GetDetailsByNIN ,GetDetailsByBVN} 