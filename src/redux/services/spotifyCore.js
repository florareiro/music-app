import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const spotifyApi = createApi({
    reducerPath:'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam.p.rapidapi.com',
    prepareHeaders:(headers) => {
        headers.set('X-RapidAPI-Key', 'b180d192e4msh213338d00cabbafp1bf62ejsn3fb6047e0971');
   
        return headers;
    },
}),
endpoints:(builder) => ({
    getTopCharts: builder.query({query: () => '/charts/track'})
}),
});
export const {
    useGetTopChartsQuery
} = spotifyApi;