import { createSlice } from "@reduxjs/toolkit";

interface canteenData{
    canteenId:string | null,
    canteenName:string | null,
    canteenemail:string | null
}

const initialState:canteenData ={
    canteenId:null,
    canteenName:null,
    canteenemail:null
}

const canteenInfo = createSlice({
    name:'canteenInfo',
    initialState,
    reducers:{
        addCanteenInfo:(state,action)=>{
            return action.payload
        },
        canteenLogout:()=>{
            return undefined
        }
    }
});

export const {addCanteenInfo,canteenLogout}= canteenInfo.actions;
export default canteenInfo.reducer;