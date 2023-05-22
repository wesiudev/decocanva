import { ImageProps } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const browseImages = createApi({
  reducerPath: "browseImages",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/images" }),
  tagTypes: ["pokemon"],
  endpoints: (builder) => ({
    getImages: builder.query<ImageProps[], void>({
        query: () => 'images',
        providesTags: (result: any) =>
          result ? result.map((image:ImageProps) => image ) : [],
      }),
    })
});