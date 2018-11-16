import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState={
    dutyList : [
        
    ],
    dutySearch : '',
    dutySelectName : '',
    dutyMode : true,
}

export default function dutyList(state, action){
    if(typeof state == "undefined")
        state = initialState;

    switch(action.type){
        case types.DUTY_LIST:
            return update(state, {
                dutyList : {$set : action.dutyList}
            })

        case types.DUTY_SEARCH:
            return update(state, {
                dutySearch : {$set : action.searchName}
            })
        
        case types.DUTY_SELECT :
            return update(state, {
                dutySelectName : {$set : action.selectName}
            })
        case types.DUTY_RESET : 
            return update(state, {
                dutyMode : {$set : action.selectMode}
            })
        default : 
            return state;
    }
}

