import axios from "axios";

const BASE_URL = process.env.AFF_BASE_URL;
const ClientId = process.env.Client_ID;
const userName = window.localStorage.getItem('username');
const userId = window.localStorage.getItem('userId');
const token = window.localStorage.getItem('accessToken');

const controllerName = "Notification";

const header = {
    'ClientId': ClientId,
    'Content-Type': 'application/json'
}

const AddConsumer= async ( conversationId: string) => {

}