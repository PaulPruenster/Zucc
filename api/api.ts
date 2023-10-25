import axios, { AxiosResponse, AxiosError } from 'axios';
import { LoginRequest, TickRequest } from './requestTypes';
import { Boulder, LoginResponse } from './responseTypes';

// const baseUrl = 'http://10.0.0.210:3301'
const baseUrl = 'http://10.0.0.208:3301'
let token = ""

function handleErrors(error: AxiosError) {
    if (error.response) {
        console.error('Request failed with status code:', error.response.status);
    } else {
        console.error('Request failed:', error.message);
    }
}

function login(req: LoginRequest) {
    return new Promise((res, rej) => {
        axios.post(baseUrl + '/login', req, { timeout: 2000 })
            .then((response: AxiosResponse<LoginResponse>) => {
                console.log('JWT TOKEN:', response.data.token);
                token = response.data.token
                res(response.data)
            })
            .catch((error: AxiosError) => {
                handleErrors(error);
                rej()
            });
    })
}

export default {
    login
}