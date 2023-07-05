import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface UserState {
    email?:string | null,
    id?:string | null,
    isAuth?:boolean | null
}

const initialState:UserState = {
    email:undefined,
    id:null,
    isAuth:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser(state, action:PayloadAction<{email?:string | null, id?:string, isAuth:boolean}>){
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.isAuth= action.payload.isAuth
        },
        removeUser(state){
            state.email = null;
            state.id = null;
        }
    }
})

export const {setUser, removeUser} = userSlice.actions
export default userSlice.reducer