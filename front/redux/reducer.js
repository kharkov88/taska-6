import {combineReducers} from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers(
    {
        active,
        products:getList,
        form:reduxFormReducer
    }
)
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
        case 'ADD_ITEM':
        return {}
        default:return state
    } 
}
