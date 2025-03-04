// import axios from "axios"; 

// const  BaseUrl = "https://api.themoviedb.org/3";

// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
// const headers =  {
//     Authorization: "bearer " + TMDB_TOKEN,
// };

// export const fetchDataFromAPI = async (url , params)=> {
//     try{
// const  Base_Url = "https://api.themoviedb.org/3";
//         const {data}  = axios.get(BaseUrl + url , {
//             headers,
//             params
//         })
//     }
//     catch(error){
//         console.log(error);
//         return error;
//     }
// }


import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
