import axios from 'axios';

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params : {
        api_key : "fa54d15a0a12793c778587dd19fa690f",
        language : "ko-KR",
    },
});

export default instance;