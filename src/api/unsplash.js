import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ucoT42p043DA9tYM09JUPvAYBwclD4IMLPOt_o_nZ0A'
    }
})