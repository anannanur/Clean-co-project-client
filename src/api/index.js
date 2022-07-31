import axios from 'axios';

const fetcher = axios.create({
    baseURL: 'https://some-domain.com/api/',
});

export default fetcher;