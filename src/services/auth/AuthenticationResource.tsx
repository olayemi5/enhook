import axios from "axios";
import { ConsumerCreateDto } from "./Models/ConsumerCreateDto";

const BASE_URL = process.env.AFF_BASE_URL;
const ClientId = process.env.Client_ID;
const userName = window.localStorage.getItem('username');
const userId = window.localStorage.getItem('userId');
const token = window.localStorage.getItem('accessToken');

const controllerName = "Notification";

const header = {
    
    'Content-Type': 'application/json'
}

const AddConsumer = async ( consumerCreateDto: ConsumerCreateDto) => {
     const response = await axios({
        method : "POST",
        url: `BASE_URL`,
        data: consumerCreateDto,
        headers: header
     })

    return response;
}