import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface UserState {
    email?:string | null,
    token?:string | null,
    id?:string | null,
    isAuth?:boolean | null
}

const initialState:UserState = {
    email:undefined,
    token:null,
    id:null,
    isAuth:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser(state, action:PayloadAction<{email?:string | null, id?:string, token?:string, isAuth?:boolean}>){
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.token = action.payload.token;
            state.isAuth= action.payload.isAuth
        },
        removeUser(state){
            state.email = null;
            state.id = null;
            state.token = null;
        }
    }
})

export const {setUser, removeUser} = userSlice.actions
export default userSlice.reducer