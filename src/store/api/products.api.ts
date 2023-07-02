import { api } from "./api";
import { IProduct, INews } from "../../types/types";

const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], {title?:string}>({
        query: (params) => `trendy${params.title ? `?title=${params.title}` : ''}`,
        providesTags:()=>[{
          type:'Products'
        }]
    }),
    getLimitProducts:builder.query<IProduct[], {limit:string, page:string}>({
        query: (params) => `trendy?limit=${params.limit}&page=${params.page}`,
    }),
    getSortedProducts:builder.query<IProduct[], {sortBy:string, order:string}>({
        query: (params) => `trendy?sortBy=${params.sortBy}&order=${params.order}`,
    }), 
    getNews: builder.query<INews[], {title?:string, id?:string}>({
      query: (params) => `news/${params.id ? `${params.id}` : ''}${params.title ? `?title=${params.title}` : ''}`,
      providesTags:()=>[{
        type:'News'
      }]
    }),
    getLimitNews: builder.query<INews[], {limit:string, page:string}>({
        query: (params) => `news?limit=${params.limit}&page=${params.page}`,
      }),
    changeNewsItem: builder.mutation<INews, { body: INews; id: string }>({
      query: ({ body, id }) => ({
        url: `news/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ()=>[{
        type:'News'
      }]
    }),
    changeProductItem: builder.mutation<IProduct,{ body: IProduct; id: string }>({
      query: ({ body, id }) => ({
        url: `trendy/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ()=>[{
        type:'Products'
      }]
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetLimitProductsQuery,
  useGetSortedProductsQuery,
  useGetNewsQuery,
  useGetLimitNewsQuery,
  useChangeNewsItemMutation,
  useChangeProductItemMutation,
} = productsApi;
