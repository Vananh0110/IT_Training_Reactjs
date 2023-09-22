import { createStore, combineReducers } from 'redux';
import filtersReducer from '../reducers/reducers';

const rootReducer = combineReducers({
    filters: filtersReducer,
  });
  
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  export default store;