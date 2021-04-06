import axios from 'axios';

export const getWebService = async (url) => {
    return await axios.get(url);
};