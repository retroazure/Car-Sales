import { combineReducers } from 'redux';
import { featuresReducer} from './featuresReducer.js';
import { priceReducer } from './priceReducer.js'

export default combineReducers({
    featuresReducer, // same as featuresReducer:featuresReducer,
    priceReducer: priceReducer
});