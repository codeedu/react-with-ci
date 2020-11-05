import axios from 'axios';

const apiKey = 

export const cryptoHttp = axios.create{
    baseURL: 'https://min-api.cryptocompare.com/data',
    headers: {
        authorization: `Apikey ${}`
    }
}