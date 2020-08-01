import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';

const persistConfig = {
  key: 'iW7EdAJYnYyUAUX6TQjm',
  storage,
  whitelist: ['cart'],
};
const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
