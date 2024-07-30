import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";


export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        getSingleProduct: builder.query({
            // query: (id) => `${PRODUCTS_URL}/${id}`
            query: (id) => ({
                url: `${PRODUCTS_URL}/${id}`
            }),
        })
    })
});


export const { useGetProductsQuery, useGetSingleProductQuery } = productApiSlice;

