import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = "AIzaSyDz1Xlb7S9TrVPH7Iv4p7J7zjtxuymluWg";

export const googleBooksApi = createApi({
  reducerPath: "googleBooksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.googleapis.com/books" }),
  endpoints: (builder) => ({
    getVolumeInfo: builder.query({
      query: (term) => `/v1/volumes?q=${term}&key=${API_KEY}`,
    }),
  }),
});

export const { useGetVolumeInfoQuery } = googleBooksApi;
