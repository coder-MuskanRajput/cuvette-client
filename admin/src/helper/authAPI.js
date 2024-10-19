// authApi.js
import { loginSuccess, verifyOtpSuccess } from '../store/slice/authSlice';
import { insertError, loadingStart, loadingStop } from '../store/slice/interfaceSlice';
import axios, { setToken } from '../utils/api';

// User Registration API
export const getUserRegisterAPI = async (dispatch, formData, toast) => {
    dispatch(loadingStart());
    try {
        const response = await axios.post('/auth/register', formData);
        dispatch(loadingStop());
        toast.success(`your mobile otp is:- ${response?.data?.mobileOtp}`)
        return response.data.success;
    } catch (err) {
        dispatch(insertError(err.response?.data?.message || 'Registration failed'));
        dispatch(loadingStop());
        return false;
    }
};

// Email OTP Verification API
export const getEmailVerifyOTPAPI = async (dispatch, formData) => {
    dispatch(loadingStart());
    try {
        const response = await axios.post('/auth/verify-email', formData);
        dispatch(verifyOtpSuccess(response.data.user));
        dispatch(loadingStop());
        if (response?.data?.token) {
          
          await setToken(response?.data?.token?.token);
          getUserDetailsAPI()

        }
        return response.data.success;
    } catch (err) {
        dispatch(insertError(err.response?.data?.message || 'Email verification failed'));
        dispatch(loadingStop());
        return false;
    }
};

// SMS OTP Verification API
export const getSmsVerifyOTPAPI = async (dispatch, formData) => {
    dispatch(loadingStart());
    try {
        const response = await axios.post('/auth/verify-sms', formData);
        dispatch(verifyOtpSuccess(response.data.user));
        dispatch(loadingStop());
        if (response?.data?.token) {
          
          await setToken(response?.data?.token?.token);
          getUserDetailsAPI()

        }
        return response.data.success;
    } catch (err) {
        dispatch(insertError(err.response?.data?.message || 'SMS verification failed'));
        dispatch(loadingStop());
        return false;
    }
};

// User Login API
export const getUserLoginAPI = async (dispatch, formData) => {
    dispatch(loadingStart());
    try {
        const response = await axios.post('/auth/login', formData);
        dispatch(loginSuccess(response.data.user));
        if (response.data.success) {
            setToken(response.data.token);
        }
        dispatch(loadingStop());
        return response.data.user;
    } catch (err) {
        dispatch(insertError(err.response?.data?.message || 'Login failed'));
        dispatch(loadingStop());
        return false;
    }
};

// Get User Details API
export const getUserDetailsAPI = async (dispatch) => {
    try {
        const response = await axios.get('/auth/user');
        console.log(response)
        if (response.data.success) {
            dispatch(loginSuccess(response.data.user));
        }
    } catch (err) {
      console.log(err)
        dispatch(insertError(err.response?.data?.message || 'Failed to fetch user details'));
    }
};

export const  postJob = async (dispatch, formData)=>{
try {
        const response = await axios.post('/job/jobs', formData);
        console.log(response)
        if (response.data.success) {
            dispatch(loginSuccess(response.data.user));
        }
    } catch (err) {
      console.log(err)
        dispatch(insertError(err.response?.data?.message || 'Failed to fetch user details'));
    }
}

