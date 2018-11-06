import authentication from './authentication';
import dutyList from './dutyList';

import { combineReducers } from 'redux';

export default combineReducers({
    authentication,
    dutyList
});