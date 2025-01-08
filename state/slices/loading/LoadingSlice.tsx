import { createSlice } from '@reduxjs/toolkit';
import { ILoadingInitialState } from './LoadingSlice.types';
import { RootState } from '../../store';

const initialState: ILoadingInitialState = {
    isLoading: false
};
const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
});

export default loadingSlice.reducer;
export const { setLoading } = loadingSlice.actions;

export const loadingStateFromSlice = (state: RootState) => state.loading.isLoading;
