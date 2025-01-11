import { ICustomizedErrorResponse } from '@/adapters/types';
import { ILocationProps } from '@/utils/geocoding';

export type ILoginInitialState = {
    user: IUser | null;
    status: 'idle' | 'loading' | 'success' | 'error';
    error: null | ICustomizedErrorResponse;
    getLocationCount: number;
    location: ILocationProps | null;
};

export type IUser = {
    id: number | null | undefined;
    username: string | null | undefined;
    email: string | null | undefined;
    firstName: string | null | undefined;
    lastName: string | null | undefined;
    gender: string | null | undefined;
    image: string | null | undefined;
    accessToken: string | null | undefined;
    refreshToken: string | null | undefined;
};

export type ILoginArgs = {
    username: string;
    password: string;
};
