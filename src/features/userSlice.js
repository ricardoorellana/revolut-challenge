
import { createSlice } from '@reduxjs/toolkit'

const currenciesSlice  =  createSlice({
name:'currencies',
initialState:[],
reducers: {
    cosaUna:(state,action)=>{  state.push(action.payload)},
    otraCosa :  (state,{payload})=>{   return  {...state, newData: payload}},
    fetchUsers : ( s, a)=>{ return a.payload  },
    fetchUsers333 : ( s, a)=>{ return a.payload  },
},
extraReducers:{
    
}
 
})

export default   currenciesSlice.reducer

export const  { coseUna, otraCosa,fetchUsers,fetchUsers333 }  = currenciesSlice.actions

export const fetchUserThunk =()=> (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => dispatch(fetchUsers(json)))

}