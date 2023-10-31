import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { URIS, URL_ENDPOINTS } from '@/Configration';
import {Posts} from 'types';

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:URIS.DEVELOPMENT,
        prepareHeaders(headers){
            const appId = '643e4b49d15e0a6769599b0c'
            headers.set('app-id', appId)
            return headers;
        },
    }),
    endpoints(builder){
        return{
            fetchPosts:builder.query<Posts,number|void>({
                query(limit = 10){
                    return `${URL_ENDPOINTS.POSTS}?limit=${limit}`;
                },
            }),
        };
    },
});

export const {useFetchPostsQuery} = apiSlice;