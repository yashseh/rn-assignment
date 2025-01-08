export type IPostRequestParams = {
    url: string;
    data: unknown;
    headers?: unknown;
};

export type IGetRequestParams = {
    url: string;
    headers?: unknown;
};

export type ICustomizedErrorResponse = {
    message: string;
    statusCode: number;
};
