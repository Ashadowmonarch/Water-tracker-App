import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getSingleProduct } from "../services/api";

export function useAllProducts() {
  return useQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  });
}
export function useSingleProduct(productId) {
  return useQuery({
    queryKey: ["singleProduct", productId], // Pass productId as part of the queryKey
    queryFn: () => getSingleProduct(productId), // Pass productId to the query function
    enabled: !!productId, // Only run the query if productId is truthy
  });
}
