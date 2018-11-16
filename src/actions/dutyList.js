import {
    DUTY_LIST,
    DUTY_SEARCH,
    DUTY_SELECT,
    DUTY_RESET,
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

export function dutyListSelectRequest(name){
    return (dispatch)=>{
        dispatch(dutyListSelect(name))
    }
}

export function dutyListSelect(name){
    return{
        type : DUTY_SELECT,
        selectName : name
    }
}

export function dutyListResetRequest(mode){
    return (dispatch)=>{
        dispatch(dutyReset(mode));
    }
}

export function dutyReset(mode){
    return {
        type : DUTY_RESET,
        selectMode : mode
    }
}