import {put,takeEvery,call,all} from 'redux-saga/effects'
import {Api} from'./api'

export function* fetchList(){
    try{
        const data = yield call(Api.list)  
        yield put({type:'UPDATE_LIST',list:data.products})
    }
    catch(e){
        console.log('error',e)
    }
}

export function* watchFetchList(){
    yield takeEvery('GET_LIST',fetchList)
}


export function* rootSaga(){
    yield all([
        watchFetchList()
    ])
}

