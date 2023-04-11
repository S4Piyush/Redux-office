import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { editreducer, tempreducer } from './Reducer/reducer';

const data = [thunk];

const rootReducer = combineReducers({
    fakeData: tempreducer,
    email: editreducer,

});

const store = createStore(
    rootReducer,
    applyMiddleware(...data)
);

export default store;