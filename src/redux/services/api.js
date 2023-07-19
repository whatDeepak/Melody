import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '66652b21femshe21f39624788153p1eae96jsn9aa265eacd4a',
//       'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    export const api = createApi({
      reducerPath: 'api',
      baseQuery: fetchBaseQuery({
        baseUrl: 'https://spotify81.p.rapidapi.com',
        prepareHeaders: (headers) => {
          headers.set('X-RapidAPI-Key','66652b21femshe21f39624788153p1eae96jsn9aa265eacd4a');
          headers.set('X-RapidAPI-Host','spotify81.p.rapidapi.com');

          return headers;
        },
      }),
      endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/top_200_tracks' }),
      }),
    });

    export const {
      useGetTopChartsQuery,
    } = api;