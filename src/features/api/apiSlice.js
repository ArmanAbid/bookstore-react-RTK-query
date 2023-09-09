import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    //GET BOOKS
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    //GET BOOK
    getBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["books"],
    }),
    //ADD BOOKS
    addBooks: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    //EDIT BOOKS
    editBooks: builder.mutation({
      query: (data) => ({
        url: `/books/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    //DELETE BOOKS
    deleteBooks: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBooksMutation,
  useGetBookQuery,
  useEditBooksMutation,
  useDeleteBooksMutation,
} = apiSlice;
