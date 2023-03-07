//Setup Redux Query Api
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001"}),
    tagTypes: ["Users", "Products", "Customers", "Transactions", "Sales"],
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
        }),
        getTransactions: builder.query({
            query: ({page, pageSize, sort, search }) => ({
                url: "client/transactions",
                method: "GET",
                params: {page, pageSize, sort, search}
            }),
            providesTags: ["Transactions"]
        }),
        getSales: builder.query({
            query: () => "sales/sales",
            providesTags: ["Sales"]
        })
    })
})

export const {
    useGetUserQuery, 
    useGetProductsQuery, 
    useGetCustomersQuery, 
    useGetTransactionsQuery,
    useGetSalesQuery
} = api;
