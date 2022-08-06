import axios from "axios";
import { ConsumerCreateDto } from "./Models/ConsumerCreateDto";

const BASE_URL = 'https://rgw.k8s.apis.ng/centric-platforms/uat/CreateConsumer';
const userName = window.localStorage.getItem('username');
const userId = window.localStorage.getItem('userId');
const token = window.localStorage.getItem('accessToken');

const controllerName = "Notification";

const header = {
    'Content-Type': 'application/json',
    'ClientId' : 'c9166ae6d644aa43bc3ddae4c5969300'
}

const AddConsumerData = async ( consumerCreateDto: ConsumerCreateDto) => {
     const response = await axios({
        method : "POST",
        url: `${BASE_URL}`,
        data: consumerCreateDto,
        headers: header
     })

    return response;
}

export { AddConsumerData } 