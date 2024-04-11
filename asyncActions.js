const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk')
const axios = require('axios')
 
const initialState = {
    loading:false,
    users:[],
    error:'',
}
 
const FEATCH_USERS_REUESTED = 'FEATCH_USERS_REUESTED'
const FEATCH_USERS_SUCCEEDED='FEATCH_USERS_SUCCEEDED'
const FEATCH_USERS_FAILED='FEATCH_USERS_FAILED'
 
const featchUsersRequested = ()=>{
    return{
        type:FEATCH_USERS_REUESTED,
    }
}
 
const featchUsersSuccess=(users)=>{
    return{
        type:FEATCH_USERS_SUCCEEDED,
        payload:users,
    }
}
 
const featchUsersFailuer=(error)=>{
    return{
        type:FEATCH_USERS_FAILED,
        payload:error,
    }
}
 
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case FEATCH_USERS_REUESTED:
            return{
                ...state,
                loading : true,
            }
        case FEATCH_USERS_SUCCEEDED:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case FEATCH_USERS_FAILED:{
            return{
                loading:false,
                users:[],
                error:action.payload,
            }
        }
    }
}
 
 
const fetchUsers = ()=>{
    dispatch(featchUsersRequested())
return function(dispatch){
    axios.get('https://jsonplaceholder.typicode.com/users').then((responce)=>{
        const users = responce.data.map((user)=>user.id)
        dispatch(featchUsersSuccess(users))
    }).catch(error=>{
        dispatch(featchUsersFailuer(error.message))
    })
}
}
 
const store = createStore(reducer,applyMiddleware(thunkMiddleware))
 
store.subscribe(()=>{
    console.log(store.getState())
})
 
store.dispatch(fetchUsers())