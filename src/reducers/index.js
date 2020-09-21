import { combineReducers } from 'redux';
import message from './messages';
import users from './users';

const chat = combineReducers({
    message,
    users
});

export default chat;