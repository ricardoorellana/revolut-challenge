
import { createSlice } from '@reduxjs/toolkit' 
import {fetchUsers333} from './userSlice'

const currenciesSlice  =  createSlice({
    name:'currencies',
    initialState: [],
    reducers: {
        cosaUna:(state,action)=>{  state.push(action.payload)},
        otraCosa :  (state,{payload})=>{   return  {...state, newData: payload}},
        fetchUsers : ( s, a)=>{ return a.payload  }
    },
    extraReducers:{
        fetchUsers333 :  ()=>{}
    }
});

const fetchCurrencies = (state, action) => { return {...state, }}

export const  { coseUna, otraCosa,fetchUsers }  = currenciesSlice.actions

export default currenciesSlice.reducer

export const fetchUserThunk =()=> (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => dispatch(fetchUsers(json)))
}