import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    loading:false,
    error:''
}

const interFaceSlice = createSlice({
    name:'interface',
    initialState,
    reducers :{
        loadingStart(state){
            state.loading = true;
        },
        loadingStop(state){
            state.loading = false;
        },
        insertError(state, action){
            state.loading  = false;
            state.error = action.payload;
        },
        removeError(state){
            state.loading  = false;
            state.error = '';
        }
    }
});


export const { 
    loadingStart,
    loadingStop,
    insertError,
    removeError
} = interFaceSlice.actions;

export default interFaceSlice.reducer;