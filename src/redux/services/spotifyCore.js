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
    getTopCharts: builder.query({query: () => '/charts/track'}),
    getArtistDetails: builder.query({query: () => {`/artists/get-details=${artistId}`}}),
    getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details=${songid}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search=${searchTerm}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/songs/get-related-artist=${songid}` }),
   
}),
});
export const {
    useGetTopChartsQuery,
    useGetArtistDetailsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetSongsBySearchQuery

} = spotifyApi;