//Setup Redux Query Api
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001"}),
    tagTypes: ["Users", "Products", "Customers"],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["Users"]
        }),
        getProducts: builder.query({
            query: () => 'client/products',
            providesTags:["Products"]
        }),
        getCustomers: builder.query({
            query: () => "client/customers",
            providesTags: ["Customers"]
        })
    })
})

export const {useGetUserQuery, useGetProductsQuery, useGetCustomersQuery} = api;
