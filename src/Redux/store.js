import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { webSinupData } from './Reducer/loadingAction';
import { editreducer, tempreducer } from './Reducer/reducer';

const data = [thunk];

const rootReducer = combineReducers({
    fakeData: tempreducer,
    email: editreducer,
    sinup: webSinupData
});

const store = createStore(
    rootReducer,
    applyMiddleware(...data)
);

export default store;