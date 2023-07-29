import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000',
  }),

  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
    }),

    getBook: builder.query({
      query: (id) => `/books/${id}`,
    }),

    addBook: builder.mutation({
      query: (data) => ({
        url: '/books',
        method: 'POST',
        body: data,
      }),
    }),

    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
})

export const { useGetBooksQuery, useGetBookQuery, useAddBookMutation, useEditBookMutation } =
  apiSlice
