import { allUsersData } from '../store/slice/userDataSlice';
import axios from '../utils/api'

export const fetchAllUsers = async(dispatch) =>{
    try {
        const {data} = await axios.get('auth/users');
        dispatch(allUsersData(data.users));
    } catch (error) {
        throw error
    }
}