import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';
import rectFormReducer from './rectFormReducer';
import newRectFormReducer from './newRectFormReducer';
import roundFormReducer from './roundFormReducer';
import newRoundFormReducer from './newRoundFormReducer';
import ingredientsReducer from './ingredientsReducer';
import selectedShapeReducer from './selectedShapeReducer';
import selectedNewShapeReducer from './selectedNewShapeReducer';


const subreducers = {
    rectForm: rectFormReducer,
    newRectForm: newRectFormReducer,
    roundForm: roundFormReducer,
    newRoundForm: newRoundFormReducer,
    ingredients: ingredientsReducer,
    selectedShape: selectedShapeReducer,
    selectedNewShape: selectedNewShapeReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools()
);

export default store;