import {
    DUTY_LIST, DUTY_SEARCH
} from './ActionTypes';

export function dutyListRequest(list){
    return (dispatch)=>{
        dispatch(dutyList(list));
    }
}

export function dutyList(list){
    return {
        type : DUTY_LIST,
        dutyList: list
    };
}


export function dutyListSearchRequest(duty){
    return (dispatch)=>{
        dispatch(dutyListSearch(duty))
    }
}

export function dutyListSearch(duty){
    // do something
    return{
        type : DUTY_SEARCH,
        searchName : duty
    }
}