import { insertError, loadingStart, loadingStop } from '../store/slice/interfaceSlice';
import { insertTemplates } from '../store/slice/templatesSlice';
import axios from '../utils/api';

export const fetchTemplateList = async (dispatch)=>{
    dispatch(loadingStart())
    try {
        const {data} = await axios.get('/templates/all-templates');
        dispatch(insertTemplates(data.templates));
        dispatch(loadingStop());
    } catch (error) {
     dispatch(insertError(error.response?.data?.message));   
     return false
    }
};

export const  deleteEmailTemplateAPI = async (dispatch, id)  =>{
    dispatch(loadingStart())
    try {
        const {data} = axios.delete(`/templates/template/${id}`);
        dispatch(loadingStop())
        return data
    } catch (error) {
        dispatch(insertError(error?.response?.data?.message));
        return error?.response?.data
    }
};

export const createTemplateAPI = async (dispatch, formData) =>{
    dispatch(loadingStart());
    try {
        const {data} = await axios.post('/templates/create-template',formData);
        dispatch(loadingStop());
        return data
    } catch (error) {
        dispatch(insertError(error?.response?.data?.message));
        throw error.response?.data
    }
}

export const updateTemplate = async (dispatch,formData)=>{
    dispatch(loadingStart())
    try {
        const {data} = await axios.put('/templates/update-template',formData);
        dispatch(loadingStop());
        return data
    } catch (error) {
        dispatch(loadingStop());
        throw error
    }
}

export const getTemplateDetails = async(dispatch, formData)=>{
    dispatch(loadingStart())
    try {
        const {data} = axios.patch('/template/search-template',formData);
        dispatch(loadingStop());
        return data
    } catch (error) {
        dispatch(loadingStop());
        throw error?.response?.data?.message;
    }
}