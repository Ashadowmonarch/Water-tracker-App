import { useQuery } from "@tanstack/react-query";
import { getAllWater } from "./api";

export function useAllWater() {
  return useQuery({
    queryKey: ["allWater"],
    queryFn: getAllWater,
  });
}
