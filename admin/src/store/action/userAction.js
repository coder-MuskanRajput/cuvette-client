import axios from "../../utils/api"
import { loginSuccess } from "../slice/authSlice";


export const asyncFetchUser = ()=> async(dispatch)=>{
    try {
        const {data} = await axios.get('/auth');
        dispatch(loginSuccess(data?.user));
    } catch (error) {
        console.log(error);
    };
};