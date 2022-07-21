import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://62d69e8549c87ff2af288379.mockapi.io',
    }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
      getContacts: builder.query({
        query: () => ({
          url: '/contacts',
        }),
        providesTags: ['Contact'],
      }),

      createContact: builder.mutation  ({
        query: newContact  => ({
          url: '/contacts',
          method: 'POST',
          body: newContact,
        }),
        invalidatesTags: ['Contact'],
      }),

      deleteContact: builder.mutation  ({
        query: contactId  => ({
          url: `/contacts/${contactId}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Contact'],
      }),
    //   getC
    //   getContactByid: builder.query({
    //     query: id => ({
    //       url: `/contacts/${id}`,
    //     }),
    //     providesTags: ['Contact'],
    //   }),
    //   deleteContact: builder.mutation({
    //     query: contactId => ({
    //       url: `/contacts/${contactId}`,
    //       method: 'DELETE',
    //     }),
    //     invalidatesTags: ['Contacts'],
    //   }),
    //   createContact: builder.mutation({
    //     query: newContact => ({
    //       url: '/contacts',
    //       method: 'POST',
    //       body: newContact,
    //     }),
    //     invalidatesTags: ['Contacts'],
    //   }),
    //   changeContact: builder.mutation({
    //     query: ({ contactId, ...newContact }) => ({
    //       url: `/contacts/${contactId}`,
    //       method: 'PUT',
    //       body: newContact,
    //     }),
    //     invalidatesTags: ['Contact', 'Contacts'],
    //   }),
    }),
  });

export const { useGetContactsQuery, useCreateContactMutation, useDeleteContactMutation } = contactApi;
