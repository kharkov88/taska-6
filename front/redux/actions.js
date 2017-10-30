const GET_LIST = "GET_LIST" // получить список с сервера
export function getList(){
    return {
        type:GET_LIST
    }
}
const UPDATE_LIST = "UPDATE_LIST" // обновить список в сторе
export function updateList(list){
    return {
        type:UPDATE_LIST,
        list
    }
}
const UPDATE_ITEM = "UPDATE_ITEM" 
export function updateItem(item){
    return {
        type:UPDATE_ITEM,
        payload:item
    }
}
const CHANGE = "CHANGE"
export function change(item){
    return {
        type:CHANGE,
        payload:item
    }

}
const GET_ACTIVE_ITEM = 'GET_ACTIVE_ITEM' // при выборе продукта запомнить выбранный id
export function getActiveItem(id){
    return {
        type:GET_ACTIVE_ITEM,
        id
    }
}

const ADD_ITEM = "ADD_ITEM" //добавить новый в базу
export function addItem(item){
    return {
        type:ADD_ITEM,
        item
    }
}
