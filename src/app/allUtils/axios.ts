import axios from "axios";

export let regPost = async (url:string, body?:any, headers?:any) => {
    try {
        let res = await axios.post('http://31.128.42.26/auth/registration/' + url, body, headers)
        return res.data
    } catch (error) {
        console.log(error);

    }
}