import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/dist/query/react";

interface cryptoNewsQueryType {
    newsCategory: string,
    count: number
}
const cryptoNewsApiHeader = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '4de212d473mshe9955abbf7b5e38p1a7f58jsndf81e848d42c',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url: string) => ({url, headers : cryptoNewsApiHeader})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query<any,cryptoNewsQueryType>({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})
export const {useGetCryptoNewsQuery} = cryptoNewsApi