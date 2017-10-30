import {combineReducers} from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers(
    {
        active,
        products:getList,
        changing,
        form:reduxFormReducer
    }
)
function changing(state={},{type,payload}){
    if(type=='CHANGE')return payload[0]
    return state
}
function active(state={},action){
    if(action.type=='GET_ACTIVE_ITEM'){
        return action.id
    }
    return state
}
function getList(state={products:[]},action){
    switch(action.type){
        case 'UPDATE_LIST':
        return action.list
        case 'UPDATE_ITEM':
        let {id} = action.payload
        console.log("state::",state)
        return state.map(item=>{
            console.log("item------",item)
            if(item.id==id)return action.payload 
            return  item
        })            
        
        case 'ADD_ITEM':
        return {}
        default:return state
    } 
}
