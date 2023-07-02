import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_DATABASE}/` }),
  tagTypes:['News', 'Products'],
  endpoints:()=> ({})
});



