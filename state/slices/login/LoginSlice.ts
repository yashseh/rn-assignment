import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICustomizedErrorResponse } from '@/adapters/types';
import { postApiCall } from '@/adapters/apiManager';
import { endpoints } from '@/adapters/endpoints';
import { ILoginInitialState, IUser, ILoginArgs } from './LoginSlice.types';
import { RootState } from '@/state/store';

const initialState: ILoginInitialState = {
    user: null,
    status: 'loading',
    error: null
};

export const loginHandler = createAsyncThunk<
    { data: IUser | null; error: ICustomizedErrorResponse | null },
    ILoginArgs
>('login/user', async (args: ILoginArgs) => {
    try {
        const response: IUser = await postApiCall({
            url: endpoints.login,
            data: args
        });
        return {
            data: response,
            error: null
        };
    } catch (error) {
        const customizedError = error as ICustomizedErrorResponse;
        console.log(error, 'ERROR');
        return {
            data: null,
            error: customizedError
        };
    }
});

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginHandler.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginHandler.fulfilled, (state, action) => {
                state.status = 'success';
                state.user = action.payload.data;
                state.error = action.payload.error;
            })
            .addCase(loginHandler.rejected, (state, action) => {
                state.status = 'error';
                state.user = null;
            });
    }
});

export default loginSlice.reducer;

export const userFromState = (state: RootState) => state.user.user;
export const userSliceState = (state: RootState) => state.user.status;
export const userSliceError = (state: RootState) => state.user.error;
