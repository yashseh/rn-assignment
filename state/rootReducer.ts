import { Reducer, combineReducers } from 'redux';
import LoginSlice from './slices/login/LoginSlice';
import LoadingSlice from './slices/loading/LoadingSlice';
import { ILoginInitialState } from './slices/login/LoginSlice.types';

//reducer combine
const combineReducer = combineReducers({
    user: LoginSlice,
    loading: LoadingSlice
});

//state type definitions
export interface IState {
    user: Reducer<ILoginInitialState>;
    loading: Reducer<ILoginInitialState>;
}

// reducer with  dehydrating  state capabilities
const rootReducer = (state: any, action: { type: string }) => {
    if (action.type === 'RESET') {
        state = undefined;
    }
    return combineReducer(state, action);
};
export default rootReducer;
