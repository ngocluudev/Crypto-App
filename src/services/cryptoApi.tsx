import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';

interface cryptoHistoryQueryType {
    coinId: string | undefined,
    timeperiod: string
} 
const cryptoApiHeaders = {
    'X-RapidAPI-Key': '4de212d473mshe9955abbf7b5e38p1a7f58jsndf81e848d42c',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url:string) => ({url , headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query<any,number>({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query<any,string | undefined>({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query<any, cryptoHistoryQueryType>({
            query: ({coinId, timeperiod}) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`)
        }),
        getExchanges: builder.query<any,void>({
            query: () => createRequest('/coin/Qwsogvtv82FCd/exchanges')
        })
    })
})

export const {useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery} = cryptoApi