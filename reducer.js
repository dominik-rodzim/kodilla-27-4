import { combineReducers } from 'redux';
import { comments } from './comments';
import { users } from './user';

const app = combineReducers({
  comments,
  users
});