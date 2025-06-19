import { http, HttpResponse } from "msw";
import { GetPopularProductsResponse } from "../get-popular-products";

export const getPopularProductsMock = http.get<never, never, GetPopularProductsResponse>('/metrics/popular-products', ()=>{
  return  HttpResponse.json([
    {product: "Sanduuba", amount: 34},
    {product: "Pizza", amount: 49},
    {product: "Refri", amount: 5},
  ])
})