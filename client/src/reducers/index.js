import { combineReducers } from 'redux';

import posts from './posts';
import bugs from './bugs';

export default combineReducers ({posts, bugs});