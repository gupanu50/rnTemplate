import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '@/Redux/Store';
import { URIS } from '@/Configration';

const prepareHeaders = (headers: any, { getState }: any) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    //   const token = (getState() as RootState).auth.token
    const appId = '643e4b49d15e0a6769599b0c'
    headers.set('app-id', appId)
    return headers
};
const baseQuery = fetchBaseQuery({ baseUrl: URIS.DEVELOPMENT, prepareHeaders: prepareHeaders })

const baseQueryWithInterceptor = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        // here you can deal with 401 error   
    }
    return result
}

export const baseApi = createApi({
    baseQuery: baseQueryWithInterceptor,
    endpoints: () => ({}),
})