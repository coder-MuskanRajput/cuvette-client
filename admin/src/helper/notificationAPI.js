import axios from '../utils/api';

export const sendNotificationHandler = async (dispatch, formData)=>{
    try {
        const {data} = await axios.post('/notification/send', formData);
        return data.message
    } catch (error) {
        console.log(err.response?.data?.message)
        return err.response?.data?.message
    }
}
